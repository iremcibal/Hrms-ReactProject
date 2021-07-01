import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import { PositionService } from '../services/positionService'


export default function PositionList() {

    const [positions, setPositions] = useState([])

    useEffect(() => {
        let positionService = new PositionService()
        positionService.getPosition().then(result => {
            setPositions(result.data.data);
            console.log(result)
        })
    })

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Positions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        positions.map(position => (
                            <Table.Row key={position.positionId}>
                                <Table.Cell>{position.positionName}</Table.Cell>
                            </Table.Row>

                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
