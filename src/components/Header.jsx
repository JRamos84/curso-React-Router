import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import { useSelector, useDispatch } from "react-redux";
import gravatar from "../utils/gravatar";
import { logoutRequest } from "../actions";
function Header() {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  const hasUser = Object.keys(user).length > 0;
console.log(hasUser)
  const handleLogout = ()=>{
    dispatch(logoutRequest({}))

  }
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}

          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href="/">{user.name}</a>
            </li>
          ) : null}

          {hasUser ? <li> <a href="#logout" onClick={handleLogout}>Cerrar sesión</a></li> : <li>
            <Link to="/login">Iniciar Sesión</Link>
          </li>}

          
        </ul>
      </div>
    </header>
  );
}

export default Header;
