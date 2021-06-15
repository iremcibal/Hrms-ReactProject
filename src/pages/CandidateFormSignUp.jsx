import { Formik } from 'formik'
import { Form, Message, Button,Image } from 'semantic-ui-react'
import React from 'react'

export default function CandidateFormSignUp() {
    return (
        <div className="container-form">
            <div className="brand-box">
                <h1>Kayıt Formu</h1>
                <p>İş Dünyasına Bir Adım Kaldı</p>
                <Image width="50%" src="https://res.cloudinary.com/stanbul/image/upload/v1623718771/depositphotos_247682056-stock-illustration-businesswoman-in-office-cartoon_n0abiu.jpg"/>
            </div>
            <div className="magic-form">
                <Formik>
                    <Form>
                        <Form.Input
                            //error={{ content: 'Please enter your first name', pointing: 'below' }}
                            fluid
                            label='First name'
                            placeholder='İsim'
                            id='form-input-first-name'
                        />
                        <Form.Input
                            fluid
                            label='Last name'
                            placeholder='Soy İsim'
                        />
                        <Form.Input label='Email' placeholder='..@mail.com' />
                        <Message
                            warning
                            header='Could you check something!'
                            list={[
                                'That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.',
                            ]}
                        />
                        <Form.Input
                            fluid
                            label='Nationalty no'
                            placeholder='Kimlik Numarası'
                        />
                        <Form.Input
                            fluid
                            label='Date'
                            placeholder='Doğum Tarihi'
                        />
                        <Form.Group widths='equal'>
                            <Form.Input

                                label='Password'
                                type='password'
                                placeholder='Şifre'
                            />

                            <Form.Input

                                label='Repeat Password'
                                type='password'
                                placeholder='Şifre Tekrarı'
                            />
                        </Form.Group>


                        <Form.Checkbox
                            label='I agree to the Terms and Conditions'
                        />

                        <Button>Submit</Button>

                    </Form>

                </Formik>
            </div>
        </div>
    )
}
