import React, { useEffect, useState } from 'react'
import { NewPostService } from '../services/newPostService'
import { Formik, Field, useFormik } from 'formik'
import { Form, Select } from 'formik-semantic-ui-react'
import { Button, Header, Modal, Icon } from 'semantic-ui-react'
import JobPostTextInput from '../utilities/customFormControls/JobPostTextInput'
import * as Yup from 'yup';
import UserAddTextInput from '../utilities/customFormControls/UserAddTextInput'
import { JobPostService } from '../services/jobPostService'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
import { FormField } from 'semantic-ui-react'


export default function AddJobPost() {

    //let jobPostService = new JobPostService()
    //const [open, setOpen] = React.useState(false)

    const [company, setCompany] = useState([])
    const [cities, setCity] = useState([])
    const [jobTypes, setJobType] = useState([])
    const [jobTimes, setJobTime] = useState([])

    useEffect(() => {
        let newJobPostService = new NewPostService()
        newJobPostService.getByCompanyList().then((result) => setCompany(result.data.data))
        newJobPostService.getCityList().then((result) => setCity(result.data.data))
        newJobPostService.getJobTimeList().then((result) => setJobTime(result.data.data))
        newJobPostService.getJobTypeList().then((result) => setJobType(result.data.data))

    }, [])

    const city = cities.map((city) => ({
        key: city.cityId,
        text: city.cityName,
        value: city.cityId
    }))

    const type = jobTypes.map((type) => ({
        key: type.jobtypeId,
        text: type.typeName,
        value: type.jobtypeId
    }))

    const time = jobTimes.map((time) => ({
        key: time.jobtimeId,
        text: time.timeName,
        value: time.jobtimeId
    }))

    // const history = useHistory()

    const formik = useFormik({
        initialValues: {
            cityId: "",
            positionName: "",
            positionTitle: "",
            positionQuota: "",
            createdAt: "",
            deadLine: "",
            maxSalary: "",
            minSalary: "",
            jobtypeId: "",
            jobtimeId: "",
        },

        validationSchema: Yup.object({
            positionName: Yup.string()
            .required("Lütfen boş bırakmayınız"),
            positionTitle: Yup.string()
            .required("Lütfen boş bırakmayınız"),
            positionQuota: Yup.number()
            .required("Lütfen boş bırakmayınız"),
            createdAt: Yup.date()
            .required("Lütfen boş bırakmayınız"),
            deadLine: Yup.date()
            .required("Lütfen boş bırakmayınız"),
            maxSalary: Yup.number()
            .required("Lütfen boş bırakmayınız"),
            minSalary: Yup.number()
            .required("Lütfen boş bırakmayınız")
        }),




        onSubmit: (values) => {
            let newJobPost = {

                city: { cityId: values.cityId },
                positionName: values.positionName,
                positionTitle: values.positionTitle,
                positionQuota: values.positionQuota,
                createdAt: values.createdAt,
                deadLine: values.deadLine,
                maxSalary: values.maxSalary,
                minSalary: values.minSalary,
                jobtype: { jobtypeId: values.jobtypeId },
                jobtime: { jobtimeId: values.jobtimeId }
            }
            console.log(newJobPost)
            //jobPostService.postJobPost(newJobPost);
            /* Swal.fire(
                'Tebrikler',
                'Sistem onayından sonra eklenecektir.',
                'success'
            ) */
            //history.push("/admin/enableNewJobPost")

        }

    })

    const handleChangeValue = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    }


    return (
        <div>
            {/* <Modal
                basic
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size='small'
                trigger={<Button>İş İlanı Ver</Button>}
            > */}
            <Header icon>
                Bilgilerinizi Doldurunuz.
            </Header>
            <Modal.Content>
                <Modal.Description>
                    <Formik
                        initialValues={formik.initialValues}
                        onSubmit={formik.handleSubmit}

                    >
                        <Form>


                            <label>Şehir</label>
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
                            <UserAddTextInput name="positionName" />
                            <label>Pozisyon Bilgisi</label>
                            <JobPostTextInput name="positionTitle" />
                            <label>Pozisyon Kotası</label>
                            <JobPostTextInput name="positionQuota" />
                            <label>Yayınlanma Tarihi</label>
                            <JobPostTextInput name="createdAt" />
                            <label>Son Başvuru Tarihi</label>
                            <JobPostTextInput name="deadLine" />
                            <label>Maksimum Maaş</label>
                            <JobPostTextInput name="maxSalary" />
                            <label>Minimum Maaş</label>
                            <JobPostTextInput name="minSalary" />
                            <label>Çalışma Şekli</label>
                            <Field
                                as={Select}
                                name="jobtypeId"
                                id="jobtypeId"
                                options={type}
                                onBlur={formik.onBlur}
                                value={formik.values.jobtypeId}
                                onChange={(event, data) => {
                                    handleChangeValue(data.value, "jobtypeId")
                                }}

                            />
                            <label>Çalışma Türü</label>
                            <Field name="jobtimeId"
                                as={Select}
                                id="jobtimeId"
                                options={time}
                                onBlur={formik.onBlur}
                                value={formik.values.jobtimeId}
                                onChange={(event, data) => {
                                    handleChangeValue("jobtimeId", data.value)
                                }}

                            />

                        </Form>

                    </Formik>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                {/* <Button basic color='red' inverted onClick={() => setOpen(false)}>
                        <Icon name='remove' /> Sil
                    </Button> */}

                <Button type="submit" color='green' inverted >

                    <Icon name='checkmark' /> Yayınla
                </Button>
            </Modal.Actions>




        </div>
    )
}
