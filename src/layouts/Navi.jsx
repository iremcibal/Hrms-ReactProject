import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Container, Menu } from 'semantic-ui-react'
import { Input, Image, Icon, Label } from 'semantic-ui-react'
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

export default function Navi() {
    const { favoriteItems } = useSelector(state => state.favorite)
    console.log(favoriteItems)
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignOut() {
        setIsAuthenticated(false)
    }
    function handleSignIn() {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu stackable>
                <Container>
                    <Menu.Item>
                        <div><Image avatar spaced="left" icon="users" src='https://res.cloudinary.com/stanbul/image/upload/v1623720681/d42c91fa05a63047ab0a2109a10786d7_pohb7u.png' /></div>
                    </Menu.Item>

                    <Menu.Item name='home'>
                        Menu
                    </Menu.Item>

                    <Menu.Item>
                        <Input className='icon' icon='search' placeholder='Search...' />
                    </Menu.Item>


                    <Menu.Menu position='right'>
                        
                        <Menu.Item>
                            <Icon name='heart' className="f-navi" /> Favorilerim
                            <Label className="favorite-label">
                                {favoriteItems.length}
                            </Label>
                        </Menu.Item>

                        <Menu.Item>
                            {isAuthenticated ? <SignedIn signOut={handleSignOut} />
                                : <SignedOut signIn={handleSignIn} />}

                        </Menu.Item>

                    </Menu.Menu>

                </Container>
            </Menu>

        </div>
    )
}
