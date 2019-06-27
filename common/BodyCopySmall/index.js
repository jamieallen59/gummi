import styles from './styles.scss'

const BodyCopySmall = ({ children, className }) => {
  return <p className={`${styles.body} ${className}`}>{children}</p>
}

export default BodyCopySmall