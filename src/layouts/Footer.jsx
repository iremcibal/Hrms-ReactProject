import React from 'react'
import {
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment,
  } from 'semantic-ui-react'

export default function Footer() {
    return (
        <div>
            <Segment footer style={{ margin: '5em 0em 0em', padding: '5em 0em' ,color:"rgba(0,0,0,.4)" , background:'white'}}  vertical>
            <Divider footer section />
                <Container textAlign='center' >
                    <Grid columns={3} divided stackable footer>
                        <Grid.Row>
                            <Grid.Column>
                                <Header footer as='h4' content='Group 1' />
                                <List link footer>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                    <List.Item as='a'>Link Four</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header footer as='h4' content='Group 3' />
                                <List link footer>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                    <List.Item as='a'>Link Four</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header footer as='h4' content='Footer Header' />
                                <p>
                                    Extra space for a call to action inside the footer that could help re-engage
                                    users.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Divider inverted section />
                    <Image src='https://res.cloudinary.com/stanbul/image/upload/v1623720681/d42c91fa05a63047ab0a2109a10786d7_pohb7u.png' centered size='mini' />
                    <List horizontal footer divided link size='small'>
                        <List.Item as='a' href='#'>
                            Site Map
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Contact Us
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Terms and Conditions
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Privacy Policy
                        </List.Item>
                    </List>
                </Container>
            </Segment>
        </div>
    )
}
