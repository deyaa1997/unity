const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/db");

const app = express();

//routers
const signUp = require("./routers/routes/auth/signUp");
const travelPlansRouter = require("./routers/routes/travel_plans");
const login = require("./routers/routes/auth/login");
const friendListRouter = require("./routers/routes/friendList");
const activitiesRouter = require("./routers/routes/activity");
const preferencesRouter = require("./routers/routes/preferences");
const activitiesCommentsRouter= require("./routers/routes/activityComment");

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use("/signUp", signUp);
app.use("/login", login);
app.use("/travelPlans", travelPlansRouter);
app.use("/activities", activitiesRouter);
app.use("/friends", friendListRouter);
app.use("/preferences", preferencesRouter);
app.use("/comment",activitiesCommentsRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
