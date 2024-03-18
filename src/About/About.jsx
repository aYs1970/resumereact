import React from "react";
import './About.css';
import  './letchik.jpeg'








export const About = () => {
    return (
        <>
        <div className={'container'}>
            <section className={'about'}>
                <h2 className={'about-title'}>About me</h2>
                <p className={'about-descr'}>Текстовая часть моего резюме</p>
                <div className="box">

                    <div className="card1">
                        <h1>Serdtsev Andrey</h1>
                        <p>Я долго собирался <strong>начать верстать, </strong>и наконец то пришел к этому;) <em>Начинал
                            на курсах Синергии</em>:))
                            В процессе обучения освоил JS, React, Vue3,Git,Bootstrap 5, Figma. Сейчас в процессе
                            освоения TypeScript и планирую Next и Nuxt.
                            Знаю работу с Node.js и Express.js.
                        </p>
                        <p>Связаться лучше через Telegram или написать сообщение на странице контакты</p>
                        <p>Мне нравится создавать красивые страницы сайтов:) Люблю авиационные виды спорта</p>
                    </div>
                </div>
                <div className="card2">
                <h2>Мои хобби</h2>
                    <ul>
                        <li>Программирование</li>
                        <li>Прыжки с парашютом</li>
                        <li>Плавание</li>
                        <li>Автомобили</li>
                        <li>Электроника</li>
                    </ul>
                </div>
                <div className="card3">
                    <h2>Опыт работы</h2>
                    <table className="table">
                        <thead className="thead">
                        <th>Номер по порядку</th>
                        <th>Название организации</th>
                        <th>Должность</th>
                        <th>период работы</th>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Рижское ВВАИУ</td>
                            <td>курсант</td>
                            <td>1988-1993</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Служба в ВС РФ</td>
                            <td>в/служащий</td>
                            <td>1993-2010</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>служба в УМА ТОФ</td>
                            <td>начальник службы</td>
                            <td>2010-2015</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Петродворцовый филиал ВА тыла и транспорта ВС РФ</td>
                            <td>слушатель</td>
                            <td>2012</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Московский финансово-промышленный университет "Синергия"</td>
                            <td>слушатель</td>
                            <td>2021</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card4">
                    <h2><b>Список моих социальных сетей:</b></h2>
                    <p className='aboutParagrapf'><a >Instsgram</a>
                        <a href="https://t.me/AndrisRiga" target="_blank">Telegram</a>
                        <a>Youtube</a></p>
                </div>
            </section>
        </div>
        </>
    )
}