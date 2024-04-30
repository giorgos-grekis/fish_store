import styles from "./button.module.scss";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}
//  HTMLButtonElement

const Button = ({ content, type = "button" }: ButtonType) => {
  return (
    <button className={`${styles.btn}`} type={type}>
      <>{content}</>
    </button>
  );
};

export default Button;
