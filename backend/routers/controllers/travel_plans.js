const db = require("../../db/db");

const createTravelPlans = (req, res) => {
  const query = `INSERT INTO travel_plans (title, start_date, finish_date , countries , activities , requirements , details , images , estimated_budget) VALUES (?, ?, ?, ?, ?, ?, ?, ? , ?)`;
  const {
    title,
    start_date,
    finish_date,
    countries,
    activities,
    requirements,
    details,
    images,
    estimated_budget,
  } = req.body;
  const data = [
    title,
    start_date,
    finish_date,
    countries,
    activities,
    requirements,
    details,
    images,
    estimated_budget,
  ];
  db.query(query, data, (err, results) => {
    if (err) throw err;
    res.status(201);
    res.json("added complete");
  });
};

const getAllTravelPlans = (req, res) => {
  const query = `SELECT * FROM travel_plans`;
  db.query(query, (err, results) => {
    if (err) throw err;
    res.status(200);
    res.json(results);
  });
};

const getTravelPlansById = (req, res) => {
  const query = `SELECT * FROM travel_plans WHERE id=?`;
  const data = req.params.id;
  db.query(query, data, (err, results) => {
    if (err) throw err;
    res.status(200);
    res.json(results);
  });
};

const updateTravelPlansById = (req, res) => {
  const query = `UPDATE travel_plans SET title = ? , start_date = ? , finish_date = ? , countries = ? , activities = ? , requirements = ? , details = ? , images = ? , estimated_budget = ? WHERE id=?`;
  const {
    title,
    start_date,
    finish_date,
    countries,
    activities,
    requirements,
    details,
    images,
    estimated_budget,
  } = req.body;
  const data = [
    title,
    start_date,
    finish_date,
    countries,
    activities,
    requirements,
    details,
    images,
    estimated_budget,
    req.params.id,
  ];
  db.query(query, data, (err, results) => {
    if (err) throw err;
    res.status(202);
    res.json(results);
  });
};

const deleteTravelPlansById = (req, res) => {
  const query = `Delete FROM travel_plans  WHERE id=?`;
  const data = req.params.id;
  db.query(query, data, (err, results) => {
    if (err) throw err;
    res.status(202);
    res.json(results);
  });
};

const joinTravelPlaneById = (req, res) => {
  const plan_id = req.params.id;
  const user_id = req.body.user_id;
  const query = `INSERT INTO plan_members (user_id,plan_id) VALUES (?,?)`;
  const data = [user_id, plan_id];

  db.query(query, data, (err, result) => {
    if (result) res.status(200).json("Travel Plans Joined Successfully !");
    else res.status(400).json("ERROR OCCURRED.. !");
  });
};

module.exports = {
  createTravelPlans,
  getAllTravelPlans,
  getTravelPlansById,
  updateTravelPlansById,
  deleteTravelPlansById,
  joinTravelPlaneById
};
