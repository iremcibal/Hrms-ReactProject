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
import Navbar from '../components/admin-panel/navbar/Navbar'
import Sidebar from '../components/admin-panel/sidebar/Sidebar'
import NewCandidate from '../components/admin-panel/enables/NewCandidate'
import NewCompany from '../components/admin-panel/enables/NewCompany'
import NewJobPost from '../components/admin-panel/enables/NewJobPost'
import Login from '../components/admin-panel/Login'
import AddJobPost from '../pages/AddJobPost'
import AboutForMe from '../pages/AboutForMe'
import AddUniversity from '../pages/University/AddUniversity'
import UpdateUniversity from '../pages/University/UpdateUniversity'
import AddJobExperiences from '../pages/JobExperiences/AddJobExperiences'
import AddTechnology from '../pages/Technology/AddTechnology'
import AddLanguage from '../pages/ForeignLanguages/AddLanguage'
import AddCvDetail from '../pages/CvDetails/AddCvDetail'

export default function DashBoard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Route path="/admin" component={Navbar} />
                    <Route exact path="/" component={FirstPage}/> 
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/individual" component={CandidateFormSignUp}/>
                    <Route exact path="/company" component={CompanyFormSignUp}/>
                    <Route path="/navi" component={Navi} />
                    <Grid.Column width={4}>
                        <Route path="/navi" component={Side}/>
                       <Route path="/admin" component={Sidebar}/> 
                    </Grid.Column>
                    <Grid.Column width={12}> 
                        <Route exact path="/admin/enableNewCandidate" component={NewCandidate}/>
                        <Route exact path="/admin/enableNewCompany" component={NewCompany}/>
                        <Route exact path="/admin/enableNewJobPost" component={NewJobPost}/>
                        <Route exact path="/navi/candidate" component={CandidateList} />
                        <Route exact path="/navi/jobpost" component={JobPostList}/>
                        <Route exact path="/navi/jobpost/sort" component={JobPostSortList}/>
                        <Route exact path="/navi/company" component={CompanyList}/>
                        <Route exact path="/navi/position" component={PositionList}/>
                        <Route exact path="/navi/candidate/:id" component={CurriculumVitaeList}/>
                        <Route exact path="/navi/company/:companyName" component={JobPostCompanyList}/>
                        <Route exact path="/navi/newjobpost" component={AddJobPost}/>
                        <Route exact path="/navi/aboutme" component={AboutForMe}/>
                        <Route exact path="/navi/aboutme/newuniversity" component={AddUniversity}/>
                        <Route exact path="/navi/aboutme/:universityId" component={UpdateUniversity}/>
                        <Route exact path="/navi/aboutme/newjobexperiences" component={AddJobExperiences}/>
                        <Route exact path="/navi/aboutme/newtechnology" component={AddTechnology}/>
                        <Route exact path="/navi/aboutme/newlanguage" component={AddLanguage}/>
                        <Route exact path="/navi/aboutme/newcvdetail" component={AddCvDetail}/>                        

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
