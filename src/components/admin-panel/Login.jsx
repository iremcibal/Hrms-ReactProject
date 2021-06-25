import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import './Login.css';

export default function Login({signIn}){

    return (
        <div className="login-admin">
            <Form id="loginform">
                <h3>ADMİN GİRİŞİ</h3> <br/>
                <label htmlFor="email">Email</label>
                <Form.Input
                    fluid
                    id="email"
                    type="text"
                />
                <label htmlFor="password">Şifre</label>
                <Form.Input
                    type='password'
                    id="password"

                />
                <Link onClick={signIn} to={`/admin`}><Button primary >Giriş Yap</Button></Link>

            </Form>

        </div>
    )
}

