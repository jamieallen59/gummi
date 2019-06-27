import Head from 'next/head'
import { BodyCopy, BodyCopySmall } from '../../common'

import styles from './styles.scss'

const Title = () => {
  return <h1 className={styles.title}>Gummi</h1>
}

const SubTitle = () => {
  return <h3 className={styles.subTitle}>Software Engineering Consultancy</h3>
}

const Technologies = () => {
  return (
    <div className={styles.technologies}>
      <BodyCopy className={styles.techCopy}>
        Specialising in JavaScript and associated frontend technologies.
      </BodyCopy>
    </div>
  )
}

const Footer = () => {
  return (
    <div className={styles.footer}>
      <BodyCopySmall className={styles.attribution}>
        Icon made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> and is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
      </BodyCopySmall>
      <BodyCopySmall className={styles.footerCopy}>
        Registered in England & Wales No: 11531499
      </BodyCopySmall>
    </div>
  )
}

const GetInTouch = () => {
  return (
    <div className={styles.getInTouch}>
      <a href="mailto:jamieallen59@gmail.com" className={styles.emailLink}>
        <img className={styles.businessCard} src='/static/business-card.png' />
        <BodyCopy>Get in touch</BodyCopy>
      </a>
    </div>
  )
}

const Helmet = () => {
  return (
    <Head>
      <title>Gummi</title>
      <meta 
        name="viewport" 
        content="initial-scale=1.0, width=device-width"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
      <link rel="manifest" href="/static/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c"></meta>
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  )
}

const Homepage = () => {
  return(
    <>
      <Helmet />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Title />
          <SubTitle />
          <Technologies />
          <GetInTouch />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Homepage