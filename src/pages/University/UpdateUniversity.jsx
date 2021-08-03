import React from 'react'
import { UniversityService } from '../../services/universityService';
import { Formik } from 'formik'
import { Form, Button, Card, Grid } from 'semantic-ui-react'
import UpdateCvTextInput from '../../utilities/customFormControls/UpdateCvTextInput';
import * as Yup from 'yup';


export default function AddUniversity() {
    let universityService = new UniversityService();

    return (
        <div>
            <Card fluid className="cv-add">
                <Card.Content><Card.Header textAlign='center'>Eğitim Bilgisini Güncelle</Card.Header></Card.Content>
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
                            university_name: Yup.string(),
                            division_name: Yup.string(),
                            education: Yup.string(),
                            startAt: Yup.date(),
                            finishAt: Yup.date()
                        })}
                    onSubmit={(values) => {
                        let updateeducation = {
                            candidates: { id: 1 },
                            universityId: values.universityId,
                            university_name: values.university_name,
                            division_name: values.division_name,
                            education: values.education,
                            startAt: values.startAt,
                            finishAt: values.finishAt,
                        }
                        console.log(updateeducation)
                        universityService.updateUniversity(updateeducation);


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
                                    >Güncelle</Button>
                                </Grid.Column>

                            </Grid>

                        </Form>
                    )}



                </Formik>
            </Card>
        </div>
    )
}
