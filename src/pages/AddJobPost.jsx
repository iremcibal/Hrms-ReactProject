import React, { useEffect, useState } from 'react'

import { Formik, Field, useFormik } from 'formik'
import { Form, Select } from 'formik-semantic-ui-react'
import { Button, Header, Modal, Icon } from 'semantic-ui-react'
import * as Yup from 'yup';

import { NewPostService } from '../services/newPostService'
import JobPostTextInput from '../utilities/customFormControls/JobPostTextInput'


import { JobPostService } from '../services/jobPostService'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'


export default function AddJobPost() {


    let jobPostService = new JobPostService()
    const [open, setOpen] = React.useState(false)

    //const [company, setCompany] = useState([])
    const [position,setPositions] = useState([])
    const [cities, setCity] = useState([])
    const [jobTypes, setJobType] = useState([])
    const [jobTimes, setJobTime] = useState([])

    useEffect(() => {
        let newJobPostService = new NewPostService()
        //newJobPostService.getByCompanyList().then((result) => setCompany(result.data.data))
        newJobPostService.getPosition().then((result) => setPositions(result.data.data))
        newJobPostService.getCityList().then((result) => setCity(result.data.data))
        newJobPostService.getJobTimeList().then((result) => setJobTime(result.data.data))
        newJobPostService.getJobTypeList().then((result) => setJobType(result.data.data))

    }, [])

    const city = cities.map((city) => ({
        key: city.cityId,
        text: city.cityName,
        value: city.cityId
    }))

    const positions = position.map((positions) => ({
        key: positions.positionId,
        text: positions.positionName,
        value: positions.positionId
    }))  

    const jobType = jobTypes.map((type) => ({
        key: type.jobtypeId,
        text: type.typeName,
        value: type.jobtypeId
    }))


    const jobTime = jobTimes.map((time) => ({
        key: time.jobtimeId,
        text: time.timeName,
        value: time.jobtimeId
    }))


    const history = useHistory()


    const formik = useFormik({
        initialValues: {
            cityId: "",
            positionId:"",
            positionTitle: "",
            positionQuota: "",
            createdAt: "",
            deadLine: "",
            maxSalary: "",
            minSalary: "",
            jobtypeId: "",
            jobtimeId: "",
        },

    })

    const handleChangeValue = (fieldName,value ) => {
        formik.setFieldValue( fieldName,value);
      
    }


    return (
        <div>
            <Modal
                basic
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size='small'
                trigger={<Button>???? ??lan?? Ver</Button>}
            >
                <Header icon>
                    Bilgilerinizi Doldurunuz.
                </Header>
                <Modal.Content>
                    <Modal.Description>
                        <Formik
                            initialValues={formik.initialValues}
                            validationSchema={Yup.object({
                                positionTitle: Yup.string()
                                    .required("L??tfen bo?? b??rakmay??n??z"),
                                positionQuota: Yup.number()
                                    .required("L??tfen bo?? b??rakmay??n??z"),
                                createdAt: Yup.date()
                                    .required("L??tfen bo?? b??rakmay??n??z"),
                                deadLine: Yup.date()
                                    .required("L??tfen bo?? b??rakmay??n??z"),
                                maxSalary: Yup.number()
                                    .required("L??tfen bo?? b??rakmay??n??z"),
                                minSalary: Yup.number()
                                    .required("L??tfen bo?? b??rakmay??n??z")
                            })}
                            onSubmit={(values) => {
                                let newJobPost = {
                                    company: {id:1},
                                    city: { cityId: values.cityId },
                                    positions:{ positionId: values.positionId},
                                    positionTitle: values.positionTitle,
                                    positionQuota: values.positionQuota,
                                    createdAt: values.createdAt,
                                    deadLine: values.deadLine,
                                    maxSalary: values.maxSalary,
                                    minSalary: values.minSalary,
                                    jobType: { jobtypeId: values.jobtypeId },
                                    jobTime: { jobtimeId: values.jobtimeId },
                                    active: true,
                                    status:false,

                                }
                                console.log(newJobPost)
                                jobPostService.postJobPost(newJobPost);
                                Swal.fire(
                                    'Tebrikler',
                                    'Sistem onay??ndan sonra eklenecektir.',
                                    'success'
                                ) 
                                //history.push("/admin/enableNewJobPost")

                            }}

                        >
                            {({

                                dirty, isSubmitting, handleSubmit,
                            }) => (
                                <Form onSubmit={handleSubmit}>


                                    <label>??ehir</label>
                                    <Field name="cityId"
                                        as={Select}
                                        id="cityId"
                                        options={city}
                                        onBlur={formik.onBlur}
                                        value={formik.values.cityId}
                                        onChange={(event, data) => {
                                            handleChangeValue("cityId", data.value)
                                        }}

                                    />

                                    <label>Pozisyon</label>
                                    <Field name="positionId"
                                        as={Select}
                                        id="positionId"
                                        options={positions}
                                        onBlur={formik.onBlur}
                                        value={formik.values.positionId}
                                        onChange={(event, data) => {
                                            handleChangeValue("positionId", data.value)
                                        }}

                                    />

                                    
                                    <label>Pozisyon Bilgisi</label>
                                    <JobPostTextInput name="positionTitle" />
                                    <label>Pozisyon Kotas??</label>
                                    <JobPostTextInput name="positionQuota" />
                                    <label>Yay??nlanma Tarihi</label>
                                    <JobPostTextInput name="createdAt" />
                                    <label>Son Ba??vuru Tarihi</label>
                                    <JobPostTextInput name="deadLine" />
                                    <label>Maksimum Maa??</label>
                                    <JobPostTextInput name="maxSalary" />
                                    <label>Minimum Maa??</label>
                                    <JobPostTextInput name="minSalary" />


                                    <label>??al????ma ??ekli</label>
                                    <Field
                                        as={Select}
                                        name="jobtypeId"
                                        id="jobtypeId"
                                        options={jobType}
                                        onBlur={formik.onBlur}
                                        value={formik.values.jobtypeId}
                                        onChange={(event, data) => {
                                            handleChangeValue(event.jobtypeId,data.value)
                                        }}

                                    />
                                    <label>??al????ma T??r??</label>
                                    <Field name="jobtimeId"
                                        as={Select}
                                        id="jobtimeId"
                                        options={jobTime}
                                        onBlur={formik.onBlur}
                                        value={formik.values.jobtimeId}
                                        onChange={(event, data) => {
                                            handleChangeValue("jobtimeId", data.value)
                                        }}

                                    />
                                    <Button basic color='red' inverted onClick={() => setOpen(false)}>
                                        <Icon name='remove' /> Sil
                                    </Button>

                                    <Button type="submit"
                                        disabled={!dirty || isSubmitting}
                                        color='green' inverted 
                                        >
                                        <Icon name='checkmark' />
                                        Yay??nla
                                    </Button>

                                </Form>

                            )}



                        </Formik>
                    </Modal.Description>
                </Modal.Content>


            </Modal>



        </div>
    )
}
