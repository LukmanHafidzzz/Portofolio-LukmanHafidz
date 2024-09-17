import React from 'react'
import { Col, Image } from 'react-bootstrap'

import './style.css'

export default function index(props) {
    return (
        <>
            <Col className='d-flex justify-content-center'>
                <Image src={props.src} alt={props.alt} width={150} className='img-hover' />
            </Col>
        </>
    )
}
