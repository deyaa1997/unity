import React, { useState } from "react";
import { useHistory, Link, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PerferencesLocation from "../Api/perferencesLocation";
import "./Perferences.css"
import axios from "axios";

const AddPerferences = () => {
  const [location, setLocation] = useState("");
  const [start_date, setStart_date] = useState("");
  const [finish_date, setFinish_date] = useState("");
  const [activities, setActivities] = useState("");
  const [similar_age, setSimilar_age] = useState(0);
  const [same_gender, setSame_gender] = useState(0);
  const [prefenecesLocation, setPrefenecesLocation] = useState("")

  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      id: state.id.id,
    };
  });
  console.log("id state", state.id)

  const addNewPerferences = () => {
    setLocation(prefenecesLocation)
    axios
      .post(`http://localhost:5000/preferences/`, {
        location,
        start_date,
        finish_date,
        activities,
        similar_age,
        same_gender,
        user_id: state.id,
      })
      .then((result) => {
        console.log("res", result.data);
        setSame_gender(0)
        setSimilar_age(0)
        history.push("/login");
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <>
      <div className="Perferences">
        <label>desired travel location : </label>
        < PerferencesLocation setPrefenecesLocation={setPrefenecesLocation} />
        test:   {prefenecesLocation}
        {/* {} */}
        <label>availability to travel</label>
        <div>
          <label>Start Date : </label>
          <input type="date" onChange={(e) => setStart_date(e.target.value)} />
          <label>Finish Date : </label>

          <input type="date" onChange={(e) => setFinish_date(e.target.value)} />
          <label>Activities : </label>
        </div>

        <textarea onChange={(e) => setActivities(e.target.value)} placeholder=" activities here"></textarea>

        <form action="/action_page.php">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="1" onChange={() => {

            setSame_gender(1);
          }} />
          <label for="vehicle1"> same gender</label>

        </form>

        <form action="/action_page.php">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="1" onChange={() => {
            setSimilar_age(1);
          }} />
          <label for="vehicle1"> same Age</label>
        </form>

        <button onClick={addNewPerferences}>create Perferences</button>
        <Link to="/login">Skip</Link>
      </div>
    </>
  );
};

export default AddPerferences;
