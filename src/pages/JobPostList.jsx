import React, { useEffect, useState } from 'react'
import { JobPostService } from '../services/jobPostService';
import { Card, Divider, Grid, Button,Icon } from 'semantic-ui-react'
import { addToFavorite } from '../store/actions/favoriteActions';
import { useDispatch } from "react-redux";

export default function JobPostList() {
    const [jobPosts, setjobPosts] = useState([])

    useEffect(() => {
        let jobPostService = new JobPostService()
        jobPostService.getJobPostStatusTrue().then(result => {
            setjobPosts(result.data.data);
            console.log(result)
        })
    }, [])

    const dispatch = useDispatch();

    const handleAddToFavorite= (jobPost) =>{
        dispatch(addToFavorite(jobPost));
    }

    return (
        <div>
            <Card fluid className="candidate-cv">
                <Card.Group>
                    {
                        jobPosts.map((jobPost) => (
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header textAlign="center"><h2>{jobPost.company?.companyName}</h2></Card.Header>
                                </Card.Content>

                                <Card.Content >
                                    <Grid columns={2} relaxed="very">
                                        <Grid.Column>
                                            <Card.Header><strong>Pozisyon</strong></Card.Header>
                                            <Card.Description >{jobPost.positions?.positionName}</Card.Description> <br />
                                            <Card.Header><strong>Şehir</strong></Card.Header>
                                            <Card.Description>{jobPost.city?.cityName}</Card.Description><br />
                                            <Card.Header ><strong>Email</strong></Card.Header>
                                            <Card.Description >{jobPost.company?.email}</Card.Description><br />
                                            <Card.Header ><strong>Yayınlanma Tarihi</strong></Card.Header>
                                            <Card.Description >{jobPost.createdAt}</Card.Description><br />
                                            <Card.Header > <strong>Son Başvuru Günü</strong></Card.Header>
                                            <Card.Description >{jobPost.deadLine}</Card.Description> <br />
                                        </Grid.Column>


                                        <Grid.Column>
                                            <Card.Header ><strong>Çalışma Şekli</strong></Card.Header>
                                            <Card.Description >{jobPost.jobType?.typeName}</Card.Description><br />
                                            <Card.Header ><strong>Çalışma Zamanı</strong></Card.Header>
                                            <Card.Description >{jobPost.jobTime?.timeName}</Card.Description><br />
                                            <Card.Header ><strong>Maaş Bilgisi</strong></Card.Header>
                                            <Card.Description>{jobPost.maxSalary} / {jobPost.minSalary}</Card.Description><br />
                                            <Card.Header><strong>Pozisyon Kotası</strong></Card.Header>
                                            <Card.Description >{jobPost.positionQuota}</Card.Description><br />
                                            <Card.Header ><strong>Ek Bilgi</strong></Card.Header>
                                            <Card.Description >{jobPost.positionTitle}</Card.Description> <br />

                                            <Button className="login-button">Başvur </Button>

                                        
                                            <Button className="favorite-button"
                                                onClick={()=> handleAddToFavorite(jobPost)}
                                            >
                                                <Icon name='heart' />
                                                Favorilere Ekle
                                            </Button>
                                        </Grid.Column>

                                    </Grid>
                                    <Divider/>
                                </Card.Content>

                            </Card>

                        ))
                    }
                </Card.Group>
            </Card>
        </div>
    )
}
