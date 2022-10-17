import { initializeApp, cert } from "firebase-admin/app";
import {getFirestore} from 'firebase-admin/firestore'
import serviceAccount from './serviceAccount.js';

initializeApp({

    credential:cert(serviceAccount)
});
const db = getFirestore();

// db.collection("Customers").add({
//     firstname: "Eli",
//     lastname: "Fischer",
//     onerNum: "222",
    
// })

 db.collection("Customers").doc('3rB9sbdpq8FP2UPof92C').get()
.then(doc => console.log(doc.data()))
.catch(console.error)

// db.collection("Pets")
// .where ("name", "==", "Zoe")
// .get()
// .then(collection => {
//     collection.docs.forEach(doc => {
//     let pet = doc.data()
//     pet.id = doc.id
//     console.log(pet)
// })
// })
// db.collection('Pets').get()
//      //reshepe the collection
// .then(collection => {
//     collection.docs.forEach(doc => {
//     console.log(doc.id, doc.data())
//     })
// })
// .catch(console.error)

// function getPets(){
//     db.collection("Pets").doc("SoFU043eI6e4chV3seKv").get()
//     .then(doc => console.log(doc.data))
//     .catch(console.error)
// }

// db.collection("Pets")
// .doc("SoFU043eI6e4chV3seKv")
// .update({name: "Bella", gender: "F"})
// .then(() => console.log(getPets()))
// .catch(console.error)
