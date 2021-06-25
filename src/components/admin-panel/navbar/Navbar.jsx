import React,{useState} from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { Input, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import AdminSignedIn from '../AdminSignedIn';
import Login from '../Login';
import './Navbar.css';

export default function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignOut(){
        setIsAuthenticated(false)
    }
    function handleSignIn(){
        setIsAuthenticated(true)
    }

    return (
        <div >
            <Menu stackable>
                <Container>
                    <Menu.Item>
                    <div><Image avatar spaced="left" icon="users" src='https://res.cloudinary.com/stanbul/image/upload/v1623720681/d42c91fa05a63047ab0a2109a10786d7_pohb7u.png' /></div>
                </Menu.Item>

                <Menu.Item name='home'>
                    <Link>Menu</Link>
                </Menu.Item>

                <Menu.Item>
                    <Input className='icon' icon='search' placeholder='Search...' />
                </Menu.Item>

                <Menu.Menu position='right'>
                     {isAuthenticated?<AdminSignedIn signOut={handleSignOut}/>
                        :<Login signIn={handleSignIn}/>} 

                </Menu.Menu>
                </Container>
                
            </Menu>
        </div>
    )
}
