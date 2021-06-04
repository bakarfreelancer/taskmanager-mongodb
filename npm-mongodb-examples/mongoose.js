const mongoose = require("mongoose");
const { default: validator } = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const User = new mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error("Email is not valid");
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    validate(value) {
      if (value.includes("password"))
        throw new Error("Password should be strong");
    },
  },
  age: {
    type: Number,
    default: 0,
  },
});

const Task = new mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
const addUser = new User({
  name: "Mickee Joe",
  email: "mickee@Gmail.coM",
  password: "strongpassAdded",
});

// addUser
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const addTask = new Task({
//   description: "To  complete project      ",
// })
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
