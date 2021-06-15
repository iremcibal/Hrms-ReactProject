import React from 'react'
import { Formik } from 'formik'
import { Form, Message, Button,Image } from 'semantic-ui-react'

export default function CompanyFormSignUp() {
    return (
        <div className="container-form">
            <div className="magic-form">
                <Formik>
                    <Form>
                        <Form.Input
                            //error={{ content: 'Please enter your first name', pointing: 'below' }}
                            fluid
                            label='Company Name'
                            placeholder='Company'
                            id='form-input-first-name'
                        />
                        <Form.Input
                            fluid
                            label='Web Site'
                            placeholder='Web site'
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
                            label='Telephone'
                            placeholder='Telephone'
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
            <div className="brand-box">
                <h1>Kayıt Formu</h1>
                <p>İş Dünyasına Bir Adım Kaldı</p>
                <Image width="80%" src="https://res.cloudinary.com/stanbul/image/upload/v1623718976/diverse-people-working-contemporary-workspace-260nw-1770979862_bd7hjy.jpg" />
            </div>
        </div>
    )
}
