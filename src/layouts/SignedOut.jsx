import React from 'react'
import { Button, Dropdown, Input, Image,Header } from 'semantic-ui-react'
import { Container, Menu} from 'semantic-ui-react'
import { Link} from "react-router-dom";


export default function SignedOut({signIn}) {
    return (
        <div>
            <Dropdown item text='Sign Up'>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={signIn}><Link to={`/`}>Individual</Link> </Dropdown.Item>
                    <Dropdown.Item>Company </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
                <Button primary>Sign In</Button>
            </Menu.Item>
        </div>
    )
}
