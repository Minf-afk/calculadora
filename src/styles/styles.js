import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ isDarkMode }) => (isDarkMode ? "#333" : "linear-gradient(135deg, #e2e2e2, #c9c9c9)")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#444" : "#fff")};
  width: 25%;
  min-height: 400px;
  border: 1px solid ${({ isDarkMode }) => (isDarkMode ? "#555" : "#ddd")};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  & > * {
    margin: 5px;
  }
`;

export const DarkModeButton = styled.button`
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#555" : "#ddd")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
  border: none;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ isDarkMode }) => (isDarkMode ? "#666" : "#ccc")};
  }
`;