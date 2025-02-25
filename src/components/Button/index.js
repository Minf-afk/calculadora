import { ButtonContainer } from "./styles";

const Button = ({label, onclick}) => {
    return (
      <ButtonContainer onclik={onclick}>
          {label}
      </ ButtonContainer>  
    );
  }
  
  export default Button;
  
  