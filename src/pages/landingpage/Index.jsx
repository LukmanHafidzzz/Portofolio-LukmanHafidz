import React from 'react';

import { Col, Container, Image, Row } from 'react-bootstrap'
import NewNavbar from '../../components/navbar/index'
import SkillsLogo from '../../components/skills/index'
import Projects from '../../components/projects/index'
import Script from './Script'
import './style.css'

export default function Index() {
    const text = "Hello! I'm Lukman Hafidz.";
    const typedText = Script(text);

    return (
        <>
            <NewNavbar />
            <Container className='section-gap' id='home'>
                <Row className='d-flex justify-content-center align-items-center' data-aos="fade-up" data-aos-duration="1000">
                    <Col>
                        <p className="fw-medium text-white fs-6" id="typed-text" dangerouslySetInnerHTML={{ __html: typedText }}></p>
                        <p className="fs-1 fw-semibold text-white">I create immersive <span className="text-span">web experiences</span> and build digital solutions</p>
                        <p className="text-sr-grey fw-medium">Fullstack Web Developer Enthusiast</p>
                        <p className="mt-3">
                            <a className="btn fs-7 fw-semibold connect-btn ps-5 pt-3 pe-5 pb-3" href="https://github.com/LukmanHafidzzz" target="_blank">Get in Touch</a>
                        </p>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Image src='Frame 5008.png' alt='Frame 5008' className='w-75' />
                    </Col>
                </Row>
            </Container>
            <Container className="section-gap" id='about'>
                <Row className='d-flex justify-content-center align-items-center' data-aos="fade-up" data-aos-duration="1000">
                    <Col>
                        <Image src='Frame 5009.png' alt='Frame 5009' className='w-75' />
                    </Col>
                    <Col className='p-3'>
                        <p className="fs-3 fw-semibold text-white">About Me</p>
                        <p className="text-sr-grey text-justify fs-7">
                            I am a student of Information Technology at the State University of Yogyakarta who is passionate
                            about Fullstack web development. My interest in this technology is mainly focused on the use of
                            Javascript because of its incredible flexibility, allowing me to work on both Frontend and Backend.
                        </p>
                        <p className="text-sr-grey text-justify fs-7">
                            I believe that every project is an opportunity to learn and grow. I am committed to continually
                            exploring and enhancing my abilities in the world of web development.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="section-gap" id="skills">
                <p className="fs-3 fw-semibold text-center text-white mb-5" data-aos="fade-up" data-aos-duration="1000">My Skills</p>
                <Row data-aos="fade-up" data-aos-duration="1000">
                    <Col></Col>
                    <Col xl={10}>
                        <Row xs={2} md={5} className='g-5'>
                            <SkillsLogo src='html.png' alt='html' />
                            <SkillsLogo src='css.png' alt='css' />
                            <SkillsLogo src='js.png' alt='js' />
                            <SkillsLogo src='react.png' alt='react' />
                            <SkillsLogo src='sql.png' alt='mysql' />
                            <SkillsLogo src='php.png' alt='php' />
                            <SkillsLogo src='laravel.png' alt='laravel' />
                            <SkillsLogo src='node.png' alt='node' />
                            <SkillsLogo src='figma.png' alt='figma' />
                            <SkillsLogo src='tailwind.png' alt='tailwind' />
                        </Row>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <Container className="section-gap mb-5" id="projects">
                <p className="fs-3 fw-semibold text-center text-white mb-5" data-aos="fade-up" data-aos-duration="1000">My Projects</p>
                <Row xs={1} md={3} className="g-4 mt-3" data-aos="fade-up" data-aos-duration="1000">
                    <Col>
                        <Projects
                            src='project4.png'
                            alt='project4'
                            title='Puspreshpol'
                            desc="It's a website for one of the faculties at Yogyakarta State University, namely the Faculty of Social Sciences, Law, & Political Science."
                            link='https://puspreshpol.com/'
                        />
                    </Col>
                    <Col>
                        <Projects
                            src='project3.png'
                            alt='project3'
                            title='Amerta'
                            desc="It's a website that gathers various wedding organizers. Users can make bookings by selecting available dates."
                            link='https://github.com/LukmanHafidzzz/amerta'
                        />
                    </Col>
                    <Col>
                        <Projects
                            src='project2.png'
                            alt='project2'
                            title='Homeline'
                            desc="It's a real estate website where sellers and buyers can trust each other as the houses undergo document verification by the team beforehand."
                            link='https://github.com/LukmanHafidzzz/Homeline-version-2'
                        />
                    </Col>
                    <Col>
                        <Projects
                            src='project6.png'
                            alt='project6'
                            title='Nutritrack'
                            desc="It's a website to check the nutritional status of toddlers. Additionally, the website features a marketplace, a list of contacts for health centers and hospitals, as well as related information about nutrition."
                            link='https://nutritrack-mocha.vercel.app/'
                        />
                    </Col>
                    <Col>
                        <Projects
                            src='project7.png'
                            alt='project7'
                            title='Public Art'
                            desc="This is a website about art, where users can view various paintings and learn about the artists. The MVP feature of this website is a 3D painting feature, where users can interact with the artwork."
                            link='https://github.com/satriowcksnnnnnn/masive_project'
                        />
                    </Col>
                    <Col>
                        <Projects
                            src='project8.png'
                            alt='project8'
                            title='Mentalku'
                            desc="This is a website focused on mental health consultations. In addition to the consultation feature, it also provides information about various mental health disorders."
                            link='https://github.com/LukmanHafidzzz/project-mentalku'
                        />
                    </Col>
                    <Col>
                        <Projects
                            src='project9.png'
                            alt='project9'
                            title='TBC Card'
                            desc="This is a website that integrates Laravel with Python. It is a collaborative project between me and my colleague, where the system can analyze the illness a user is experiencing by inputting their symptoms."
                            link='https://github.com/LukmanHafidzzz/tbc_web'
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}