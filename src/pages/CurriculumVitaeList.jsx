import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import { CandidateService } from '../services/candidateService'

export default function CurriculumVitaeList() {
    let { id } = useParams();

    const [candidates, setCandidates] = useState({})
    const [universities, setUniversities] = useState([])
    const [jobExperiences, setJobExperiences] = useState([])
    const [technologies, setTechnologies] = useState([])
    const [foreignLanguages, setLanguages] = useState([])
    const [cvDetails, setDetail] = useState([])
    const [image, setImage] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getCurriculumVitaeById(id).then(result => {
            setCandidates(result.data.data)
            setUniversities(result.data.data.universities)
            setJobExperiences(result.data.data.jobExperiences)
            setTechnologies(result.data.data.technologies)
            setLanguages(result.data.data.foreignLanguages)
            setDetail(result.data.data.cvDetails)
            setImage(result.data.data.image)
                ; console.log(result)
        })
    }, [id])

    return (
        <div >
            {
                console.log(candidates)
            }
            <Card fluid className="candidate-cv">
                <Card.Group>
                    {
                        image.map((image) => (
                            <Card color='red' image={image?.imageUrl} />
                        ))
                    }


                    <Card className="cv">
                        <Card.Content><Card.Header>{candidates.candidates?.name} {candidates.candidates?.lastName}</Card.Header> </Card.Content>
                    </Card>

                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Eğitim</Card.Header>{
                                universities.map((universities) => (

                                    <Card.Description>- {universities?.university_name} ({universities?.education}) / {universities?.division_name}
                                        ( {universities?.startAt}/{universities?.finishAt}) <br/></Card.Description>

                                ))
                            }
                        </Card.Content>
                    </Card>



                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Tecrübeler</Card.Header>
                            {jobExperiences.map((jobExperiences) => (

                                <Card.Description>{jobExperiences?.companyName} / {jobExperiences?.positionName}
                                    ( {jobExperiences?.startAt}/{jobExperiences?.finishAt})</Card.Description>


                            ))
                            } </Card.Content>
                    </Card>

                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Beceriler</Card.Header>
                            {technologies.map((technologies) => (
                                <Card.Description>- {technologies?.technologyName} ({technologies?.level})</Card.Description>

                            ))
                            }</Card.Content>
                    </Card>

                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Yabancı Dil</Card.Header>
                            {
                                foreignLanguages.map((foreignLanguages) => (
                                    <Card.Description>- {foreignLanguages?.language} ({foreignLanguages?.level})</Card.Description>

                                ))
                            }</Card.Content>
                    </Card>

                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Ek Bilgiler</Card.Header> 
                            {cvDetails.map((cvDetails) => (
                                
                                    <Card.Description>Github: {cvDetails?.gitHub} <br/> LinkedIn: {cvDetails?.linkedIn} <br/> [{cvDetails?.frontNote}] </Card.Description>
                               
                            ))
                        } 
                        </Card.Content>
                    </Card>

                </Card.Group>
            </Card>

        </div >
    )
}
