import React from 'react';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends React.Component {
    render () {
        return(
            <Container>
                <Form>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="password" type="password" />
                    </FormGroup>
                    <div className="text-center">
                        <Button color="primary">Login</Button>
                    </div>
                </Form>
            </Container>
        );
    }
}

export default Login;
