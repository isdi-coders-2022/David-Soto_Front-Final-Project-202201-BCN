import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d4d4d4;
  margin: 10px;
  border: 5px inset;
  border-color: black;
  padding-bottom: 10px;
  transform: skew(-10deg);
  margin-left: 100px;
  margin-right: 100px;

  .container {
    display: flex;
    flex-direction: row;
  }

  .first-column {
    display: flex;
    flex-direction: column;
  }

  h2 {
    background-image: url("blueTexture.jpg");
    background-size: cover;
    display: flex;
    justify-content: center;
    background-color: #d4d4d4;
    margin: 10px;
    border: 5px inset;
    border-color: black;
    padding: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    min-width: 417px;
  }

  .form {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .basic-info {
    background-image: url("comicTexture.jpg");
    width: 250px;
    height: 250px;
    margin-right: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #d4d4d4;
    border: 5px inset;
    border-color: black;
    text-align: center;

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
    background-image: url("blueTexture.jpg");
    background-size: cover;
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

    input {
      width: 80px;
      height: 40px;
      border-style: none;
      border: 5px inset;
      border-color: black;
      text-align: center;
    }
  }

  .button-container {
    background-image: url("./rotateBackground.webp");
    background-position: center;
    background-color: transparent;
    border-style: none;
    border: 5px inset;
    border-color: black;
    width: 250px;
    height: 233px;
    margin-top: 7px;
    position: relative;
    overflow: hidden;

    :hover {
      background-image: none;

      :before {
        content: "";
        position: absolute;
        background-position: center;
        width: 525px;
        height: 354px;
        top: -26%;
        left: -54%;
        z-index: -1;
        background: url("./rotateBackground.webp");
        background-size: 100%;
        animation: rotation 5s infinite linear;
      }
    }
  }

  button {
    background-color: transparent;
    background-image: url("./ballon.png");
    background-size: 100%;
    border-style: none;
    width: 231px;
    height: 233px;
    cursor: pointer;
    position: relative;
    right: -13px;
    transition: 0.5s;

    :hover {
      font-size: xx-large;
      filter: drop-shadow(5px 5px 5px black);
    }
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  label {
    background-color: #e9e9e9;
    border: 4px inset;
    border-color: black;
    border-bottom: none;
    margin-top: 2px;
    transform: skew(-5deg);
  }
`;

export default FormStyled;
