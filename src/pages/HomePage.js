import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const employees = [
        {
            id: 1, name: 'Alice Johnson', position: 'Developer', profileImg: 'https://i.pinimg.com/236x/02/59/54/0259543779b1c2db9ba9d62d47e11880.jpg', attendance: [
                { day: 'Mon', present: false },
                { day: 'Tue', present: false },
                { day: 'Wed', present: false },
                { day: 'Thu', present: false },
                { day: 'Fri', present: false }
            ]
        },
        {
            id: 2, name: 'Robert White', position: 'UX Designer', profileImg: 'https://i.pinimg.com/236x/02/59/54/0259543779b1c2db9ba9d62d47e11880.jpg', attendance: [
                { day: 'Mon', present: true },
                { day: 'Tue', present: false },
                { day: 'Wed', present: true },
                { day: 'Thu', present: false },
                { day: 'Fri', present: true }
            ]
        },
        {
            id: 3, name: 'Linda Green', position: 'Manager', profileImg: 'https://i.pinimg.com/236x/02/59/54/0259543779b1c2db9ba9d62d47e11880.jpg', attendance: [
                { day: 'Mon', present: true },
                { day: 'Tue', present: false },
                { day: 'Wed', present: true },
                { day: 'Thu', present: false },
                { day: 'Fri', present: true }
            ]
        },
        {
            id: 4, name: 'Alice Johnson', position: 'Developer', profileImg: 'https://i.pinimg.com/236x/02/59/54/0259543779b1c2db9ba9d62d47e11880.jpg', attendance: [
                { day: 'Mon', present: true },
                { day: 'Tue', present: false },
                { day: 'Wed', present: true },
                { day: 'Thu', present: false },
                { day: 'Fri', present: true }
            ]
        },
        {
            id: 5, name: 'Robert White', position: 'UX Designer', profileImg: 'https://i.pinimg.com/236x/02/59/54/0259543779b1c2db9ba9d62d47e11880.jpg', attendance: [
                { day: 'Mon', present: true },
                { day: 'Tue', present: false },
                { day: 'Wed', present: true },
                { day: 'Thu', present: false },
                { day: 'Fri', present: true }
            ]
        },
        {
            id: 6, name: 'Linda Green', position: 'Manager', profileImg: 'https://i.pinimg.com/236x/02/59/54/0259543779b1c2db9ba9d62d47e11880.jpg', attendance: [
                { day: 'Mon', present: true },
                { day: 'Tue', present: false },
                { day: 'Wed', present: true },
                { day: 'Thu', present: false },
                { day: 'Fri', present: true }
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-lightBlue-50">
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
            <div className="p-4 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {employees.map((employee) => (
                    <div
                        key={employee.id}
                        className="p-4 bg-gradient-to-br from-lightBlue-100 to-lightBlue-200 rounded-xl shadow-lg transform hover:scale-105 transition-transform cursor-pointer"
                        onClick={() => navigate(`/employee/${employee.id}`, { state: { employee } })}
                    >
                        <div className="flex flex-col items-center mb-4">
                            <img
                                src={employee.profileImg}
                                alt={employee.name}
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        </div>
                        <div className="text-left">
                            <h3 className="text-lg sm:text-xl font-semibold text-black mb-1">{employee.name}</h3>
                            <p className="text-black">{employee.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
