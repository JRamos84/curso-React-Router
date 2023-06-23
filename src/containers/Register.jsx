import React, { useState } from "react";
import "../assets/styles/components/Register.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerRequest } from "../actions";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const [form, setValue] = useState({
    email: "",
    name: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigator = useNavigate()
  const handleInput = (event) => {
    setValue({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerRequest(form))
    navigator('/')
    
  };
  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Nombre"
            onChange={handleInput}
            name="name"
          />

          <input
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleInput}
            name="email"
          />
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
            name="password"
          />
          <button className="button">Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  );
}

export default Register;
