import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  background-color: #d4d4d4;
  width: 400px;
  border: 4px inset;
  border-color: black;
  margin: 2px;
  transform: skew(-10deg);

  img {
    margin: 3px;
    border: 6px inset;
    border-color: black;
    transition: 250ms;
    filter: grayscale(100%);
  }

  .info_container {
    font-weight: 400px;
    width: 300px;
    margin: 3px;
    border: 7px inset;
    border-color: black;
    background-image: url("./comicTexture.jpg");
    transition: 250ms;
    filter: grayscale(100%);
  }

  .info {
    margin: 3px;
    margin-right: 5px;
    margin-left: 20px;
    transform: skew(10deg);
  }

  button {
    background-color: #d4d4d4;
    border-style: none;
    width: 125px;
    height: 30px;
    cursor: pointer;
    background-image: url("./liquid.png");
    background-repeat: repeat-x;
    background-position: 0 -100%;
    transition: 1s ease;

    :hover {
      transform: scale(102%);
      background-position: center;
    }
  }

  .button_container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: black;
    width: 262px;
    height: 40px;
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    .info_container {
      filter: none;
    }

    img {
      filter: none;
    }
  }
`;

export default CardStyled;
