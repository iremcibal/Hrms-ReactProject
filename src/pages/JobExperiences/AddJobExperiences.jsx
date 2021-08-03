import React from 'react'
import { JobExperienceService } from '../../services/jobExperienceService';
import { Formik } from 'formik'
import { Form, Button, Card, Grid } from 'semantic-ui-react'
import * as Yup from 'yup';
import UpdateCvTextInput from '../../utilities/customFormControls/UpdateCvTextInput'

export default function AddJobExperiences() {
    let experience_post = new JobExperienceService();

    return (
        <div>
            <Card fluid className="cv-add">
                <Card.Content><Card.Header textAlign='center'>İş Tecrübesi Ekle</Card.Header></Card.Content>

                <Formik
                    initialValues={{
                        companyName: '',
                        positionName: '',
                        startAt: '',
                        finishAt: '',


                    }}
                    validationSchema={
                        Yup.object({
                            companyName: Yup.string()
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.'),
                            positionName: Yup.string()
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.'),
                            startAt: Yup.date()
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.'),
                            finishAt: Yup.date()
                        })}
                    onSubmit={(values) => {
                        let newjobexperience = {
                            candidates: { id: 1 },
                            companyName: values.companyName,
                            positionName: values.positionName,
                            startAt: values.startAt,
                            finishAt: values.finishAt,
                        }
                        console.log(newjobexperience)
                        experience_post.postJobExperience(newjobexperience);


                    }}



                >
                    {({
                        handleSubmit,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Grid columns={2}>
                                <Grid.Column>
                                    <label>Şirket</label>
                                    <UpdateCvTextInput name="companyName" />
                                    <label>Pozisyon</label>
                                    <UpdateCvTextInput name="positionName" />
                                </Grid.Column>

                                <Grid.Column>
                                    <label>Başlama Tarihi</label>
                                    <UpdateCvTextInput name="startAt" />
                                    <label>Bitirme Tarihi</label>
                                    <UpdateCvTextInput name="finishAt" />

                                    <Button
                                        className="cv-add-button"
                                        type="submit"
                                    >Ekle</Button>
                                </Grid.Column>

                            </Grid>

                        </Form>
                    )}



                </Formik>
            </Card>

        </div>
    )
}
