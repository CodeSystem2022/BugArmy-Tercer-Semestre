import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AddressLink from "../AddressLink";
import PlaceGallery from "../PlaceGallery";
import BookingDates from "../BookingDates";
import Perks from "../Perks";

export default function BookingPage() {
    const { id } = useParams();
    const [booking, setBooking] = useState(null);
    const [perks, setPerks] = useState([]);
    useEffect(() => {
        if (id) {
            axios.get('/bookings').then(response => {
                const foundBooking = response.data.find(({ _id }) => _id === id);
                if (foundBooking) {
                    setBooking(foundBooking);
                }
            setPerks(perks);
            });
        }
    }, [id]);

    if (!booking) {
        return '';
    }

    return (
        <div className="my-8">
            <h1 className="text-3xl">{booking.place.title}</h1>
            <AddressLink className="my-2 block">{booking.place.address}</AddressLink>
            <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between">
                <span>uwuwuwuwuuw</span>
                <div>
                    {Perks.map((Perks, index) => (
                        <ul key={""}>
                            <li key={index}>{perks}</li> 
                        </ul>   
                    ))}
                </div>
                <div>
                    <h2 className="text-2xl mb-4">Informacion de tus reservas:</h2>
                    <BookingDates booking={booking} />
                </div>
                <div className="bg-primary p-6 text-white rounded-2xl">
                    <div>Precio total</div>
                    <div className="text-3xl">${booking.price}</div>
                </div>
            </div>
            <PlaceGallery place={booking.place} />
        </div>
    );
}