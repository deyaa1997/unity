import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Perferences.css"
import axios from "axios";

const AddPerferences = () => {
  const [location, setLocation] = useState("");
  const [start_date, setStart_date] = useState("");
  const [finish_date, setFinish_date] = useState("");
  const [activities, setActivities] = useState("");
  const [similar_age, setSimilar_age] = useState("");
  const [same_gender, setSame_gender] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const addNewPerferences = () => {
    axios
      .post(`http://localhost:5000/preferences/`, {
        location,
        start_date,
        finish_date,
        activities,
        similar_age,
        same_gender,
        user_id: 1,
      })
      .then((result) => {
        console.log("res", result.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <>
      <div className="Perferences">
        <label>Location : </label>
        <input
          type="text"
          placeholder="location here"
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Start Date : </label>
        <input type="date" onChange={(e) => setStart_date(e.target.value)} />
        <label>Finish Date : </label>

        <input type="date" onChange={(e) => setFinish_date(e.target.value)} />
        <label>Activities : </label>


        <textarea onChange={(e) => setActivities(e.target.value)} placeholder=" activities here"></textarea>
        <form>
          <label>same gender : </label>
          <input
            onChange={() => {
              setSame_gender(1);
            }}
            name="Gender"
            id="same"
            type="radio"
            value="1"
          />
          <label htmlFor="same">Yes</label>
          <input
            onChange={() => {
              setSame_gender(0);
            }}
            name="Gender"
            id="notSame"
            type="radio"
            value="0"
          />
          <label htmlFor="notSame">No</label>
        </form>

        <form>
          <label>similar age : </label>

          <input
            onChange={() => {
              setSimilar_age(1);
            }}
            name="Age"
            id="same"
            type="radio"
            value="1"
          />
          <label htmlFor="same">Yes</label>
          <input
            onChange={() => {
              setSimilar_age(0);
            }}
            name="Age"
            id="notSame"
            type="radio"
            value="0"
          />
          <label htmlFor="notSame">No</label>
        </form>

        <button onClick={addNewPerferences}>create Perferences</button>
      </div>
    </>
  );
};

export default AddPerferences;
