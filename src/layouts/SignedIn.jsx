import React from 'react'
import { Dropdown, Image,Header } from 'semantic-ui-react'
import {  NavLink} from "react-router-dom";


export default function SignedIn({signOut}) {
    return (
        <div>
            <Header as='h5' item >
                <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
                <Dropdown item text='Kullanıcı'> 
                    <Dropdown.Menu>
                        <Dropdown.Item>Bilgilerimi Güncelle</Dropdown.Item>
                        <Dropdown.Item as={NavLink} to={`/`} onClick={signOut}>Çıkış Yap</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Header>
        </div>
    )
    
}
