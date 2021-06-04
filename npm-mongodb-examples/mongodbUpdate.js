const { MongoClient } = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) return console.log("Error");

    const db = client.db(databaseName);

    // db.collection("users")
    //   .updateOne({ name: "James Bond" }, { $set: { age: 34 } })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log("Error");
    //   });

    db.collection("tasks")
      .updateMany(
        { completed: true },
        {
          $set: {
            completed: false,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
