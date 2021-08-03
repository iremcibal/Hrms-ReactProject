import React from 'react'
import { UniversityService } from '../../services/universityService';
import { Formik } from 'formik'
import { Form, Button, Card, Grid } from 'semantic-ui-react'
import UpdateCvTextInput from '../../utilities/customFormControls/UpdateCvTextInput';
import * as Yup from 'yup';

export default function AddUniversity() {

    let university_post = new UniversityService();

    return (
        <div>
            <Card fluid className="cv-add">
                <Card.Content><Card.Header textAlign='center'>Eğitim Bilgisi Ekle</Card.Header></Card.Content>
                <Formik
                    initialValues={{
                        university_name: '',
                        division_name: '',
                        education: '',
                        startAt: '',
                        finishAt: '',


                    }}
                    validationSchema={
                        Yup.object({
                            university_name: Yup.string()
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.'),
                            division_name: Yup.string()
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.'),
                            education: Yup.string()
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.'),
                            startAt: Yup.date()
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.'),
                            finishAt: Yup.date()
                        })}
                    onSubmit={(values) => {
                        let neweducation = {
                            candidates: { id: 1 },
                            university_name: values.university_name,
                            division_name: values.division_name,
                            education: values.education,
                            startAt: values.startAt,
                            finishAt: values.finishAt,
                        }
                        console.log(neweducation)
                        university_post.postUniversity(neweducation);


                    }}



                >
                    {({
                        handleSubmit,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <label>Üniversite</label>
                            <UpdateCvTextInput name="university_name" />
                            <Grid columns={2}>
                                <Grid.Column>
                                    <label>Bölüm</label>
                                    <UpdateCvTextInput name="division_name" />
                                    <label>Eğitim</label>
                                    <UpdateCvTextInput name="education" />
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
