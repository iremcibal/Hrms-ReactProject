import React, { useEffect, useState} from 'react'
import { Formik, useFormik } from 'formik'
import { Button, Form, } from 'semantic-ui-react'
import JobPostService from '../services/jobPostService'
import { CityService } from '../services/cityService'
import { CompanyService } from '../services/companyService'
import { JobTypeService } from '../services/jobTypeService'
import { JobTimeService } from '../services/jobTimeService'
import { Header, Icon, Modal } from 'semantic-ui-react'
import { useToast } from 'react-toastify'

export default function JobPost() {

    let jobPostService = new JobPostService()

    const [open, setOpen] = React.useState(false)
    const addToast = useToast();


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
        let cityService = new CityService()
        cityService.getCityList().then(result => {
            setCity(result.data.data);
            console.log(result)
        })
        let jobTypeService = new JobTypeService()
        jobTypeService.getJobTypeList().then(result => {
            setJobType(result.data.data);
            console.log(result);
        })
        let jobTimeService = new JobTimeService()
        jobTimeService.getJobTimeList().then(result => {
            setJobTime(result.data.data);
            console.log(result)
        })

    }, [])

    const formik = useFormik({
        initialValues: {
            company: "", city: "", positionName: "", positionTitle: "",
            positionQuota: "", createdAt: "", deadLine: "", maxSalary: "",
            minSalary: "", working: "", workingTime: "", active: ""
        },
    
    })
    const handleDropdownChange = (name, value) => formik.setFieldValue(name, value)


    return (
        <div className="container-form2">
            <div className="magic-form">
               { /*<div className="ilan">İş İlanı Ver </div>*/}
                <Modal
                    basic
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    size='small'
                    trigger={<Button>İş İlanı Ver</Button>}
                >
                    <Header icon>
                        Bilgilerinizi Doldurunuz.
                    </Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Formik
                                initialValues={formik.initialValues}
                                onSubmit= {(values) => {
                                    let jobPost = {
                                        company: { id: 1 },
                                        city: { id: values.city_id },
                                        positionName: values.positionName,
                                        positionTitle: values.positionTitle,
                                        positionQuota: values.positionQuota,
                                        createdAt: values.createdAt,
                                        deadLine: values.deadLine,
                                        maxSalary: values.maxSalary,
                                        minSalary: values.minSalary,
                                        working: { id: values.jobtype_id },
                                        workingTime: { id: values.jobtime_id },
                                        isActive:false,
                                    }
                                    console.log(jobPost);
                                    jobPostService.postJobPost(jobPost).then((result) => {
                                        addToast(result.data.message, {appearanca : result.data.success ? "success": "error", autoDismiss: true});
                                    })
                                }}
                            >
                                <Form onSubmit={formik.handleSubmit}>
                                    <Form.Input fluid label="Company" type="company" placeholder='Company' name="company"

                                        onChange={(event, data) => {
                                            handleDropdownChange("id", data.value)
                                        }}
                                        value={formik.values.id}

                                    >
                                        <select
                                            id="company"
                                        >
                                            <option />
                                            {
                                                company.map((company) => (
                                                    <option value="company" label={company?.companyName} />
                                                ))
                                            }

                                        </select>
                                    </Form.Input>
                                    <Form.Input fluid label="City" type="city" placeholder="City" name="city">

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
                                            name="positionName"
                                            id="positionName"
                                            label='Position Name'
                                            type='position'
                                        />

                                        <Form.Input
                                            name="positionTitle"
                                            id="positionTitle"
                                            label='Position Title'
                                            type='position'
                                            placeholder='Position Title'
                                        />
                                        <Form.Input
                                            name="positionQuota"
                                            id="positionQuota"
                                            label='Position Quota'
                                            type='position'
                                            placeholder='Position Quota'
                                        />
                                    </Form.Group>


                                    <Form.Input
                                        name="createdAt"
                                        id="createdAt"
                                        fluid
                                        label='Created At'
                                        placeholder='CreatedAt'
                                    />
                                    <Form.Input
                                        name="deadLine"
                                        id="deadLine"
                                        fluid
                                        label='Dead Line'
                                        placeholder='DeadLine'
                                    />
                                    <Form.Group widths='equal'>
                                        <Form.Input
                                            name="maxSalary"
                                            id="maxSalary"
                                            label='Maximum Salary'
                                            type='max-salary'
                                            placeholder='Maximum Salary'
                                        />

                                        <Form.Input
                                            min="minSalary"
                                            id="minSalary"
                                            label='Minimum Salary'
                                            type='min-salary'
                                            placeholder='Minimum Salary'
                                        />
                                    </Form.Group>

                                    <Form.Input label='Working Environment' type='working-environment' placeholder='Working Environment'>
                                        <select
                                            id="working"
                                        >
                                            <option value="Working Enviroment" />
                                            {
                                                jobType.map((jobType) => (
                                                    <option value="jobType" label={jobType?.typeName} />
                                                ))
                                            }
                                        </select>
                                    </Form.Input>

                                    <Form.Input label='Working Time' type='working-time' placeholder='Working Time'>
                                        <select
                                            id="workingTime"
                                        >
                                            <option value="" placeholder="Working Time" />
                                            {
                                                jobTime.map((jobTime) => (
                                                    <option value="office" label={jobTime?.timeName} />
                                                ))
                                            }
                                        </select>
                                    </Form.Input>



                                </Form>

                            </Formik>
                        </Modal.Description>

                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='red' inverted onClick={() => setOpen(false)}>
                            <Icon name='remove' /> Sil
                        </Button>
                        <Button type="submit" color='green' inverted >
                            <Icon name='checkmark' /> Yayınla
                        </Button>
                    </Modal.Actions>
                </Modal>













            </div>
        </div >
    )
}
