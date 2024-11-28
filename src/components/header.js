import image from '../BG-img/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg'

import { Link, NavLink } from "react-router-dom";
import { signInWithPopup, signOut} from "firebase/auth";
import { useState } from "react";
import { auth, provider } from "../firebase/config";

const Header = () => {
    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')) || false);
    

    function handleLogin(){
        signInWithPopup(auth, provider).then((result) => {
            console.log(result)
            setIsAuth(true)
            localStorage.setItem('isAuth', true)
        })
    }

    function handleLogout(){
        signOut(auth)
        setIsAuth(false)
        localStorage.setItem('isAuth', false)
    }


    return ( 
        <header>
            <Link to="/" className="link">
                <img src={image} alt="Logo"/>
                <p>Qoutes</p>
            </Link>
        
            <nav className="Nav">
                <NavLink to="/" className="navlink">Home</NavLink>
                {isAuth ? (
                     <>
                        <NavLink to="/create" className="navlink">Create</NavLink>
                        <button onClick={handleLogout} className="login-btn"> <i className="bi bi-box-arrow-right"></i> Logout</button>
                     </>
                ) : ( <button onClick={handleLogin} className="login-btn"> <i className="bi bi-google"></i>Login</button>)}
            </nav>
            {/* <span className='menu-bar'> <i class="bi bi-list"></i></span> */}
        </header>
     );
}
 
export default Header;