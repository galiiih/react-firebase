import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../Component/BackComponent'

export default class EditUserContainer extends Component {
    render() {
        return (
            <Container>
                <BackComponent/>
                <h1>Edit User</h1>
            </Container>
        )
    }
}
