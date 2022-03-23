import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { createHeroThunks } from "../../redux/thunks/thunks";
import FormStyled from "../../styles/FormStyled";
import CreatedHero from "../../interfaces/CreatedHero";

const Form = () => {
  const blankFields: CreatedHero = {
    name: "",
    alias: "",
    creator: "",
    powerstats: {
      intelligence: 0,
      strength: 0,
      speed: 0,
      durability: 0,
      power: 0,
      combat: 0,
    },
  };

  const [formData, setFormData] = useState(blankFields);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      dispatch(createHeroThunks(formData));
      navigate("/squad");
    } catch (error) {}
  };

  const changeData = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <FormStyled noValidate autoComplete="off" onSubmit={onSubmit}>
        <h2>Create Hero</h2>
        <div className="container">
          <div className="first-column">
            <div className="form">
              <div className="basic-info">
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  autoComplete="off"
                  id="name"
                  onChange={changeData}
                  value={formData.name}
                />
                <label htmlFor="alias">Alias: </label>
                <input
                  type="text"
                  autoComplete="off"
                  id="alias"
                  onChange={changeData}
                  value={formData.alias}
                />
                <label htmlFor="creator">Creator: </label>
                <input
                  type="text"
                  autoComplete="off"
                  id="creator"
                  onChange={changeData}
                  value={formData.creator}
                />
              </div>
            </div>
            <div className="button-container">
              <button>Submit</button>
            </div>
          </div>
          <div className="stats-info">
            <label htmlFor="intelligence">Intelligence</label>
            <input
              type="number"
              autoComplete="off"
              id="intelligence"
              onChange={changeData}
              value={formData.powerstats.intelligence}
            />
            <label htmlFor="strength">Strength</label>
            <input
              type="number"
              autoComplete="off"
              id="strength"
              onChange={changeData}
              value={formData.powerstats.strength}
            />
            <label htmlFor="speed">Speed</label>
            <input
              type="number"
              autoComplete="off"
              id="speed"
              onChange={changeData}
              value={formData.powerstats.speed}
            />
            <label htmlFor="durability">Durability</label>
            <input
              type="number"
              autoComplete="off"
              id="durability"
              onChange={changeData}
              value={formData.powerstats.durability}
            />
            <label htmlFor="power">Power</label>
            <input
              type="number"
              autoComplete="off"
              id="power"
              onChange={changeData}
              value={formData.powerstats.power}
            />
            <label htmlFor="combat">Combat</label>
            <input
              type="number"
              autoComplete="off"
              id="combat"
              onChange={changeData}
              value={formData.powerstats.combat}
            />
          </div>
        </div>
      </FormStyled>
    </>
  );
};

export default Form;
