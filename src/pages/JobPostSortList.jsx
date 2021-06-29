import React, { useEffect, useState } from 'react'
import { Checkbox, Table } from 'semantic-ui-react'
import {JobPostService} from '../services/jobPostService';


export default function JobPostSortList() {
    const [jobPostSort, setjobPostSort] = useState([])

    useEffect(() => {
        let jobPostService = new JobPostService()
        jobPostService.getJobPostSort().then(result => {
            setjobPostSort(result.data.data);
            console.log(result)
        })
    })

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
                    {jobPostSort.map((jobPostSort) => (
                        <Table.Row key={jobPostSort.id}>
                            <Table.Cell collapsing>
                                <Checkbox slider />
                            </Table.Cell>
                            <Table.Cell>{jobPostSort.company?.companyName}</Table.Cell>
                            <Table.Cell>{jobPostSort.positions.positionName}</Table.Cell>
                            <Table.Cell>{jobPostSort.city.cityName}</Table.Cell>
                            <Table.Cell>{jobPostSort.company?.email}</Table.Cell>
                            <Table.Cell>{jobPostSort.createdAt}</Table.Cell>
                            <Table.Cell>{jobPostSort.deadLine}</Table.Cell>
                            <Table.Cell>{jobPostSort.maxSalary}</Table.Cell>
                            <Table.Cell>{jobPostSort.minSalary}</Table.Cell>
                            <Table.Cell>{jobPostSort.positionQuota}</Table.Cell>
                            <Table.Cell>{jobPostSort.positionTitle}</Table.Cell>

                        </Table.Row>

                    ))}
                </Table.Body>

            </Table>

        </div>
    )
}
