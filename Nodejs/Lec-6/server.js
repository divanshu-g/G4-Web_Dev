const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'mongodb';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('students');

  // the following code examples can be pasted here...
//   const insertResult = await collection.insertMany([{
//     name: "Divanshu",
//     class: "G4",
//     rollNo: 289
// },
// {
//     name: "Pratuuu",
//     class: "G4",
//     rollNo: 609
// },
// {
//     name: "Sussstikkk",
//     class: "G4",
//     rollNo: 882
// },
// {
//     name: "div",
//     class: "G4",
//     rollNo: 567
// },
// {
//     name: "priyanshu",
//     class: "G4",
//     rollNo: 673
// },
// {
//     name: "khusu",
//     class: "G4",
//     rollNo: 678
// }
// ]);

//   console.log('Inserted document =>', insertResult);

// const findResult = await collection.find({}).toArray();
// console.log("Finding", findResult);

// const filterDocs = await collection.find({name: "div"}).toArray();
// console.log(filterDocs);

// const updateRes = await collection.updateOne({name: "divanshu" }, { $set: {name: "garg"} })
// console.log(updateRes);


  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());