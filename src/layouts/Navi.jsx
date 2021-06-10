import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { Button, Dropdown,Input,Image } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu stackable>
                <Container>
                    <Menu.Item>
                        <Image avatar spaced="left" src="/alo.png" />
                    </Menu.Item>

                    <Menu.Item name='home'>
                        Menu
                    </Menu.Item>
                    <Menu.Item>
                        <Input className='icon' icon='search' placeholder='Search...' />
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        <Dropdown item text='Sign-in'>
                            <Dropdown.Menu>
                                <Dropdown.Item>Invıdıual </Dropdown.Item>
                                <Dropdown.Item>Company </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>

                </Container>
            </Menu>

        </div>
    )
}
