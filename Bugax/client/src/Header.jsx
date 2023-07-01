import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";

export default function Header() {
    const { user } = useContext(UserContext);
    return (
        <header className="z-[15] border-b border-blue-300 bg-neutral-900 aspect-auto overflow-hidden">
            <div className="mainNav flex left-0 right-0 shadow shadow-red-300 justify-between px-4 top-0 w-screen border-b border-transparent items-center">
                {/* LOGO */}
                <Link to={'/'} className='flex self-center'>
                    <img src="/resources/images/Bugax_logo_v1.8_blanco.png" alt="logo" className="mainLogo logoHover self-start align-middle" />
                    <span className="font-bold text-white text-xl self-center">Bugax</span>
                </Link>
                {/* NAVBAR */}
                <div className="flex self-center justify-center gap-5 grow-0 xl:grow align-middle items-center pointer-events-auto text-l xl:text-sm 2xl:text-base">
                    <Link to={"/"} className="text-white">Descubrir</Link>
                    <div className='border-l self-stretch border-blue-300'></div>
                    <Link to={"/account/bookings"} className="text-white">Mis reservas</Link>
                    <div className='border-l self-stretch border-blue-300'></div>
                    <Link to={"/account/places"} className="text-white">Mis alojamientos</Link>
                    {/* LUPA */}
                    <button className='bg-transparent text-blue-400 p-1 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
                {/* PERFIL */}
                {/* PREGUNTA */}
                <div className='flex items-center gap-2 justify-center align-middle py-1 px-4 pointer-events-auto text-sm xl:text-md 2xl:text-md'>
                    <Link to={'/AboutUs'} className='flex self-center'>
                        <button className="border-none bg-transparent">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 xl:w-4 xl:h-4 2xl:w-6 2xl:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                            </svg>
                        </button>
                    </Link>
                    {/* USUARIO */}
                    
                    <Link to={user ? '/account' : '/login'} className=''>
                        <div className="bg-blue-200 text-black rounded-full border border-blue-300 gap-1 flex p-1 px-3 items-center justify-center overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 overflow-hidden border border-black rounded-full bg-black text-white top-1">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                            </svg>
                            {!!user && (
                            <div className="text-sm xl:text-sm 2xl:text-md">
                                {user.name}
                            </div>
                        )}
                        </div>
                        
                    </Link>
                </div>
            </div>
        </header>
    );
}