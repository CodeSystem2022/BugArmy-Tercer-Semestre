import PhotosUploader from "../PhotosUploader";
import Perks from "../Perks";
import { useEffect, useState } from "react";
import axios from "axios";
import AccountNav from "../AccountNav";
import { Navigate, useParams } from "react-router-dom";

export default function PlacesFormPage() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);
    const [price, setPrice] = useState(100);
    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/places/' + id).then(response => {
            const { data } = response;
            setTitle(data.title);
            setAddress(data.address);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setPerks(data.perks);
            setExtraInfo(data.extraInfo);
            setCheckIn(data.checkIn);
            setCheckOut(data.checkOut);
            setMaxGuests(data.maxGuests);
            setPrice(data.price);
        });
    }, [id]);
    //los titulos en funcion
    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        );
    }
    //Las descripciones en funcion
    function inputDescription(text) {
        return (
            <p className="text-gray-500 text-sm">{text}</p>
        );
    }
    //Funcion que adjunta las dos funciones de arriba
    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }

    async function savePlace(ev) {
        ev.preventDefault();
        const placeData = {
            title, address, addedPhotos,
            description, perks, extraInfo,
            checkIn, checkOut, maxGuests, price,
        };
        if (id) {
            // actualizar
            await axios.put('/places', {
                id, ...placeData
            });
            setRedirect(true);
        } else {
            // nuevo lugar
            await axios.post('/places', placeData);
            setRedirect(true);
        }

    }

    if (redirect) {
        return <Navigate to={'/account/places'} />
    }

    return (
        <div className="places-cont px-[10%] h-screen bg-gray-200 overflow-hidden pb-5">
            <AccountNav />
            <form onSubmit={savePlace} className="w-[100%] place-items-center">
                <div className="flex justify-between">
                    {/* Titulo */}
                    <div className="formatForm">
                        {preInput('Titulo', 'Titulo para tu publicacion')}
                        <input type="text" 
                            required 
                            className="Places peer"
                            value={title}
                            onChange={ev => setTitle(ev.target.value)}
                            placeholder="Ej: Cabañas en San Rafael" />
                    </div>

                    {/* Direccion */}
                    <div className="formatForm">
                        {preInput('Direccion', 'Direccion de tu alojamiento')}
                        <input type="text"
                            required
                            className="Places peer"
                            value={address}
                            onChange={ev => setAddress(ev.target.value)}
                            placeholder="Ej: Calle 4444 Barrio " />
                    </div>
                    {/* Descripcion */}

                    <div className="formatForm">
                        {preInput('Descripcion', 'Descripcion del alojamiento')}
                        <input type="text"
                            required
                            className="Places hover:peer"
                            value={description}
                            onChange={ev => setDescription(ev.target.value)} />
                        <p className="invisible peer-invalid:visible text-red-500">naaaaaaooooooo</p>
                    </div>
                </div>

                {/* Fotos */}

                {preInput('Fotos', 'Añade algunas fotos del lugar que vas a publicar')}
                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

                {/* Perks */}

                {preInput('Caracteristicas', 'Seleccione los beneficios que incluye el alojamiento')}
                <div className="perkListContainer [&>.item:has(~.item:hover)]:border-violet-700">
                    <Perks selected={perks} onChange={setPerks} />
                </div>

                {/* Detalle */}

                {preInput('Informacion adicional', 'Agregue una descripcion detallada')}
                <input type="text" className="Places"
                    onChange={ev => setExtraInfo(ev.target.value)} />

                {/* Horarios - Huesped */}
                <div className="horarios-huespedesContainer mt-5 mb-3 w-full">
                    <div className="horarios flex justify-between text-center gap-4 text-gray-500">
                        {/* Horario Entrada */}
                        <div className=" flex justify-start align-middle [&>.item:has(~.item:focus)]:border-violet-700">
                            <h3 className="item w-[250px] self-center border-b-2 h-[28px] border-blue-300">Horario de entrada</h3>
                            <input type="number" min={0} max={23} className="item hourInputs self-center"
                                value={checkIn}
                                onChange={ev => setCheckIn(ev.target.value)}
                                placeholder="04" />
                        </div>
                        {/* Horario Salida */}
                        <div className="flex justify-start align-middle [&>.item:has(~.item:focus)]:border-violet-700">
                            <h3 className="item w-[250px] self-center border-b-2 h-[28px] border-blue-300">Horario de salida</h3>
                            <input type="number" min={0} max={23} className="item hourInputs self-center"
                                value={checkOut}
                                onChange={ev => setCheckOut(ev.target.value)}
                                placeholder="11" />
                        </div>
                        {/* Huespedes */}
                        <div className="flex justify-start align-middle [&>.item:has(~.item:focus)]:border-violet-700">
                            <h3 className="item w-[250px] self-center border-b-2 h-[28px] border-blue-300">Cantidad de huespedes</h3>
                            <input type="number" min={0} max={50} className="item hourInputs self-center"
                                value={maxGuests}
                                onChange={ev => setMaxGuests(ev.target.value)} />
                        </div>
                        {/* Precio */}
                        <div className="flex justify-start align-middle [&>.item:has(~.item:focus)]:border-violet-700">
                            <h3 className="item w-[250px] self-center border-b-2 h-[28px] border-blue-300">Precio por noche</h3>
                            <input type="number" min={0} className="item hourInputs self-center"
                                value={price}
                                onChange={ev => setPrice(ev.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10 w-full">
                <button className="self-center border-b-2 bg-transparent text-xl text-gray-500 rounded-md focus:animate-ping hover:border-violet-700 pt-2 pb-1 px-7 border-blue-300">Guardar</button>
                </div>
            </form>
        </div>
    );
}