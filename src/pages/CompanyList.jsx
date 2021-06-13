import React, { useEffect, useState} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { CompanyService } from '../services/companyService'
import { Link} from "react-router-dom";


export default function CompanyList() {
    const [companys, setCompanys] = useState([])

    useEffect(() => {
        let companyService = new CompanyService()
        companyService.getByCompanyList().then(result => {
            setCompanys(result.data.data);
            console.log(result)
        })
    }, [])

    return (
        <div>

            <Card.Group>
                {companys.map((company) => (
                    <Card fluid key="company.id">
                        <Card.Content>
                            <Image
                                floated='right'
                                size='mini'
                                src='/images/avatar/large/steve.jpg'
                            />
                            <Card.Header><Link to={`/company/${company.companyName}`}>{company.companyName}</Link></Card.Header>
                            <Card.Meta>Friends of Elliot</Card.Meta>
                            <Card.Description>
                                <a href={"https://"+company.webSite}>{company.webSite}</a>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green'>
                                    Approve
                                </Button>
                                <Button basic color='red'>
                                    Decline
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>

                ))}
            </Card.Group>

        </div>
            )
}
