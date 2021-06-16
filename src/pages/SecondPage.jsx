import React from 'react'
import { NavLink } from 'react-router-dom'
import { Form, Message, Button,Image } from 'semantic-ui-react'
import { Link} from "react-router-dom";


export default function SecondPage() {
    return (
        <div>
            <div>
                <Link as={NavLink} to={`/`}><Button secondary className="sp" >Login Page Go</Button></Link>
            </div>
            
            <Image className="sp" width="90%" src="https://res.cloudinary.com/stanbul/image/upload/v1623786187/Ads%C4%B1zz_c4bp0t.png"/>

        </div>
    )
}
