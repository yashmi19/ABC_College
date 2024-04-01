
import React, { Fragment, useEffect } from 'react'
import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode'
import Swal from 'sweetalert2';

function Header() {

    const [user, setUser] = useState({});

    useEffect(() => {

        try {
            const jwt = localStorage.getItem("token");
            setUser(jwtDecode(jwt));
        } catch (error) {

        }
    }, []);

    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        Swal.fire({
            title: 'Logout Successfully',
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        }).then((value) => {
            Swal.fire((window.location = "/"));
        });

    }
    return (
        <Fragment>
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark " style={{ background: '#232f3e' }}>
                    <a class="navbar-brand" href="/">ABC College</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-center mr-5" id="navbarSupportedContent">
                        <ul class="navbar-nav ">


                            {/* LOGIC */}
                            {localStorage.getItem("token") ?
                                <>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="">{user.userID}</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="#" onClick={logout}>Log Out</Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="create-account">Create Account</Link>
                                    </li>
                                </>}



                        </ul>
                    </div>
                </nav>
            </header>

        </Fragment>);
}



export default Header