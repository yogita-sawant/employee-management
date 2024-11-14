import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Clock, Calendar, Timer, Bell, Menu, Briefcase, Calendar as CalendarIcon } from 'lucide-react';

const EmployeeDetails = () => {
    const location = useLocation();
    const { employee } = location.state || {};
    const navigate = useNavigate();
    const [employeeDetails, setEmployeeDetails] = useState(null);

    useEffect(() => {
        if (employee.employeeId) {
            const fetchEmployeeDetails = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/employee/attendance/${employee?.employeeId}`);
                    if (response.ok) {
                        const data = await response.json();
                        setEmployeeDetails(data);
                    } else {
                        console.error("Failed to fetch employee details");
                    }
                } catch (error) {
                    console.error("Error:", error);
                }
            };

            fetchEmployeeDetails();
        }

    }, [employee.employeeId]);

    if (!employeeDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-indigo-50 to-purple-50">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                    <div className="text-xl text-indigo-600 font-medium">Loading employee data...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f7f8fa]">

            <nav className="sticky top-0 z-50 bg-[#1676E2] shadow-lg">
                <div className=" mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 bg-white">
                            <img
                                src="/images/logo.png"
                                alt="Logo"
                                className="h-8 w-auto m-2"
                            />
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

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg shadow-indigo-100 p-8 mb-8 transition-all hover:shadow-xl">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="w-32 h-20 bg-[#1676e2] rounded-2xl flex items-center justify-center transform transition-transform hover:scale-105 shadow-lg">
                        <span className="text-4xl font-bold text-white">
                            {employeeDetails.name.charAt(0)}
                        </span>
                    </div>
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold bg-[#1676e2] bg-clip-text text-transparent">
                            {employeeDetails.name}
                        </h1>
                        <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start">
                            <Briefcase className="w-4 h-4 text-gray-400" />
                            <p className="text-gray-600">{employeeDetails.jobTitle}</p>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start">
                            <span className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:bg-indigo-200 transition-colors">
                                <Clock className="w-4 h-4" />
                                {employeeDetails.shift}
                            </span>
                            <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:bg-purple-200 transition-colors">
                                <CalendarIcon className="w-4 h-4" />
                                {employeeDetails.policy}
                            </span>
                        </div>
                    </div>
                    <div className='flex w-full justify-end'>
                        <button
                            onClick={() => navigate('/home')}
                            className="mt-4 bg-[#1676e2] text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg shadow-indigo-100 p-6 transition-all hover:shadow-xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-indigo-100 rounded-lg">
                            <Calendar className="w-6 h-6 text-indigo-600" />
                        </div>
                        <h2 className="text-lg font-semibold">Attendance Summary</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                            <p className="text-sm text-gray-600 mb-1">Present</p>
                            <p className="text-3xl font-bold text-green-600">{employeeDetails.present}</p>
                        </div>
                        <div className="p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                            <p className="text-sm text-gray-600 mb-1">Absent</p>
                            <p className="text-3xl font-bold text-red-600">{employeeDetails.absent}</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                            <p className="text-sm text-gray-600 mb-1">Leaves</p>
                            <p className="text-3xl font-bold text-blue-600">{employeeDetails.leaves}</p>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                            <p className="text-sm text-gray-600 mb-1">Comp Offs</p>
                            <p className="text-3xl font-bold text-purple-600">{employeeDetails.compOff}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg shadow-indigo-100 p-6 transition-all hover:shadow-xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-indigo-100 rounded-lg">
                            <Clock className="w-6 h-6 text-indigo-600" />
                        </div>
                        <h2 className="text-lg font-semibold">Working Hours</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Total TWD</p>
                                <p className="text-2xl font-bold text-indigo-600">{employeeDetails.totalWorkingHoursTWD}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-600 mb-1">Average</p>
                                <p className="text-2xl font-bold text-indigo-600">{employeeDetails.averageTWD}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Total FWD</p>
                                <p className="text-2xl font-bold text-purple-600">{employeeDetails.totalWorkingHoursFWD}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-600 mb-1">Average</p>
                                <p className="text-2xl font-bold text-purple-600">{employeeDetails.averageFWD}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg shadow-indigo-100 p-6 transition-all hover:shadow-xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-indigo-100 rounded-lg">
                            <Timer className="w-6 h-6 text-indigo-600" />
                        </div>
                        <h2 className="text-lg font-semibold">Punctuality</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors">
                                <p className="text-sm text-gray-600 mb-1">Late Marks</p>
                                <p className="text-2xl font-bold text-yellow-600">{employeeDetails.lateMarks}</p>
                            </div>
                            <div className="p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                                <p className="text-sm text-gray-600 mb-1">Early Outs</p>
                                <p className="text-2xl font-bold text-orange-600">{employeeDetails.earlyClockOuts}</p>
                            </div>
                        </div>
                        <div className="p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-gray-600 mb-1">Overtime Days</p>
                                <p className="text-2xl font-bold text-green-600">{employeeDetails.overtimeDays}</p>
                            </div>
                            <div className="mt-3">
                                <p className="text-sm text-gray-600 mb-1">Average</p>
                                <p className="text-xl font-bold text-green-600">{employeeDetails.avgOvertime.toFixed(2)} hrs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;