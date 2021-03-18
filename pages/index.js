import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Navigation from '../components/Nav';
import styles from './Index.module.css'
import Slide from "../components/Slide";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Navigation/>
        <Slide/>
    

    {/* <article>
          <h1 >{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
             
              </li>
            ))}
          </ul>
        </article> */}
    <section>
       
       <div className="text-center">
<h3 className={styles.red} className=" text-uppercase">{title}
</h3>
       </div>
       <Container>
       <HomeContent />
       <Row>
       {cats.map((cat, k) => (
    <Col xs={6} md={4} key={k}>
       <h2>{cat.name}</h2>
                <p>{cat.description}</p>
    </Col>
  
      ))}
  </Row>
  
</Container>
     </section>
   



      </>
    )
  }
}