import React from 'react'
import { Button, Dropdown } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";


export default function SignedOut({ signIn }) {
    return (
        <div className="style-out">
            <Menu.Item>
                <Button primary>Sign In</Button>
            </Menu.Item>
            <Dropdown item text='Sign Up'>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={signIn}><Link to={`/individual`}>For Individual</Link> </Dropdown.Item>
                    <Dropdown.Item onClick={signIn}><Link to={`/company`}>For Company</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


        </div>
    )
}
