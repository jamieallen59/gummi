import WhoWeveWorkedWith from '../WhoWeveWorkedWith'

import styles from './styles.scss'

const BodyCopy = ({ children, className }) => {
  return <p className={`${styles.body} ${className}`}>{children}</p>
}

const Title = () => {
  return <h1 className={styles.title}>GUMMI</h1>
}

const SubTitle = () => {
  return <h3 className={styles.subTitle}>Software Design Consultancy</h3>
}

const Technologies = () => {
  return (
    <div className={styles.technologies}>
      <BodyCopy className={styles.techCopy}>
        Specialising in Javascript and associated frontend technologies.
      </BodyCopy>
    </div>
  )
}

const FocusAndIdeas = () => {
  return (
    <div className={styles.focusAndIdeas}>
      <BodyCopy>Code readability and consistency</BodyCopy>
      <BodyCopy>Scalable frontend architechtures</BodyCopy>
      <BodyCopy>Tested code</BodyCopy>
    </div>
  )
}



const Homepage = () => {
  return(
    <div className={styles.wrapper}>
      <Title />
      <SubTitle />
      <Technologies />
      <FocusAndIdeas />
      <WhoWeveWorkedWith />
    </div>
  )
}

export default Homepage