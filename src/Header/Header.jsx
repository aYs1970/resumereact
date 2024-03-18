import React from "react";
import {Link} from "react-router-dom";
import './Header.css'

export const Header = () => {
    return (
        <>
          <header className={'header'}>
                <nav className='header-nav'>
                    <ul className='header-list'>
                        <li className='list-item'><Link to={'/'}>Home</Link></li>
                        <li className='list-item'><Link to={'/about'}>About me</Link></li>
                        <li className='list-item'><Link to={'/skils'}>Skils</Link></li>
                        <li className='list-item'><Link to={'/portfolio'}>Portfolio</Link></li>
                        <li className='list-item'><Link to={'/contacts'}>Contacts</Link></li>
                        <li className='list-item'><Link to={'/interesting'}>Interesting</Link></li>
                    </ul>

                </nav>

          </header>

        </>
    )
}