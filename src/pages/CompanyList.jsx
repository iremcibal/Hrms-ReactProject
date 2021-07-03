import React, { useEffect, useState} from 'react'
import { Button, Card, } from 'semantic-ui-react'
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

            <Card.Group className="company">
                {companys.map((company) => (
                    <Card fluid key="company.id">
                        <Card.Content>
                            <Card.Header textAlign="center">{company.companyName}</Card.Header>
                            <Card.Meta></Card.Meta>
                            <Card.Description>Sitemiz :
                                <a href={"https://"+company.webSite}> {company.webSite}</a>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Link to={`/navi/company/${company.companyName}`}>
                                <Button basic color='green'>
                                    İş İlanlarını Görüntüle
                                </Button>
                            </Link>
                                <Button basic color='red'>
                                    Sil
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>

                ))}
            </Card.Group>

        </div>
            )
}
