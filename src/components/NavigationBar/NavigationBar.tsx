import { Link } from "react-router-dom";
import styled, { StyledComponent } from "styled-components";

const NavigationStyled: StyledComponent<"ul", {}> = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #242424;
  margin: 0;
  padding: 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  h1 {
    margin-right: 20px;
  }

  .navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
    margin-left: 20px;
  }

  li {
    list-style: none;
    margin-right: 20px;
    margin-left: 20px;
    align-self: center;
  }

  a {
    background-color: yellow;
    border-radius: 33px;
    align-content: center;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 6px;
    padding-bottom: 6px;
    text-align: center;
    color: Blue;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
            <Link to="/friends">Friends</Link>
          </li>
        </div>
        <h1>Ultra Warriors</h1>
      </NavigationStyled>
    </>
  );
};

export default NavigationBar;
