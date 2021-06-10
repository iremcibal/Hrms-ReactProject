import React from 'react'
import { Grid } from 'semantic-ui-react'
import JobPostList from '../pages/JobPostList'
import Side from './Side'

export default function DashBoard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Side />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <JobPostList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
