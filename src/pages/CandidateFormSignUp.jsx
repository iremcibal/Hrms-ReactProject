import { Formik } from 'formik'
import { Form, Button, Image } from 'semantic-ui-react'
import * as Yup from 'yup';
import React from 'react'
import { AuthService } from '../services/authService';
import UserAddTextInput from '../utilities/customFormControls/UserAddTextInput';


export default function CandidateFormSignUp() {

  
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
                        active:'false',
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
                                .max(11, "Lütfen TC kimliğinizi yazınız.")
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
                        }
                        /* await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2)); */
                        console.log(newcandidate)

                        authService.addRegisterCandidate(newcandidate);

                        
                        //toast.error(`{values.error}`)
                     

                    }}



                >
                    {({
                        dirty,
                        isSubmitting,
                        handleSubmit,
                    }) => (
                        <Form onSubmit={handleSubmit}>

                            <label>İsim</label>
                            <UserAddTextInput name="name"/>


                            <label>Soy İsim</label>
                            <UserAddTextInput name="lastName"/>
                            

                            <label>Email</label>
                            <UserAddTextInput name="email"/>

                            <label >Kimlik Numarası</label>
                            <UserAddTextInput name="nationaltyNo"/>

                            <label>Doğum Tarihi</label>
                            <UserAddTextInput name="birthDate"/>

                            <label>Şifre</label>
                            <UserAddTextInput name="password" type="password"/>

                            <label>Şifre Tekrarı</label>
                            <UserAddTextInput name="repeat_password" type="password"/>

                            <Button 
                            disabled={!dirty || isSubmitting}
                            type="submit"
                            >Kayıt Ol</Button>

                        </Form>
                    )}



                </Formik>
            </div>
        </div>
    )
}
