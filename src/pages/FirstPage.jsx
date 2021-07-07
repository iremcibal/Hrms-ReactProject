import React from 'react'
import { Button, Header,Image,Message , Form, Grid, Segment, Container } from 'semantic-ui-react'
import { Link } from "react-router-dom";


export default function FirstPage({ signIn }) {
    return (
        <Container>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' style={{color:'navy'}} textAlign='center'>
                            <Image src='https://res.cloudinary.com/stanbul/image/upload/v1623720681/d42c91fa05a63047ab0a2109a10786d7_pohb7u.png' /> 
                            Hesabınıza Giriş Yapın
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail' />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Şifre'
                                    type='password'
                                />

                                <Link to={`/navi`}>
                                    <Button 
                                    onClick={signIn} className="login-button"
                                    fluid size='large' content='Login' 
                                    >
                                    </Button> 
                                </Link>
                            </Segment>
                        </Form>
                        <Message>
                            <Link to={`/individual`}><a href='#'>Bireysel Kayıt Ol   /   </a></Link>
                            <Link to={`/company`}><a href='#'>Şirket İçin Kayıt Ol</a></Link>
                        </Message>
                    </Grid.Column>
                </Grid>
        </Container>

    )
}
