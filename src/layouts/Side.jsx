import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'


export default function Side() {
    return (
        <div>
            <Menu secondary vertical >
                <Menu.Item 
                    name='account'
                //Cv fotoğrafı ve isim-meslek bilgisi
                />
                <Menu.Item
                    name='settings'
                //Bilgileri güncellemeye yönlendirme
                />
                <Dropdown item text='Job Posting'>
                    <Dropdown.Menu>
                        <Dropdown.Header>Text Size</Dropdown.Header>
                        <Dropdown.Item>Small</Dropdown.Item>
                        <Dropdown.Item>Medium</Dropdown.Item>
                        <Dropdown.Item>Large</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        </div>
    )
}
