import styles from "./ButtonComponent.module.css";

const ButtonComponent = ({ isOutline, icon, text, ...rest }) => {
  //     console.log(props)
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
            >
      {icon}
      {text}
    </button>
  );
};

export default ButtonComponent;
