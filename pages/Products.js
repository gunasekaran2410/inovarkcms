import Navigation from '../components/Nav';
import styles from './Index.module.css'
import Head from "next/head";
import Image from 'next/image'
import Container from 'react-bootstrap/Container'

import Footer from '../components/Footer';

function Products() {
    return <div>
         <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Navigation/>
      
        <section className={styles.product_bnr}>
        <h1>OUR PRODUCTS</h1>
        </section>
        <section>
         <br/>
         <Container>
         <div className={styles.text_center}>
<Image src="/images/product/isafe.png" width="300" height="100" />
            </div>
            <p className={styles.product_content}>
            Our mobile based apps connect schools, teachers and parents. Always be connected to your children’s school and teachers, need to talk to teachers, setup a meeting, no problem. Do it all here, keep yourself informed on happenings at the school. Don’t miss out any events, Notify school activities, celebration and events. Share photos, audio and video. One clicks homework broadcast message to parents and students. Be informed about your kids journey from home to school and back.
                 </p>
                 <div className={styles.text_center}>
<Image src="/images/product/isafe Connect.jpg" width="910" height="553" />
            </div>
         </Container>
        </section>
        <section>
      <Container>
      <div className={styles.text_center}>
<Image src="/images/product/atrial_rhythm.png" width="200" height="11" />
            </div>
            <p className={styles.product_content}>
            Nature of this app is to connecting healthcare providers and patients. Get instant actionable push notifications for appointments, changes, wait times and messages. Manage your appointments on the go. Instantly schedule, re-schedule them. View appointments for your clinic or only you. Get quick answers from your healthcare provider through instant messaging. When coming to healthcare providers, Manage your practice on the go. Connect with doctors in your practice or outside. Instantly connect and notify patients of changes in appointments.
                </p>
                <div className={styles.text_center}>
<Image src="/images/product/atrial plus.jpg" width="910" height="553" />
            </div>
      </Container>
        </section>
        <br/>
        <Footer/>
    </div>
  }
  
  export default Products