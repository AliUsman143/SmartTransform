import React, { useState } from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import Link from "next/link"
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

function Header() {
    const router = useRouter();
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const handleLogout = () => {
        Swal.fire({
            icon: "success",
            title: "Logout",
            text: "Your account has been logged out.",
            confirmButtonText: "OK",
        }).then(() => {
            Cookies.remove('token');
            router.push("../../auth/login");
        });
    }

    return (
        <header className="bg-white shadow-md fixed top-0 w-full flex items-center p-2 border-b border-gray-200 z-10">
            <div className="flex items-center justify-between w-full">
                {/* Left Side Text */}
                <div className="text-xl font-semibold">
                    Digital Solutions
                </div>

                {/* Right Side Icons */}
                <div className="flex items-center space-x-1">
                    {/* Notification Icon */}
                    <div className="relative">
                        <button
                            className="p-2 text-gray-600 hover:text-gray-800"
                            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                        >
                            <FaBell className="text-lg" />
                        </button>
                        {/* Notification Dropdown */}
                        {isNotificationsOpen && (
                            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg">
                                <ul className="max-h-64 overflow-y-auto">
                                    <li className="p-2 border-b border-gray-200">Notification 1</li>
                                    <li className="p-2 border-b border-gray-200">Notification 2</li>
                                    <li className="p-2 border-b border-gray-200">Notification 3</li>
                                    <li className="p-2 border-b border-gray-200">Notification 4</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Profile Icon */}
                    <div className="relative">
                        <button
                            className="p-2 text-gray-600 hover:text-gray-800"
                            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                        >
                            <FaUserCircle className="text-lg" />
                        </button>
                        {/* Profile Menu Dropdown */}
                        {isProfileMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
                                <ul>
                                    <li className="p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100">Profile</li>
                                    <li className="p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100">Settings</li>
                                    <li className="p-2 cursor-pointer hover:bg-gray-100" onClick={handleLogout} >Logout</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;