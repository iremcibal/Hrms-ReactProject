import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Table, Divider } from 'semantic-ui-react'
import { CandidateService } from '../services/candidateService'
import AddUniversity from './University/AddUniversity';
import UpdateUniversity from './University/UpdateUniversity';
import { Link } from "react-router-dom";
import AddJobExperiences from './JobExperiences/AddJobExperiences';
import AddTechnology from './Technology/AddTechnology';
import AddLanguage from './ForeignLanguages/AddLanguage';
import AddCvDetail from './CvDetails/AddCvDetail';
import { UniversityService } from '../services/universityService';
import Swal from 'sweetalert2'

export default function AboutForMe() {
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
        candidateService.getCurriculumVitaeById(1).then(result => {
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

    const deleteUniversity = (universityId) => {
        let universityService = new UniversityService();
        universityService.deleteUniversity(universityId).then(
            Swal.fire(
                'Tebrikler',
                'Silindi.',
                'success'
            ).then(function () {
                window.location.reload();
            })
        );
    }

    return (

        <div>
            <Card.Group className="candidate-cv">
                <Card fluid>
                    <Card.Content>
                        <Divider />
                        <Link to={`/navi/aboutme/newimage`}>
                            <Button
                                onClick={AddUniversity} className="login-button"
                            >
                                Fotoğrafımı Güncelle
                            </Button>
                        </Link>
                        <Link to={`/navi/aboutme/newimage`}>
                            <Button
                                onClick={AddUniversity} className="login-button"
                            >
                                Fotoğrafımı Sil
                            </Button>
                        </Link>
                    </Card.Content>

                </Card>

                <Card fluid>
                    <Card.Content>
                        <Table fluid className="cv-add">
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Eğitim Bilgilerim</Table.HeaderCell>
                                    <Table.HeaderCell />
                                    <Table.HeaderCell />
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {universities.map((universities) => (
                                    <Table.Row>
                                        <Table.Cell>{universities?.university_name} ({universities?.education}) / {universities?.division_name}
                                            ( {universities?.startAt}/{universities?.finishAt}) <br /></Table.Cell>
                                        <Table.Cell><Link to={`/navi/aboutme/${universities.universityId}`}>
                                            <Button
                                                onClick={UpdateUniversity} className="login-button"
                                            >
                                                Güncelle
                                            </Button>
                                        </Link></Table.Cell>
                                        <Table.Cell><Button
                                            className="cv-add-button"
                                            type="submit"
                                            /* onClick={(x) => deleteEducation(universities?.universityId)} */>Sil</Button></Table.Cell>
                                    </Table.Row>

                                ))
                                }
                            </Table.Body>
                        </Table>
                        <Divider />
                        <Link to={`/navi/aboutme/newuniversity`}>
                            <Button
                                onClick={AddUniversity} className="login-button"
                            >
                                Yeni Ekle
                            </Button>
                        </Link>

                    </Card.Content>
                </Card>



                <Card fluid>
                    <Card.Content>
                        <Card.Header>Tecrübeler</Card.Header>
                        {jobExperiences.map((jobExperiences) => (

                            <Card.Description>{jobExperiences?.companyName} / {jobExperiences?.positionName}
                                ( {jobExperiences?.startAt}/{jobExperiences?.finishAt})</Card.Description>


                        ))
                        }
                        <Divider />
                        <Button className="login-button">Güncelle </Button>
                        <Link to={`/navi/aboutme/newjobexperiences`}>
                            <Button
                                onClick={AddJobExperiences} className="login-button"
                            >
                                Yeni Ekle
                            </Button>
                        </Link>
                    </Card.Content>
                </Card>

                <Card fluid>
                    <Card.Content>
                        <Card.Header>Beceriler</Card.Header>
                        {technologies.map((technologies) => (
                            <Card.Description>- {technologies?.technologyName} ({technologies?.level})</Card.Description>

                        ))
                        }
                        <Divider />
                        <Button className="login-button">Güncelle </Button>
                        <Link to={`/navi/aboutme/newtechnology`}>
                            <Button
                                onClick={AddTechnology} className="login-button"
                            >
                                Yeni Ekle
                            </Button>
                        </Link>
                    </Card.Content>
                </Card>

                <Card fluid>
                    <Card.Content>
                        <Card.Header>Yabancı Dil</Card.Header>
                        {
                            foreignLanguages.map((foreignLanguages) => (
                                <Card.Description>- {foreignLanguages?.language} ({foreignLanguages?.level})</Card.Description>

                            ))
                        } <Divider />
                        <Button className="login-button">Güncelle </Button>
                        <Link to={`/navi/aboutme/newlanguage`}>
                            <Button
                                onClick={AddLanguage} className="login-button"
                            >
                                Yeni Ekle
                            </Button>
                        </Link>
                    </Card.Content>
                </Card>

                <Card fluid>
                    <Card.Content>
                        <Card.Header>Ek Bilgiler</Card.Header>
                        {cvDetails.map((cvDetails) => (

                            <Card.Description>Github: {cvDetails?.gitHub} <br /> LinkedIn: {cvDetails?.linkedIn} <br /> [{cvDetails?.frontNote}] </Card.Description>

                        ))
                        }  <Divider />
                        <Button className="login-button">Güncelle </Button>
                        <Link to={`/navi/aboutme/newcvdetail`}>
                            <Button
                                onClick={AddCvDetail} className="login-button"
                            >
                                Yeni Ekle
                            </Button>
                        </Link>
                    </Card.Content>
                </Card>

            </Card.Group>


        </div>
    )
}
