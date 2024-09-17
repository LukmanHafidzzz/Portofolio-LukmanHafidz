import React from 'react'
import { Card } from 'react-bootstrap'

import './style.css'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { GoArrowUpRight } from 'react-icons/go'
import { FiArrowUpRight } from 'react-icons/fi'

export default function index(props) {
    return (
        <>
            <Card className='h-100'>
                <div className="frame rounded-top-2">
                    <Card.Img src={props.src} alt={props.alt} variant='top' />
                </div>
                <Card.Body>
                    <Card.Title className='text-white mt-2'>{props.title}</Card.Title>
                    <Card.Text className='text-sr-grey mt-2 fs-7 text-justify'>
                        {props.desc}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='mb-4'>
                    <a className="fw-semibold view-btn fs-7" href={props.link}>
                        View Project &ensp; <FiArrowUpRight />
                    </a>
                </Card.Footer>
            </Card>
        </>
    )
}
