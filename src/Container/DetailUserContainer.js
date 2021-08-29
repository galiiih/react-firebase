import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../Component/BackComponent'

export default class DetailUserContainer extends Component {
    render() {
        return (
            <Container>
                <BackComponent/>
                <h1>Detail User</h1>
            </Container>
        )
    }
}
