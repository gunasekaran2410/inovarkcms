import Navigation from '../components/Nav';
import styles from './Index.module.css'
import Head from "next/head";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import Footer from '../components/Footer';

function About() {
   
    return <div>
          <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Navigation/>
      
        <section className={styles.sub_bnr}>
        <h1 >a great company starts with us</h1>
        </section>

{/* mission & vision  */}

<section>
<br/>
<h3 className={styles.padding}> MISSION & VISION(COMMITTED TO EXCELLENCE)
 </h3>
 <br/>
 <Container>
<Row>
    <Col md={3}>
        <div className={styles.mission_box}>
        <div className={styles.mission_box_title}>
Our Mission </div>
<div className={styles.mission_card_body}>
    <Image src="/images/mission.png" height="96" width="96" />
  
</div>
<div className={styles.mission_content}>
    Make Technology an asset for your business
    </div>

        </div>
    </Col>
   

    <Col md={3}>
        <div className={styles.mission_box}>
        <div className={styles.mission_box_title}>
Our Vision </div>
<div className={styles.mission_card_body}>
    <Image src="/images/vision.png" height="96" width="96" />
  
</div>
<div className={styles.mission_content}>
Always Innovate for the feature 
    </div>

        </div>
    </Col>

    <Col md={3}>
        <div className={styles.mission_box}>
        <div className={styles.mission_box_title}>
        Quality Policy
 </div>
<div className={styles.mission_card_body}>
    <Image src="/images/values.png" height="96" width="96" />
  
</div>
<div className={styles.mission_content}>
Quality is the Norm and not an afterthought
    </div>

        </div>
    </Col>

    <Col md={3}>
        <div className={styles.mission_box}>
        <div className={styles.mission_box_title}>
        Customer Policy
 </div>
<div className={styles.mission_card_body}>
    <Image  src="/images/policy.png" height="96" width="96" />
  
</div>
<div className={styles.mission_content}>
Customer Policy
    </div>

        </div>
    </Col>


</Row>
 </Container>




</section>
<br/><br/>
<section>
   
   <Container>
       
<h3 className={styles.padding}> MANAGEMENT (OUR FOUNDATION)
 </h3>
       <Row>
           <Col md={9}> 
            
 <p>
 The foundation stone of Inovark Technologies has been laid by our dynamic leader Manikandan Meenakshi Sundaram.
 </p>
 <p>
 With 22+ years of experience in the Technology industry, Mani possesses veteran skills to astutely discover the manifold opportunities to achieve the business objectives & maintain quality.
 </p>
 <p>
 He has worn multiple hats across his journey of work including Entrepreneur, Sales, Business Development, application development, Consultant, Data Architect. He has immense experience in developing wide variety of business applications using Microsoft .NET technologies, Java, Azure, AWS, IOT, ETL etc.
 </p>
 <p>
 His Specialties include building Cloud based solutions and large data management and migration. He has plenty of experience in building solutions for File Sync & Share,
 </p>
 <p>
 Radiology PACS, HIS, IHE Workflow, US Financial and Stock Markets
 </p>
 <p>
 Application Expertise: Cloud Applications, Scalable, High Traffic solutions, Large Data Management, Web, N-Tier Apps, SaaS, Cloud, ETL, APIs, Database Management and Dev Ops
 </p>
           </Col>
           <Col md={3}>
               <Image src="/images/manikandan.jpg" className={styles.person} width="440" height="587" layout="responsive" />
           </Col>
       </Row>
   </Container>

</section>
<br/><br/>
<Footer/>
    </div>
  }
  
  export default About