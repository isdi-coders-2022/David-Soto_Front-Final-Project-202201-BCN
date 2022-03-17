import FormStyled from "../../styles/FormStyle";

const Form = () => {
  return (
    <>
      <FormStyled>
        <h2>Create Hero</h2>
        <div className="form">
          <div className="basic-info">
            <label htmlFor="">Name: </label>
            <input type="text" />
            <label htmlFor="">Alias: </label>
            <input type="text" />
            <label htmlFor="">Creator: </label>
            <input type="text" />
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

      <button>Submit</button>
    </>
  );
};

export default Form;
