import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #e2e2e2, #c9c9c9);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #fff;
  width: 25%;
  min-height: 200px;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  & > * {
    margin: 5px;
  }
`;