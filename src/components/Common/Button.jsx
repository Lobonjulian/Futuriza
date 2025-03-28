import styles from "./styles.module.css"

const Button = ({className, onClick, onChange, text = "Descargar"}) => {
  return (
    <button className={`${className} ${styles.button}`} onClick={onClick} onChange={onChange}>{text}</button>
  )
}

export default Button