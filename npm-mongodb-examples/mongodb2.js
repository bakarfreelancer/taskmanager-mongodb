const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log(
        `Error: Unable to connect to database "${databaseName}".`
      );
    }
    const db = client.db(databaseName);
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "James Bond",
    //       age: 33,
    //     },
    //     {
    //       name: "Smith Shwan",
    //       age: 38,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) return console.log("Error: Unable to add data to database");
    //     console.log(result);
    //   }
    // );

    // ========== INSERTING TASK TO TASKS COLLECTION========
    db.collection("tasks").insertMany(
      [
        {
          description: "Make some food",
          completed: false,
        },
        {
            description: "Complete firewood project",
            completed: true
        },
        {
            description: "Complete building image changing",
            completed: false
        }
      ],
      (error, result) => {
          if(error) return console.log("Error: Unable to insert task to database.");

          console.log(result);
      }
    );
  }
);
