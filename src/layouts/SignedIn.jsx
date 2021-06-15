import React from 'react'
import { Button, Dropdown, Input, Image,Header } from 'semantic-ui-react'


export default function SignedIn({signOut}) {
    return (
        <div>
            <Header as='h5' item >
                <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
                <Dropdown item text='Kullanıcı'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Bilgilerimi Güncelle</Dropdown.Item>
                        <Dropdown.Item onClick={signOut}>Çıkış Yap</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Header>
        </div>
    )
}
