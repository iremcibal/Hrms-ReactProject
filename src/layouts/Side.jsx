import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { Card, Header ,Image} from 'semantic-ui-react'


export default function Side() {

    return (
        <div className="sidebar">
            <Menu pointing vertical>
                <Card.Header as='h2'>
                    <div className="profil">
                        <Image circular src='https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/rachel_green.jpg?itok=fJez0tId' />
                    </div> 
                    <div className="text-user"><Header.Content >Kullanıcı ismi</Header.Content></div>
                    
                </Card.Header>
 
                <Menu.Item
                    name='messages'
                />
                <Menu.Item
                    name='messages'
                />
                
                <Menu.Item as={NavLink} to={`/navi/candidate`}>Adaylar</Menu.Item>
                <Menu.Item as={NavLink} to={`/navi/company`}>Şirketler</Menu.Item>
                <Menu.Item as={NavLink} to={`/navi/jobpost`}>İş İlanları</Menu.Item>

            </Menu>
        </div>
    )
}
