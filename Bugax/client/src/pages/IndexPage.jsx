import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../Image";

export default function IndexPage() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get('/places').then(response => {
            setPlaces(response.data);
        });
    }, []);
    return (
        <div className="p-8 pt-10 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4  border-2 border-yellow-400">
            {places.length > 0 && places.map(place => (
                
                <Link to={'/place/' + place._id} key="">
                    <div className="border border-green-300">
                    <h3 className="text-sm text-gray-900 pb-2 text-center">{place.title}</h3>
                    <div className="bg-gray-500 grow min-h-[425px] max-h-[425px] mb-2 border-2 border-rose-500 flex">
                        {place.photos?.[0] && (
                            <Image className=" object-cover aspect-square" src={place.photos?.[0]} alt="" />
                        )}
                    </div>
                    <h2 className="font-bold text-center">{place.address}</h2>
                   
                    <div className="mt-1">
                        <span className="font-bold"> ${place.price} </span> <span className="text-gray-500">por noche</span>
                   
                    </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}