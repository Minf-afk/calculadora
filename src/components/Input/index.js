import { InputContainer, Placeholder } from "./styles";

const Input = ({value}) => {
  return (
    <InputContainer>
      <Placeholder disabled value={value} />
    </InputContainer>
  );
};

export default Input;

