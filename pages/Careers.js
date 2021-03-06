import Navigation from '../components/Nav';
import styles from './Index.module.css'
import Head from "next/head";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Footer from '../components/Footer';
import Modal from 'react-bootstrap/Modal'
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'

// import your icons

library.add(fas);

function Careers() {
  const [show, setShow] = useState(false);

  const [lgShow, setLgShow] = useState(false);


    return <div>
         <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Navigation/>
      
        <section className={styles.careers_bnr}>
        <h1 >Careers</h1>
        </section>
       <br/>
       <section>
         <Container>
           <Row>
             <Col md={4} sm={6} xs={12}>
             <div className={styles.job_box}>
             <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'briefcase']} />
             <h4>Web Developer</h4>
             <p className={styles.job_content}>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</p>

             <Button variant="outline-primary" onClick={() => setLgShow(true)}>Apply</Button>{' '}
             </div>

             </Col>
             <Col md={4} sm={6} xs={12}>
             <div className={styles.job_box}>
             <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'briefcase']} />
             <h4>Web Developer</h4>
             <p className={styles.job_content}>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</p>

             <Button variant="outline-primary" onClick={() => setLgShow(true)}>Apply</Button>{' '}
             </div>

             </Col>
             <Col md={4} sm={6} xs={12}>
             <div className={styles.job_box}>
             <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'briefcase']} />
             <h4>Web Developer</h4>
             <p className={styles.job_content}>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</p>

             <Button variant="outline-primary" onClick={() => setLgShow(true)}>Apply</Button>{' '}
             </div>

             </Col>
             <Col md={4} sm={6} xs={12}>
             <div className={styles.job_box}>
             <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'briefcase']} />
             <h4>Web Developer</h4>
             <p className={styles.job_content}>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</p>

             <Button variant="outline-primary" onClick={() => setLgShow(true)}>Apply</Button>{' '}
             </div>

             </Col>
             <Col md={4} sm={6} xs={12}>
             <div className={styles.job_box}>
             <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'briefcase']} />
             <h4>Web Developer</h4>
             <p className={styles.job_content}>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</p>

             <Button variant="outline-primary" onClick={() => setLgShow(true)}>Apply</Button>{' '}
             </div>

             </Col>
             <Col md={4} sm={6} xs={12}>
             <div className={styles.job_box}>
             <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'briefcase']} />
             <h4>Web Developer</h4>
             <p className={styles.job_content}>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</p>

             <Button variant="outline-primary" onClick={() => setLgShow(true)}>Apply</Button>{' '}
             </div>

             </Col>
           </Row>
         </Container>
      
       </section>

       {/* modal */}
 

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header className={styles.bg_primary}  closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          <FontAwesomeIcon className={styles.modal_icon} icon={['fas', 'graduation-cap']} />  Job Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Job Description </h5>
          <ul className={styles.job_list}>
            <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </li>
            <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </li>
            <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </li>
            <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </li>
            <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </li>
            <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </li>
          </ul>

          <br/><br/>

          <Form>
 <Row>
   <Col md={6} xs={12}>
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your Name" required />
    
  </Form.Group>
   </Col>
   <Col md={6} xs={12}>
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Contact Number</Form.Label>
    <Form.Control type="number" placeholder="Enter your Number" required />
  </Form.Group>
   </Col>

   <Col md={6} xs={12}>
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Enter your Email" required />
  </Form.Group>
   </Col>

   <Col md={6} xs={12}>
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>City/State</Form.Label>
    <Form.Control type="text" placeholder="Enter your City/State" required />
  </Form.Group>
   </Col>

   <Col md={6} xs={12}>
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Previous Designation</Form.Label>
    <Form.Control type="text" placeholder="Enter your Previous Designation" required />
  </Form.Group>
   </Col>

   <Col md={6} xs={12}>
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Resume Upload <small>(format:<i> PDF, document</i>)</small></Form.Label>
    <Form.Control type="file" required />
  </Form.Group>
   </Col>

   
   <Col md={12} xs={12}>
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Say about yourself</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Enter Say about yourself" />
  </Form.Group>
   </Col>

   <Col md={12} xs={12}>
   <div className={styles.text_center}>
   <Button variant="outline-dark" closeButton>Cancel</Button> &nbsp;
   <Button type="submit" variant="success">Apply</Button>{' '}
   </div>
   </Col>
   

 </Row>
  </Form>

        </Modal.Body>
      </Modal>

       <br/>
      
<Footer/>

    </div>
  }
  
  export default Careers