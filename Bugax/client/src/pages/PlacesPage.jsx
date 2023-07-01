import { Link } from "react-router-dom";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg";
export default function PlacesPage() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get('/user-places').then(({ data }) => {
            setPlaces(data);
        });
    }, []);
    return (
        <div className="bg-gray-200 w-full h-full">
            <AccountNav />
            {/* BOTON DE AÑADIR LUGAR DENTRO ALOJAMIENTO */}
            <div className="text-center">
                <Link className="inline-flex gap-1 bg-indigo-600 text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Añadir lugar
                </Link>
            </div>
            <div className="mt-4 p-2">
                {places.length > 0 && places.map(place => (
                    <Link to={'/account/places/' + place._id} key="" className="flex cursor-pointer gap-4 bg-gray-100 shadow shadow-indigo-300 border border-blue-200 p-2 mx-[5%] mb-4">
                        <div className="flex w-32 h-32 bg-gray-600 grow-0 shrink-0">
                            <div>
                                <PlaceImg place={place} />
                            </div>
                        </div>
                        <div className="grow-0 shrink h-32 overflow-hidden pb-3 border-b border-blue-300 w-full">
                            <h2 className="text-xl">{place.title}</h2>
                            <p className="text-sm mt-2">{place.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}