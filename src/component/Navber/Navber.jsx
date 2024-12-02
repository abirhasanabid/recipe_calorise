import { IoIosSearch } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";


const Navber = () => {
    return (
        <div className="navbar bg-base-100 my-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold">Recipe Calories</a>
            </div>
            <div className="navbar-center hidden lg:flex text-[#150B2BB3]">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Recipe</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
            </div>
            <div className="navbar-end relative">
                <input className="bg-[#F2F2F3] text-[#150B2BB3] rounded-3xl py-3 pl-6" placeholder="Search" type="search" name="" id="" />
                <IoIosSearch className='text-2xl text-gray-400 absolute mr-44'></IoIosSearch>
                <div className="bg-[#4AEA8E] p-3 rounded-full ml-4">
                    <FaRegCircleUser className="text-2xl text-gray-600"></FaRegCircleUser>
                </div>
            </div>
        </div>
    );
};

export default Navber;