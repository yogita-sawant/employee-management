import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, Menu } from 'lucide-react';

const HomePage = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch('http://localhost:8080/employee/attendances');
                if (response.ok) {
                    const data = await response.json();
                    setEmployees(data);
                } else {
                    console.error("Failed to fetch employees data");
                }
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 bg-[#f7f8fa]">
            <nav className="sticky top-0 z-50 bg-[#1676E2] shadow-lg">
                <div className="mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 bg-white">
                            <img
                                src="/images/logo.png"
                                alt="Logo"
                                className="h-8 w-auto m-2"
                            />
                        </div>

                        <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    placeholder="Search employees..."
                                    className="w-full pl-10 pr-4 py-2 rounded-full bg-white border-0 focus:ring-2 focus:ring-blue-300 transition-all"
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center space-x-6">
                            <Bell className="h-6 w-6 text-white cursor-pointer hover:text-blue-200 transition-colors" />
                            <div className="flex items-center space-x-3">
                                <img
                                    src="/images/profile.png"
                                    alt="Manager"
                                    className="w-10 h-10 rounded-full border-2 border-white p-0.5"
                                />
                                <span className="hidden sm:block text-white font-medium">Manager Name</span>
                            </div>
                            <Menu className="h-6 w-6 text-white cursor-pointer hover:text-blue-200 transition-colors sm:hidden" />
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {isLoading ? (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="relative w-16 h-16">
                                <div className="w-16 h-16 rounded-full border-4 border-blue-100"></div>
                                <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-[#1676E2] border-t-transparent animate-spin"></div>
                            </div>
                            <p className="text-gray-600 font-medium">Loading Employees Details...</p>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredEmployees.map((employee) => (
                            <div
                                key={employee.id}
                                onClick={() => navigate(`/employee/${employee.employeeId}`, { state: { employee } })}
                                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-blue-200"
                            >
                                <div className="p-6">
                                    <div className="flex flex-col items-center">
                                        <div className="relative mb-4 group-hover:transform group-hover:scale-105 transition-transform duration-300">
                                            <div className="w-24 h-24 rounded-full overflow-hidden shadow-md">
                                                <img
                                                    src="/images/user.png"
                                                    alt={employee.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        <div className="text-center space-y-2">
                                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#1676E2] transition-colors">
                                                {employee.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 font-medium">
                                                {employee.jobTitle}
                                            </p>
                                            <div className="pt-2">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                                                    View Details
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {!isLoading && filteredEmployees.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-12">
                        <p className="text-gray-600 font-medium">No employees found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;