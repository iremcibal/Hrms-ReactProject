import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { Button, Form, } from 'semantic-ui-react'
import JobPostService from '../services/jobPostService'
import { CityService } from '../services/cityService'
import { CompanyService } from '../services/companyService'
import { JobTypeService } from '../services/jobTypeService'
import { JobTimeService } from '../services/jobTimeService'

export default function JobPost() {
    const [jobPost, setJobPost] = useState([])
    const [company, setCompany] = useState([])
    const [city, setCity] = useState([])
    const [jobType, setJobType] = useState([])
    const [jobTime, setJobTime] = useState([])

    useEffect(() => {
        let companyService = new CompanyService()
        companyService.getByCompanyList().then(result => {
            setCompany(result.data.data);
            console.log(result)
        })
    }, [])

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCityList().then(result => {
            setCity(result.data.data);
            console.log(result)
        })
    }, [])

    useEffect(() => {
        let jobPostService = new JobPostService()
        jobPostService.postJobPost().then(result => {
            setJobPost(result.data.data);
            console.log(result)
        })
    }, [])

    useEffect(()=> {
        let jobTypeService = new JobTypeService()
        jobTypeService.getJobTypeList().then(result =>{
            setJobType(result.data.data);
            console.log(result)
        })
    },[])

    useEffect(()=> {
        let jobTimeService = new JobTimeService()
        jobTimeService.getJobTimeList().then(result =>{
            setJobTime(result.data.data);
            console.log(result)
        })
    },[])

    return (
        <div className="container-form2">
            <div className="magic-form">
                <div className="ilan">İş İlanı Ver </div>
                <Formik>
                    <Form>
                        <Form.Input fluid label="Company" type="company" placeholder='Company'>
                            <select
                                id="company"
                            >
                                <option value="Company" />
                                {
                                    company.map((company) => (
                                        <option value="company" label={company?.companyName} />
                                    ))
                                }

                            </select>
                        </Form.Input>
                        <Form.Input fluid label="City" type="city" placeholder="City">

                            <select
                                id="city"
                            >

                                <option value="Şehir" />
                                {
                                    city.map((city) => (
                                        <option value="city" label={city?.cityName} />
                                    ))
                                }

                            </select>
                        </Form.Input>

                        <Form.Group widths='equal'>
                            <Form.Input

                                label='Position Name'
                                type='position'
                                placeholder='Position Name'
                            />

                            <Form.Input

                                label='Position Title'
                                type='position'
                                placeholder='Position Title'
                            />
                            <Form.Input

                                label='Position Quota'
                                type='position'
                                placeholder='Position Quota'
                            />
                        </Form.Group>


                        <Form.Input
                            fluid
                            label='Created At'
                            placeholder='CreatedAt'
                        />
                        <Form.Input
                            fluid
                            label='Dead Line'
                            placeholder='DeadLine'
                        />
                        <Form.Group widths='equal'>
                            <Form.Input

                                label='Maximum Salary'
                                type='max-salary'
                                placeholder='Maximum Salary'
                            />

                            <Form.Input

                                label='Minimum Salary'
                                type='min-salary'
                                placeholder='Minimum Salary'
                            />
                        </Form.Group>

                        <Form.Input label='Working Environment' type='working-environment' placeholder='Working Environment'>
                            <select
                                id="working"
                            >
                                <option value="Working Enviroment"  />
                                {
                                    jobType.map((jobType)=>(
                                         <option value="jobType" label={jobType?.typeName} />
                                    ))
                                }
                            </select>
                        </Form.Input>

                        <Form.Input label='Working Time' type='working-time' placeholder='Working Time'>
                            <select
                                id="working-time"
                            >
                                <option value="" placeholder="Working Time" />
                                {
                                    jobTime.map((jobTime)=>(
                                         <option value="office" label={jobTime?.timeName} />
                                    ))
                                }
                            </select>
                        </Form.Input>

                        <Form.Checkbox
                            label='Active'
                        />

                        <div className='submit'><Button >Submit</Button></div>

                    </Form>

                </Formik>
            </div>
        </div >
    )
}
