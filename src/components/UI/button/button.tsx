import styles from "./button.module.scss";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  className?: string;
}
//  HTMLButtonElement

const Button = ({ content, className, type = "button" }: ButtonType) => {
  return (
    <button className={`${styles.btn} ${className}`} type={type}>
      <>{content}</>
    </button>
  );
};

export default Button;
