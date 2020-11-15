import * as firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  googleAuthProvider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

  export { firebase, googleAuthProvider, database as default };

//   // child_removed
//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   //child_changed
//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   //child_added
//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('yes', snapshot.key, snapshot.val());
//   });

//   database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//       const expenses = [];
      
//       snapshot.forEach((childSnapshot) => {
//           expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//           });
//       });
//       //console.log(expenses);
//   });

//   database.ref('expenses').on('value', (snapshot) => {
//       console.log(snapshot.val());
//   });

//   database.ref('expenses').push({
//     description: 'this is the third description',
//     note: 'note',
//     amount: '543434312',
//     createdAt: '32'
//   });

//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(  snapshot.val().name , 'is a ', snapshot.val().job.title, ' at ',  Object.keys(snapshot.val().job.company)[0]);
//   }, (e) => {
//     console.log("error with data", e);
//   });

//   setTimeout(() => {
//       database.ref('age').set(21);
//   }, 3500);

//   setTimeout(() => {
//     database.ref('age').set(29);
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 11500);

//   database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("this is the error:" , e);
//   });


// database.ref('isSingle').remove().then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });