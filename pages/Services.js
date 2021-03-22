import Navigation from '../components/Nav';
import styles from './Index.module.css'
import Head from "next/head";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import Footer from '../components/Footer';

function Services() {
    return <div>
           <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Navigation/>

        <section className={styles.services_bnr}>
        <h1>OUR PRODUCTS</h1>
        </section>

<section>
<br/>
    <Container>
        <div className={styles.service_card}> 
<Row>
    <Col md={5}>
        <div className={styles.service_title}>
        PRODUCT DEVELOPMENT
        </div>
        <p className={styles.service_content}>
        We make your Idea's into a Product. An idea is a seed. For it to become a Product, it needs to be visualized, clarified, developed, deployed and maintained. This is a long road and we walk with our customers to make sure the end goal is achieved. With our knowledge and experience in different business verticals and technical, we help achieve their product needs.
        </p>
    </Col>
    <Col md={7}>
        <Image src="/images/product/Product-Design-Services-.png" width="1000" height="632" />
    </Col>
</Row>
        </div>
    </Container>
</section>


<section>
<br/>
    <Container>
        <div className={styles.service_card}> 
<Row>
   
    <Col md={7}>
        <Image src="/images/product/mobileapp_develpment.jpg" width="1000" height="632" />
    </Col>
    <Col md={5}>
        <div className={styles.service_title}>
        MOBILE APP DEVELOPMENT

        </div>
        <p className={styles.service_content}>
        Mobile apps are the need of the hour. It is not just the part of developing the app, but as to what needs to be developed. A concrete mobile strategy involves understanding the usage patterns of the user to provide what it needs. We work with our customers to create a strategy for them to have a successful mobile app business.
        </p>
    </Col>
</Row>
        </div>
    </Container>
</section>


<section>
<br/>
    <Container>
        <div className={styles.service_card}> 
<Row>
<Col md={5}>
        <div className={styles.service_title}>
        CLOUD COMPUTING


        </div>
        <p className={styles.service_content}>
        Cloud computing enables organizations to utilize the power of Internet and lower their costs. With our technical acumen in cloud platforms and vendors like Amazon AWS, Microsoft Azure, Google Cloud etc., we work with organizations to come up with a cloud migration strategy and help them achieve the same.
        </p>
    </Col>
    <Col md={7}>
        <Image src="/images/product/cloud.png" width="469" height="360" />
    </Col>
 
</Row>
        </div>
    </Container>
</section>



<section>
<br/>
    <Container>
        <div className={styles.service_card}> 
<Row>

    <Col md={7}>
        <Image src="/images/product/quality-assurance.png" width="597" height="425" />
    </Col>
    <Col md={5}>
        <div className={styles.service_title}>
        QUALITY ASSURANCE
        </div>
        <p className={styles.service_content}>
        Product sustainably and usage depends on quality process and bug free code. Our well-defined testing process and quality assurance team helps defining and creating testing strategy during the planning stages of the work. Product areas for automation and manual testing are defined much earlier in the software development cycle. Our emphasis on automating testing for mobile and web applications, catches most of our bugs much earlier in the development cycle resulting in a bug-free product.
        </p>
    </Col>
 
</Row>
        </div>
    </Container>
</section>



<section>
<br/>
    <Container>
        <div className={styles.service_card}> 
<Row>

   
    <Col md={5}>
        <div className={styles.service_title}>
        DEVELOPMENT OPERATIONS
        </div>
        <p className={styles.service_content}>
        We work with organizations for their IT Services needs. The IT services typically are to maintain websites, servers, databases, maintain source code, build CI/CD processes, automate builds, containerize applications, deploying to cloud. We do all of this while working towards shortening the release cycle and making it more efficient to have a continuous development of the product.
        </p>
    </Col>
    <Col md={7}>
        <Image src="/images/product/develop.png" width="1280" height="720" />
    </Col>

</Row>
        </div>
    </Container>
</section>


<section>
<br/>
    <Container>
        <div className={styles.service_card}> 
<Row>

   
   
    <Col md={7}>
        <Image src="/images/product/research_development.jpg" width="1900" height="678" />
    </Col>
    <Col md={5}>
        <div className={styles.service_title}>
        RESEARCH & DEVELOPMENT
        </div>
        <p className={styles.service_content}>
        We work with AI, Machine Learning, Computer Vision, Augmented Reality using mobile apps for research and development. We use the above to push the boundaries of traditional apps and see where we can work with our customers to help support them with their product needs.
        </p>
    </Col>

</Row>
        </div>
    </Container>
</section>

<br/>

<Footer/>

    </div>
  }
  
  export default Services