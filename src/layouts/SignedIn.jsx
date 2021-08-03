import React from 'react'
import { Dropdown, Image, Header } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import AddCvDetail from '../pages/CvDetails/AddCvDetail';


export default function SignedIn({ signOut }) {
    return (
        <Header as='h5' item >
            <Image circular src='https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/rachel_green.jpg?itok=fJez0tId' />
            <Dropdown item text='Kullanıcı'>
                <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to={`/navi/aboutme`} onClick={AddCvDetail}>Bilgilerimi Güncelle</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to={`/`} onClick={signOut}>Çıkış Yap</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Header>

    )

}
