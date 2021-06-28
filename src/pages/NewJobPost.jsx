import React, { useEffect } from 'react'
import { useState } from 'react'
import NewPostService from '../services/newPostService'
import { Formik } from 'formik'
import * as Yup from 'yup';
import JobPostService from '../services/jobPostService';

export default function NewJobPost() {

    let jobPostService = new JobPostService()


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

    return (
        <div>
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
                            initialValues={{
                                company: " ",
                                city: "",
                                positionName: "",
                                positionTitle: "",
                                positionQuota: "",
                                createdAt: "",
                                deadLine: "",
                                maxSalary: "",
                                minSalary: "",
                                working: "",
                                workingTime: "",
                                isActive: ""
                            }}
                            validationSchema={
                                Yup.object({
                                    positionName: Yup.string().required(),
                                    positionTitle: Yup.string().required(),
                                    positionQuota: Yup.string().required(),
                                    createdAt: Yup.date().required(),
                                    deadLine: Yup.date().required(),
                                    maxSalary: Yup.string().required(),
                                    minSalary: Yup.string().required()
                                })

                            }
                            onSubmit={(values) => {
                                let newJobPost = {
                                    company: { id: 1 },
                                    city: { id: values.cityId },
                                    positionName: values.positionName,
                                    positionTitle: values.positionTitle,
                                    positionQuota: values.positionQuota,
                                    createdAt: values.createdAt,
                                    deadLine: values.deadLine,
                                    maxSalary: values.maxSalary,
                                    minSalary: values.minSalary,
                                    working: { id: values.jobtypeId },
                                    workingTime: { id: values.jobtimeId },
                                    isActive: values.isActive,
                                }
                                console.log(newJobPost)
                                jobPostService.postJobPost(newJobPost);

                            }}
                        >
                            <Form>
                                <label>Company</label>
                                <JobPostTextInput name="" />
                                <label>Company</label>
                                <JobPostTextInput name="" />
                                <Form.Group widths='equal'>
                                    <label>Pozisyon</label>
                                    <JobPostTextInput name="positionName" />
                                    <label>Pozisyon Bilgisi</label>
                                    <JobPostTextInput name="positionTitle" />
                                    <label>Pozisyon Kotası</label>
                                    <JobPostTextInput name="positionQuota" />
                                </Form.Group>

                                <label>Yayınlanma Tarihi</label>
                                <JobPostTextInput name="createdAt" />
                                <label>Son Başvuru Tarihi</label>
                                <JobPostTextInput name="deadLine" />
                                <label>Maksimum Maaş</label>
                                <JobPostTextInput name="maxSalary" />
                                <label>Minimum Maaş</label>
                                <JobPostTextInput name="minSalary" />
                                <label>Company</label>
                                <JobPostTextInput name="" />
                                <label>Company</label>
                                <JobPostTextInput name="" />








                            </Form>

                        </Formik>




                    </Modal.Description>
                </Modal.Content>

            </Modal>

        </div>
    )
}
