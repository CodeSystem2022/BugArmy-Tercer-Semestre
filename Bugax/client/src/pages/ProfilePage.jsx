import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";

export default function ProfilePage() {
    const [redirect, setRedirect] = useState(null);
    const { ready, user, setUser } = useContext(UserContext);
    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }
    //PANTALLA DE CARGANDO...
    if (!ready) {
        return '<span className="text-center w-screen"> Cargandowo... </span>';
    }
    //SI NO ESTA LOGEADO, PAL LOGGIN
    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }


    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div className="grow bg-gray-200">
            <AccountNav />
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Registrado como {user.name} ({user.email}) <br />
                    <button onClick={logout} className="primary max-w-sm mt-2">Cerrar sesion</button>
                </div>
            )}
            {subpage === 'places' && (
                <PlacesPage />
            )}
        </div>
    );
}