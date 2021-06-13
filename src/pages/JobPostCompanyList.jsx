import React, { useEffect, useState } from 'react'
import JobPostService from '../services/jobPostService'
import { Checkbox, Table } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'


export default function JobPostCompanyList() {
    let {companyName } =useParams()

    const [jobPost, setJobPost] = useState([])
    
    useEffect(()=>{
        let jobPostService = new JobPostService()
        jobPostService.getJobPostCompanyName(companyName).then(result=>{setJobPost(result.data.data);
        console.log(result)})
    },[companyName])
    
    return (
        <div>
            <Table celled compact definition>
                <Table.Header fullWidth>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell>Company</Table.HeaderCell>
                        <Table.HeaderCell>Position Name</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>E-mail Address</Table.HeaderCell>
                        <Table.HeaderCell>Created Date</Table.HeaderCell>
                        <Table.HeaderCell>Dead Line</Table.HeaderCell>
                        <Table.HeaderCell>Maximum Salary</Table.HeaderCell>
                        <Table.HeaderCell>Minimum Salary</Table.HeaderCell>
                        <Table.HeaderCell>Position Quota</Table.HeaderCell>
                        <Table.HeaderCell>Position Title</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobPost.map((jobPost) => (
                        <Table.Row key={jobPost.id}>
                            <Table.Cell collapsing>
                                <Checkbox slider />
                            </Table.Cell>
                            <Table.Cell>{jobPost.company?.companyName}</Table.Cell>
                            <Table.Cell>{jobPost.positions.positionName}</Table.Cell>
                            <Table.Cell>{jobPost.city.cityName}</Table.Cell>
                            <Table.Cell>{jobPost.company?.email}</Table.Cell>
                            <Table.Cell>{jobPost.createdAt}</Table.Cell>
                            <Table.Cell>{jobPost.deadLine}</Table.Cell>
                            <Table.Cell>{jobPost.maxSalary}</Table.Cell>
                            <Table.Cell>{jobPost.minSalary}</Table.Cell>
                            <Table.Cell>{jobPost.positionQuota}</Table.Cell>
                            <Table.Cell>{jobPost.positionTitle}</Table.Cell>

                        </Table.Row>

                    ))}
                </Table.Body>

            </Table>
        </div>
    )
}
