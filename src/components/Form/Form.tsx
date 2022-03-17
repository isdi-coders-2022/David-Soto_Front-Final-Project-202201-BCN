import FormStyled from "../../styles/FormStyle";

const Form = () => {
  return (
    <>
      <FormStyled>
        <h2>Create Hero</h2>
        <div className="container">
          <div className="first-column">
            <div className="form">
              <div className="basic-info">
                <label htmlFor="">Name: </label>
                <input type="text" />
                <label htmlFor="">Alias: </label>
                <input type="text" />
                <label htmlFor="">Creator: </label>
                <input type="text" />
              </div>
            </div>
            <div className="button-container">
              <button>Submit</button>
            </div>
          </div>
          <div className="stats-info">
            <label htmlFor="">Intelligence</label>
            <input type="number" />
            <label htmlFor="">Strength</label>
            <input type="number" />
            <label htmlFor="">Speed</label>
            <input type="number" />
            <label htmlFor="">Durability</label>
            <input type="number" />
            <label htmlFor="">Power</label>
            <input type="number" />
            <label htmlFor="">Combat</label>
            <input type="number" />
          </div>
        </div>
      </FormStyled>
    </>
  );
};

export default Form;
