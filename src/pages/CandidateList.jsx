import React, { useEffect, useState } from 'react'
import { Button, Card,} from 'semantic-ui-react'
import { CandidateService } from '../services/candidateService'
import { Link } from "react-router-dom";


export default function CandidateList() {
    //let { candidatesId } = useParams();

    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getByCandidateStatusTrueList().then(result => setCandidates(result.data.data))
    }, [])
/* 
    useEffect(() => {
        let cvdetailService = new CvDetailService()
        cvdetailService.getDetailCandidateId(candidatesId).then(result => setCvDetails(result.data.data))
    }, [candidatesId])
 */



    return (
        <div>
            <Card.Group className="candidate">
                {candidates.map((candidate) => (
                    <Card fluid >
                        <Card.Content>
                            <Card.Header textAlign="center"> {candidate.name} {candidate.lastName} </Card.Header>
                            <Card.Description> Bana buradan ulaşabilirsiniz: 
                                <a href={"mailto:" + candidate.email}> {candidate.email}</a>
                            </Card.Description>

                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Link to={`/navi/candidate/${candidate.id}`}>
                                    <Button fluid basic color='green' >
                                        Özgeçmişi Görüntüle
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
