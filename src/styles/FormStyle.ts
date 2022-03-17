import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    display: flex;
    justify-content: center;
    background-color: #d4d4d4;
    margin: 10px;
    border: 5px inset;
    border-color: black;
    padding: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    transform: skew(10deg);
    min-width: 417px;
  }

  .form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 80px;
  }

  .basic-info {
    width: 250px;
    height: 250px;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #d4d4d4;
    border: 5px inset;
    border-color: black;
    text-align: center;
    transform: skew(10deg);

    input {
      width: 200px;
      height: 30px;
      border-style: none;
      border: 5px inset;
      border-color: black;
      text-align: center;
    }
  }

  .stats-info {
    width: 150px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #d4d4d4;
    border: 5px inset;
    border-color: black;
    text-align: center;
    transform: skew(10deg);

    input {
      width: 80px;
      height: 40px;
      border-style: none;
      border: 5px inset;
      border-color: black;
      text-align: center;
    }
  }
`;

export default FormStyled;
