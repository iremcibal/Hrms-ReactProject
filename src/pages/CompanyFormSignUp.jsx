import React from 'react'
import { Formik, yupToFormErrors } from 'formik'
import { Form, Message, Button, Image } from 'semantic-ui-react'
import * as Yup from 'yup';


export default function CompanyFormSignUp() {
    return (
        <div className="container-form">
            <div className="magic-form">
                <Formik
                    initialValues={{
                        company: '',
                        webSite: '',
                        email: '',
                        telephone: '',
                        password: '',
                        repeat_password: '',
                    }}
                    validationSchema={
                        Yup.object({
                            company: Yup.string()
                                .required("Lütfen bilgilerinizi eksiksiz giriniz."),
                            webSite: Yup.string()
                                .required("Lütfen bilgilerinizi eksiksiz giriniz."),
                            email: Yup.string()
                                .email("Geçerli bir email giriniz.")
                                .required("Lütfen bilgilerinizi eksiksiz giriniz."),
                            telephone: Yup.string()
                                .min(11, "Lütfen telefon numaranızı giriniz.")
                                .required("Lütfen bilgilerinizi eksiksiz giriniz."),
                            password: Yup.string()
                                .required("Lütfen bilgilerinizi eksiksiz giriniz."),
                            repeat_password: Yup.string()
                                .oneOf([Yup.ref("password")], "Şifreleriniz eşleşmiyor")
                                .required("Lütfen bilgilerinizi eksiksiz giriniz."),
                        })

                    }

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
                            <label htmlFor="company">Şirket İsmi</label>
                            <Form.Input
                                fluid
                                id='company'
                                type="text"
                                value={values.company}
                                onChange={handleChange}
                            />
                            {errors.company && touched.company && (
                                <div className="input-feedback">{errors.company}</div>
                            )}

                            <label htmlFor="webSite">Web Site</label>
                            <Form.Input
                                fluid
                                id="webSite"
                                type="text"
                                value={values.webSite}
                                onChange={handleChange}
                            />
                            {errors.webSite && touched.webSite && (
                                <div className="input-feedback">{errors.webSite}</div>
                            )}

                            <label htmlFor="email">Email</label>
                            <Form.Input
                                id="email"
                                type="text"
                                value={values.email}
                                onChange={handleChange}

                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}
                            <label htmlFor="telephone">Telefon</label>
                            <Form.Input
                                fluid
                                id="telephone"
                                type="text"
                                value={values.telephone}
                                onChange={handleChange}
                            />
                            {errors.telephone && touched.telephone && (
                                <div className="input-feedback">{errors.telephone}</div>
                            )}

                            <label htmlFor="password">Şifre</label>
                            <Form.Input
                                id="password"
                                type='password'
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && touched.password && (
                                <div className="input-feedback">{errors.password}</div>
                            )}
                            <label htmlFor="repeat_password">Şifre Tekrarı</label>
                            <Form.Input
                                id="repeat_password"
                                type='password'
                                value={values.repeat_password}
                                onChange={handleChange}
                               
                            />
                            {errors.repeat_password && touched.repeat_password && (
                                <div className="input-feedback">{errors.repeat_password}</div>
                            )}

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
