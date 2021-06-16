import React from 'react'
import { Button, Divider, Form, Grid, Segment,Container } from 'semantic-ui-react'
import CandidateFormSignUp from './CandidateFormSignUp'
import { Link} from "react-router-dom";


export default function FirstPage({signIn}) {
    return (
        <Container className="login">
            <div >
                <Segment placeholder>
                    <Grid columns={2} relaxed='very' stackable>
                        <Grid.Column>
                            <Form>
                                <Form.Input
                                    icon='user'
                                    iconPosition='left'
                                    label='Username'
                                    placeholder='Username'
                                />
                                <Form.Input
                                    icon='lock'
                                    iconPosition='left'
                                    label='Password'
                                    type='password'
                                />

                                <Link to={`/nv/sd`}><Button onClick={signIn} content='Login' primary></Button> </Link>
                            </Form>
                        </Grid.Column>

                        <Grid.Column verticalAlign='middle'>
                            <Link to={`/company`}><Button content='Sign up for Company' icon='building' size='big' /></Link>
                            
                            <Link to={`/individual`}><Button content='Sign up for Individual' icon='users' size='big'/></Link>
                               
                        </Grid.Column>
                    </Grid>

                    <Divider vertical>Or</Divider>
                </Segment>

            </div>
        </Container>

    )
}
