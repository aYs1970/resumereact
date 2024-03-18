import React from "react";
import './Home.css';
import home from './foto.jpeg'

export const Home = () => {
    return (
        <>

<section className={'home'}>
    <div className={'home-text'}>
        <h1 className={'home-title'}>Serdtsev Andrey</h1>
        <p className={'home-descr'}>web interface layout designer  53 years old, Vlsdivostok, Saint Petersburg</p>
        <p className={'home-lang'}>RU  |  Eng</p>
    </div>
    <img className={'home-img'} src={home} alt="my foto"/>
    <div className={'home-img'}></div>

</section>
        </>
    )
}