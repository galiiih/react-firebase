import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../Component/BackComponent'

export default class CreateUserContainer extends Component {
    render() {
        return (
            <Container>
                <BackComponent/>
                <h1>Create User</h1>
            </Container>
        )
    }
}
