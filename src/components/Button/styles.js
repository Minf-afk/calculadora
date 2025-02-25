import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 20%;
  height: 60px;
  padding: 0 15px;
  background-color: rgb(204, 141, 47);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;
  margin-top: 2px;
  flex: 1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: rgb(184, 121, 27);
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: rgb(164, 101, 7);
    transform: translateY(0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;