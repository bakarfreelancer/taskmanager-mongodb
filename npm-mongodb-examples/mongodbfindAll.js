const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) return console.log("Unable to connect to database.");
    const db = client.db(databaseName);

    db.collection("tasks").findOne(
      { _id: new ObjectID("609ad627b750c7cca33614b3") },
      (error, result) => {
        if (error) return console.log("Unable to get data");
        console.log(result);
      }
    );

    // db.collection("tasks")
    //   .find({ completed: true })
    //   .toArray((error, result) => {
    //     if (error) return console.log("Unable to get data");
    //     console.log(result);
    //   });
  }
);
