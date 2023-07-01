import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="p-20 bg-gray-200 text-center flex-auto justify-center">
            <h1 className="text-3xl font-bold text-black pb-10 p-10">
                Por aca no es
            </h1>
            <Link to={'/'} className='grid rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 text-black text-xl'>
                <button type='button' className="">
                    Volver
                </button>
            </Link>
        </div>
    );
}