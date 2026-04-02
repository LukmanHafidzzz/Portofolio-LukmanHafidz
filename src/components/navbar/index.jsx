import React, { useState } from 'react'
import { Button, Col, Container, Image, Modal, Nav, Navbar, Row } from 'react-bootstrap'
import Script from './Script'
import './style.css'
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";
import { IoClose } from 'react-icons/io5';

export default function index() {
    Script();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar className='fixed-top p-3' expand="lg" id='navbar'>
                <Container data-aos="zoom-in" data-aos-duration="1000">
                    <Navbar.Brand className='fw-semibold text-white' href="#">
                        <span className="text-span">Lukman</span>Hafidzzz
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='mx-auto'>
                            <Nav.Link href="#home" className='fw-medium me-4 text-active'>Home</Nav.Link>
                            <Nav.Link href="#about" className='fw-medium me-4'>About Me</Nav.Link>
                            <Nav.Link href="#skills" className='fw-medium me-4'>Skills</Nav.Link>
                            <Nav.Link href="#projects" className='fw-medium me-4'>Projects</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link className='fw-semibold contact-btn' onClick={handleShow}>Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose} centered size="sm">
                <div className="position-relative">
                    <div className="position-absolute bg-transparent border-0 btn-hiden" onClick={handleClose}>
                        <IoClose />
                    </div>
                </div>
                <Modal.Body className='py-5'>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="bg-profile d-flex justify-content-center align-items-center rounded-circle">
                            <Image src="https://s3.nevaobjects.id/profile-porto/ydkxcvgln9pokzmrtglj.webp" alt="profile" className="rounded-circle" width="130" />
                        </div>
                        <div className="mt-3 fs-5 fw-medium text-center">
                            Lukman Hafidz
                        </div>
                        <div className="text-sr-grey text-center">
                            Contact me:
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=lukmanhafidz30@gmail.com' target='_blank' rel="noopener noreferrer" className="btn-contact d-flex justify-content-center align-items-center fs-5">
                                <MdEmail />
                            </a>
                            <a href='https://github.com/LukmanHafidzzz' target='_blank' rel="noopener noreferrer" className="btn-contact d-flex justify-content-center align-items-center fs-5">
                                <FaGithub />
                            </a>
                            <a href='https://wa.me/+62887433065059' target='_blank' rel="noopener noreferrer" className="btn-contact d-flex justify-content-center align-items-center fs-5">
                                <IoLogoWhatsapp />
                            </a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
