import React, {useRef, useState} from "react";
import './Contacts.css';
import {Formik} from "formik";
import emailjs from '@emailjs/browser';


export const Contacts = () => {

    const [show, setShow] = useState(false);
    const form = useRef();

        const sendEmail = () => {

            emailjs.sendForm('service_d50ggui', 'template_jx1sihf', form.current, 'PFS9B-cRcXYIGTJnQ')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        };


    return (
        <>
            <section className={'contacts'}>
                <h1>Если Вас что-то интересует - напишите мне:)</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Поле email пусто, исправьте пожалуйста';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Не корректный email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                         setShow(true);
                         setSubmitting(false);
                         sendEmail();
                         }
                }>
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          /* and other goodies */
                      }) => (
                        <form ref={form} onSubmit={handleSubmit} className={'form'}>
                            <div className={'form-wrapper'}>
                                <label htmlFor="">Введите Вашу почту:</label>
                                <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                            </div>
                            <div className={'form-wrapper'}>
                                <label htmlFor="">Введите свое сообщение:</label>
                                <br/>
                                <textarea name="message" id="textarea" cols="80" rows="10"></textarea>
                                {errors.password && touched.password && errors.password}
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                Отправить
                            </button>
                        </form>
                    )}
                </Formik>

                {show && (<p>Данные успешно отправлены.Спасибо.</p>)}




            </section>

        </>
    )
}