import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Checkbox,Table } from 'semantic-ui-react'
import { JobPostService } from '../../../services/jobPostService'
import Swal from 'sweetalert2'

export default function NewJobPost() {

    const [jobPosts, setJobPosts] = useState([])
    let jobPostService = new JobPostService()
    useEffect(() => {
        jobPostService.getJobPostStatusFalse().then((result) => setJobPosts(result.data.data))
    }, [])

    const updateStatusTrue = (id) => {
        jobPostService.updateStatusJobPost(id).then(
            Swal.fire(
                'Tebrikler',
                'Sisteme Eklendi.',
                'success'
            ).then(function () {
                window.location.reload();
            })
        );
    }

    const deleteJobPost = (jobPostId) => {
        jobPostService.deleteJobPost(jobPostId).then(
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
    <div className="new">
        <Table celled compact definition>
            <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>Şirket</Table.HeaderCell>
                    <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                    <Table.HeaderCell>E-mail</Table.HeaderCell>
                    <Table.HeaderCell>Çalışma Şekli</Table.HeaderCell>
                    <Table.HeaderCell>Çalışma Süresi</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {jobPosts.map((jobPost) => (
                    <Table.Row key={jobPost.jobPostId}>
                        <Table.Cell collapsing>
                            <Checkbox slider onClick={(x) => updateStatusTrue(jobPost.jobPostId)} />
                        </Table.Cell>
                        <Table.Cell>{jobPost.company?.companyName}</Table.Cell>
                        <Table.Cell>{jobPost.positions?.positionName}</Table.Cell>
                        <Table.Cell>{jobPost.company?.email}</Table.Cell>
                        <Table.Cell>{jobPost.jobType?.typeName}</Table.Cell >
                        <Table.Cell>{jobPost.jobTime?.timeName}</Table.Cell>
                        <Table.Cell><Button onClick={(x)=> deleteJobPost(jobPost.jobPostId)}>Sil</Button></Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>

            {/* <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell colSpan='5'>
                            <Button
                                floated='right'
                                icon
                                labelPosition='left'
                                primary
                                size='small'
                            >
                                <Icon name='building' /> Ekle 
                            </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer> */}
        </Table>
    </div>
)
}
