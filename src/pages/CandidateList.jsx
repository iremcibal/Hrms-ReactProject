import React, { useEffect, useState } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { CandidateService } from '../services/candidateService'
import { Link} from "react-router-dom";

export default function CandidateList() {
    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getByCandidateList().then(result => setCandidates(result.data.data))
    }, [])

    return (
        <div>
            <Card.Group>
                {candidates.map((candidate) => (
                    <Card fluid >
                        <Card.Content>
                            <Image
                                floated='right'
                                size='mini'
                                src='/images/avatar/large/steve.jpg'
                            />
                            <Card.Header><Link to={`/candidate/${candidate.id}`}>
                                {candidate.name}</Link></Card.Header>
                            <Card.Meta>Friends of Elliot</Card.Meta>
                            <Card.Description>
                                Steve wants to add you to the group <strong>best friends</strong>
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
