import React from 'react'
import { Formik } from 'formik'
import { Form, Button, Card, Grid } from 'semantic-ui-react'
import * as Yup from 'yup';
import UpdateCvTextInput from '../../utilities/customFormControls/UpdateCvTextInput'
import { LanguageService } from '../../services/languageService';

export default function AddLanguage() {

    let language_post = new LanguageService();

    return (
        <div>
            <Card fluid className="cv-add">
                <Card.Content><Card.Header textAlign='center'>Yabancı Dil Bilgisi Ekle</Card.Header></Card.Content>

                <Formik
                    initialValues={{
                        language: '',
                        level: '',
                    }}
                    validationSchema={
                        Yup.object({
                            language: Yup.string()
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.'),
                            level: Yup.string()
                                .required('Lütfen bilgilerinizi eksiksiz giriniz.'),

                        })}
                    onSubmit={(values) => {
                        let newlanguage = {
                            candidates: { id: 1 },
                            language: values.language,
                            level: values.level,

                        }
                        console.log(newlanguage)
                        language_post.postLanguage(newlanguage);


                    }}



                >
                    {({
                        handleSubmit,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Grid columns={2}>
                                <Grid.Column>
                                    <label>Yabancı Dil</label>
                                    <UpdateCvTextInput name="language" />

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
