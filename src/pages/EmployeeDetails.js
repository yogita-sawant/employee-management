import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EmployeeDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { employee } = location.state || {};

    if (!employee) {
        return <div>No employee data found</div>;
    }

    return (
        <div className="min-h-screen bg-lightBlue-50 p-4 sm:p-8">
            <header className="w-full p-6 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-md flex flex-col sm:flex-row sm:justify-between items-center">
                <img
                    src="/images/logo.png"
                    alt="Logo"
                    className="w-auto h-auto"
                />
                <div className="flex items-center mt-4 sm:mt-0">
                    <img src="https://i.pinimg.com/236x/02/59/54/0259543779b1c2db9ba9d62d47e11880.jpg" alt="Manager" className="w-12 h-12 rounded-full border-2 border-white" />
                    <span className="ml-3 text-lg text-white">Manager Name</span>
                </div>
            </header>
            <div className='flex w-full justify-end'>
                <button
                    onClick={() => navigate('/home')}
                    className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                    Back to Home
                </button>
            </div>
            <div className="mt-6 sm:mt-8">
                <div className="flex flex-col sm:flex-row items-center mb-4 p-4 bg-white shadow-md rounded-lg">
                    <img src={employee.profileImg} alt={employee.name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover" />
                    <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col sm:flex-row gap-4 sm:gap-12">
                        <h1 className="text-xl sm:text-2xl font-bold">{employee.name}</h1>
                        <p className="text-lg sm:text-xl">{employee.position}</p>
                    </div>
                </div>

                <div className="mt-6 sm:mt-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">Weekly Attendance</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-8 items-center">
                        {employee.attendance.map((day, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div
                                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white ${day.present ? 'bg-green-300' : 'bg-red-300'}`}
                                >
                                    {day.day.charAt(0)}
                                </div>
                            </div>
                        ))}
                        <div className="sm:col-span-full md:col-span-1 text-center text-lg text-gray-700 mt-4">
                            {employee.attendance.filter(day => day.present).length >= 2 ? 'Two days done' : 'Two days not done'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;
