/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
//#################################################################
export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUser } = useContext(UserContext);
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            const { data } = await axios.post('/login', { email, password });
            setUser(data);
            alert("Iniciaste sesion exitosamente");
            setRedirect(true);
        } catch (e) {
            alert('Error al iniciar sesion');
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    //#################################################################
    return (
        <div className="bg-[url('../../resources/images/bg_blur.jpg')] bg-cover rerelative w-screen h-screen flex justify-center items-center">
            <div className=" flex justify-center bg-[url('../../resources/images/bg_blur.jpg')] bg-cover  z-[-1] absolute top-0 left-0 right-0 bottom-0" />
            <div className="flex justify-between place-items-start shadow-[0px_0px_20px_1px] shadow-blue-800 bg-[url('../../resources/images/bg_register.jpg')] bg-cover w-[75%] h-[75%]">
            <Link to={'/'} className="text-center flex items-center py-5 px-10">
            <img src="/resources/images/Bugax_logo_v1.8.png" alt="logo" className="mainLogo" />
                <span className="font-bold text-xl mb-0.5">Bugax</span>
            </Link>
                <div className="loginbar h-[100%] pt-[10%] border-l border-blue-500 shadow-[-15px_2px_19px_-9px] shadow-blue-600 overflow-hidden bg-black bg-opacity-40 backdrop-blur-sm">
                    <h1 className="text-4xl p-4 text-left -mt-14 text-gray-300 mb-[15%] ">Iniciar Sesión</h1>
                    <form className="max-w-sm mr-3.5 text-center " onSubmit={handleLoginSubmit}>
                        <input type="email" className="textRegister"
                            placeholder="bugax@email.com"
                            value={email}
                            onChange={ev => setEmail(ev.target.value)} />
                        <input type="password" className="textRegister"
                            placeholder="Contraseña"
                            value={password}
                            onChange={ev => setPassword(ev.target.value)} />
                        <button className="primary">Iniciar Sesión</button>
                        <div className="text-center py-2 text-gray-300">
                            ¿No estas registrado? <Link className="underline text-l text-gray-400 hover:text-violet-500" to={'/register'}>Crear cuenta</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
}