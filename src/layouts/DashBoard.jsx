import React from 'react'
import { Grid } from 'semantic-ui-react'
import CandidateList from '../pages/CandidateList'
import JobPostList from '../pages/JobPostList'
import CompanyList from '../pages/CompanyList'
import PositionList from '../pages/PositionList'
import CurriculumVitaeList from "../pages/CurriculumVitaeList";
import { Route } from 'react-router-dom'
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
                        <Route exact path="/candidate" component={CandidateList} />
                        <Route path="/jobpost" component={JobPostList}/>
                        <Route path="/company" component={CompanyList}/>
                        <Route path="/position" component={PositionList}/>
                        <Route path="/candidate/:id" component={CurriculumVitaeList}/>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
