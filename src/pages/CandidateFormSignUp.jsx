import { Formik } from 'formik'
import { Form, Button, Image } from 'semantic-ui-react'
import * as Yup from 'yup';
import React from 'react'
import { AuthService } from '../services/authService';

export default function CandidateFormSignUp() {

   // let candidateService = new CandidateService()
    let authService = new AuthService();


    return (
        <div className="container-form">
            <div className="brand-box">
                <h1>Kayıt Formu</h1>
                <p>İş Dünyasına Bir Adım Kaldı</p>
                <Image width="50%" src="https://res.cloudinary.com/stanbul/image/upload/v1623718771/depositphotos_247682056-stock-illustration-businesswoman-in-office-cartoon_n0abiu.jpg" />
            </div>
            <div className="magic-form">
                <Formik
                    initialValues={{
                        name: '',
                        lastName: '',
                        email: '',
                        nationaltyNo: '',
                        birthDate: '',
                        password: '',
                        repeat_password:'',
                    }}
                    validationSchema={
                        Yup.object({
                            name: Yup.string()
                                //.min(8,"minimum sekiz karakter")
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.'),
                            lastName: Yup.string()
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.'),
                            email: Yup.string()
                                .email("Geçerli bir email giriniz.")
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.'),
                            nationaltyNo: Yup.string()
                                .min(11, "Lütfen TC kimliğinizi yazınız.")
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.'),
                            birthDate: Yup.date()
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.'),
                            password: Yup.string()
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.'),
                            repeat_password: Yup.string()
                                .oneOf([Yup.ref("password")], "Şifreleriniz eşleşmiyor")
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.')

                        })}
                    onSubmit={(values) => {
                        let newcandidate = {
                            name: values.name,
                            lastName: values.lastName,
                            email: values.email,
                            nationaltyNo: values.nationaltyNo,
                            birthDate: values.birthDate,
                            password: values.password,
                            repeat_password: values.repeat_password,
                        }
                        /* await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2)); */
                        console.log(newcandidate)
                        authService.addRegisterCandidate(newcandidate);

                    }}



                >
                    {({
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleSubmit,
                        handleChange,

                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <label htmlFor="name">İsim</label>
                            <Form.Input
                                fluid
                                id='name'
                                type="text"
                                value={values.name}
                                onChange={handleChange}

                            />
                            {errors.name && touched.name && (
                                <div className="input-feedback">{errors.name}</div>
                            )}

                            <label htmlFor="lastName">Soy İsim</label>
                            <Form.Input
                                fluid
                                id='lastName'
                                type="text"
                                value={values.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && touched.lastName && (
                                <div className="input-feedback">{errors.lastName}</div>
                            )}

                            <label htmlFor="email">Email</label>
                            <Form.Input
                                fluid
                                id="email"
                                type="text"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}
                            <label htmlFor="nationaltyNo">Kimlik Numarası</label>
                            <Form.Input
                                fluid
                                id="nationaltyNo"
                                type="text"

                                value={values.nationaltyNo}
                                onChange={handleChange}
                            />
                            {errors.nationaltyNo && touched.nationaltyNo && (
                                <div className="input-feedback">{errors.nationaltyNo}</div>
                            )}

                            <label htmlFor="birthDate">Doğum Tarihi</label>
                            <Form.Input
                                fluid
                                id="birthDate"
                                value={values.birthDate}
                                onChange={handleChange}
                            />
                            {errors.birthDate && touched.birthdate && (
                                <div className="input-feedback">{errors.birthDate}</div>
                            )}
                            <label htmlFor="password">Şifre</label>
                            <Form.Input
                                type='password'
                                id="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && touched.password && (
                                <div className="input-feedback">{errors.password}</div>
                            )}
                            <label htmlFor="repeat_password">Şifre Tekrarı</label>
                            <Form.Input
                                type='password'
                                id="repeat_password"
                                value={values.repeat_password}
                                onChange={handleChange}

                            />
                            {errors.repeat_password && touched.repeat_password && (
                                <div className="input-feedback">{errors.repeat_password}</div>
                            )}


                            {/*  <Form.Checkbox
                            label='I agree to the Terms and Conditions'
                        /> */}

                            <Button disabled={!dirty || isSubmitting}
                            type="submit"
                            >Kayıt Ol</Button>

                        </Form>
                    )}



                </Formik>
            </div>
        </div>
    )
}
