import React from 'react'
import { Formik } from 'formik'
import { Form, Button, Image } from 'semantic-ui-react'
import * as Yup from 'yup';
import { AuthService } from '../services/authService';
import UserAddTextInput from '../utilities/customFormControls/UserAddTextInput';


export default function CompanyFormSignUp() {

    let authService = new AuthService();

    return (
        <div className="container-form">
            <div className="magic-form">
                <Formik
                    initialValues={{
                        companyName: '',
                        webSite: '',
                        email: '',
                        telePhone: '',
                        password: '',
                        repeat_password: '',
                    }}
                    validationSchema={
                        Yup.object({
                            companyName: Yup.string()
                                .required("Lütfen bilgilerinizi eksiksiz giriniz."),
                            webSite: Yup.string()
                                .required("Lütfen bilgilerinizi eksiksiz giriniz."),
                            email: Yup.string()
                                .email("Geçerli bir email giriniz.")
                                .required("Lütfen bilgilerinizi eksiksiz giriniz."),
                            telePhone: Yup.string()
                                .min(11, "Lütfen telefon numaranızı giriniz.")
                                .required("Lütfen bilgilerinizi eksiksiz giriniz."),
                            password: Yup.string()
                                .required("Lütfen bilgilerinizi eksiksiz giriniz."),
                            repeat_password: Yup.string()
                                .oneOf([Yup.ref("password")], "Şifreleriniz eşleşmiyor")
                                .required("Lütfen bilgilerinizi eksiksiz giriniz."),
                        })

                    }
                    onSubmit={(values) =>{
                        let newcompany = {
                            companyName: values.companyName,
                            webSite: values.webSite,
                            email: values.email,
                            telePhone:values.telePhone,
                            password: values.password,

                        }
                        console.log(newcompany)
                        authService.addRegisterCompany(newcompany);
                    }}

                >
                    {({
                       
                        dirty,
                        isSubmitting,
                        handleSubmit,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <label>Şirket İsmi</label>
                            <UserAddTextInput name="companyName"/>

                            <label>Web Site</label>
                            <UserAddTextInput name="webSite"/>

                            <label >Email</label>
                            <UserAddTextInput name="email"/>

                            <label >Telefon</label>
                            <UserAddTextInput name="telePhone"/>

                            <label >Şifre</label>
                            <UserAddTextInput name="password" type="password"/>

                            <label >Şifre Tekrarı</label>
                            <UserAddTextInput name="repeat_password" type="password"/>

                            <Button disabled={!dirty || isSubmitting}>Kayıt Ol</Button>

                        </Form>
                    )}
                </Formik>
            </div>
            <div className="brand-box">
                <h1>Kayıt Formu</h1>
                <p>İş Dünyasına Bir Adım Kaldı</p>
                <Image width="80%" src="https://res.cloudinary.com/stanbul/image/upload/v1623718976/diverse-people-working-contemporary-workspace-260nw-1770979862_bd7hjy.jpg" />
            </div>
        </div>
    )
}
