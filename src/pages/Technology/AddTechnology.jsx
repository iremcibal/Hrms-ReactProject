import React from 'react'
import { Formik } from 'formik'
import { Form, Button, Card, Grid } from 'semantic-ui-react'
import * as Yup from 'yup';
import UpdateCvTextInput from '../../utilities/customFormControls/UpdateCvTextInput'
import { TechnologyService } from '../../services/technologyService';

export default function AddTechnology() {

    let technology_post = new TechnologyService();

    return (
        <div>
            <Card fluid className="cv-add">
                <Card.Content><Card.Header textAlign='center'>Yetenek Ekle</Card.Header></Card.Content>

                <Formik
                    initialValues={{
                        technologyName: '',
                        level: '',
                    }}
                    validationSchema={
                        Yup.object({
                            technologyName: Yup.string()
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.'),
                            level: Yup.string()
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.'),

                        })}
                    onSubmit={(values) => {
                        let newtechnology = {
                            candidates: { id: 1 },
                            technologyName: values.technologyName,
                            level: values.level,

                        }
                        console.log(newtechnology)
                        technology_post.postTechnology(newtechnology)


                    }}



                >
                    {({
                        handleSubmit,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Grid columns={2}>
                                <Grid.Column>
                                    <label>Program İsmi</label>
                                    <UpdateCvTextInput name="technologyName" />

                                </Grid.Column>

                                <Grid.Column>
                                    <label>Seviye</label>
                                    <UpdateCvTextInput name="level" />

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
