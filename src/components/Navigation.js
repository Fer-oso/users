import React from 'react';
import {Link} from 'react-router-dom';

const  Navigation = () =>{
        return(
            <div className="container d-flex justify-content-center">
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-brand ">
                    <ul className="navbar-nav mr-auto">
                        <Link to ={'/users'}>
                        <li className="nav-item">
                            <a className="nav-link" href={'/'}>Inicio</a>
                        </li>
                        </Link>
                        <Link to={'/create'}>
                        <li className="nav-item">
                            <a className="nav-link" href={'/create'}>Create</a>
                        </li>
                        </Link>
                    </ul>     
                </nav>
            </div>
        )
    }
export default Navigation;