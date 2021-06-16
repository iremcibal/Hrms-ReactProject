import React from 'react'
import { Grid } from 'semantic-ui-react'
import CandidateList from '../pages/CandidateList'
import JobPostList from '../pages/JobPostList'
import CompanyList from '../pages/CompanyList'
import PositionList from '../pages/PositionList'
import CurriculumVitaeList from "../pages/CurriculumVitaeList";
import { Route } from 'react-router-dom'
import Side from './Side'
import JobPostSortList from '../pages/JobPostSortList'
import JobPostCompanyList from '../pages/JobPostCompanyList'
import CandidateFormSignUp from '../pages/CandidateFormSignUp'
import FirstPage from '../pages/FirstPage'
import Navi from './Navi'
import CompanyFormSignUp from '../pages/CompanyFormSignUp'
import SecondPage from '../pages/SecondPage'
import JobPost from '../pages/JobPost'

export default function DashBoard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Route exact path="/" component={FirstPage}/> 
                    <Route exact path="/individual" component={CandidateFormSignUp}/>
                    <Route exact path="/company" component={CompanyFormSignUp}/>
                    <Route path="/nv" component={Navi} />
                    <Route path="/nv/sp" component={SecondPage}/>
                    <Grid.Column width={4}>
                        <Route path="/nv/sd" component={Side}/>
                    </Grid.Column>
                    <Grid.Column width={12}>

                        <Route exact path="/nv/sd/candidate" component={CandidateList} />
                        <Route exact path="/nv/sd/jobpost" component={JobPostList}/>
                        <Route exact path="/nv/sd/jobpost/sort" component={JobPostSortList}/>
                        <Route exact path="/nv/sd/company" component={CompanyList}/>
                        <Route exact path="/nv/sd/position" component={PositionList}/>
                        <Route exact path="/nv/sd/candidate/:id" component={CurriculumVitaeList}/>
                        <Route exact path="/nv/sd/company/:companyName" component={JobPostCompanyList}/>
                        <Route exact path="/nv/sd/newjp" component={JobPost}/>
                        

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
