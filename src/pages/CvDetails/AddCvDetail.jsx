import React from 'react'
import { Formik } from 'formik'
import { Form, Button, Card, Grid } from 'semantic-ui-react'
import UpdateCvTextInput from '../../utilities/customFormControls/UpdateCvTextInput'
import { CvDetailService } from '../../services/cvdetailService';

export default function AddCvDetail() {

    let note_post = new CvDetailService();
    
    return (
        <div>

            <Card fluid className="cv-add">
                <Card.Content><Card.Header textAlign='center'>Ek Bilgi Ekle</Card.Header></Card.Content>

                <Formik
                    initialValues={{
                        gitHub: '',
                        linkedIn: '',
                        frontNote: '',
                    }}
                    onSubmit={(values) => {
                        let newnote = {
                            candidates: { id: 1 },
                            gitHub: values.gitHub,
                            linkedIn: values.linkedIn,
                            frontNote: values.frontNote,

                        }
                        console.log(newnote)
                        note_post.postDetail(newnote);
                        


                    }}



                >
                    {({
                        handleSubmit,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <label>Ek Not</label>
                            <UpdateCvTextInput name="frontNote" />
                            <Grid columns={2}>
                                <Grid.Column>
                                    <label>Github Linki</label>
                                    <UpdateCvTextInput name="gitHub" />

                                </Grid.Column>

                                <Grid.Column>
                                    <label>LinkedIn Linki</label>
                                    <UpdateCvTextInput name="linkedIn" />

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
