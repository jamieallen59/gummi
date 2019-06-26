import styles from './styles.scss'

const BodyCopy = ({ children, className }) => {
  return <p className={`${styles.body} ${className}`}>{children}</p>
}

export default BodyCopy