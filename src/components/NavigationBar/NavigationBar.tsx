import { Link } from "react-router-dom";
import styled, { StyledComponent } from "styled-components";

const NavigationStyled: StyledComponent<"ul", {}> = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  padding: 0;
  border: 4px inset;
  border-color: black;
  height: 80px;
  background-image: url("./dotsBackground.jpg");
  background-size: cover;

  h1 {
    background-color: #d4d4d4;
    transform: skew(-10deg);
    border: 4px inset;
    border-color: black;
    margin: 15px;
    font-family: "Permanent Marker", cursive;
    color: black;
    width: 250px;
  }

  .navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
    margin-left: 20px;
  }

  li {
    background-color: #d4d4d4;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px inset;
    transform: skew(-10deg);
    border-color: black;
    list-style: none;
    height: 50px;
    width: 70px;
    margin-right: 20px;
    margin-left: 20px;
    align-self: center;
    text-align: center;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

const NavigationBar = () => {
  return (
    <>
      <NavigationStyled>
        <div className="navigation">
          <li>
            <Link to="/global-list">Global Hero List</Link>
          </li>
          <li>
            <Link to="/squad">My Hero Squad</Link>
          </li>
          <li>
            <Link to="/hero-form">Create Hero</Link>
          </li>
        </div>
        <h1>Ultra Warriors</h1>
      </NavigationStyled>
    </>
  );
};

export default NavigationBar;
