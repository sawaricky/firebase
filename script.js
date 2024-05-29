// Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import {
    getDatabase,
    ref,
    child,
    get,
    onValue,
 } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBKcEzqEj5KHwUxF8h1oPvyg82MZO4Rxcs",
    authDomain: "humber-sandbox-cd17c.firebaseapp.com",
    // databaseURL: "https://humber-sandbox-cd17c-default-rtdb.firebaseio.com",
    projectId: "humber-sandbox-cd17c",
    storageBucket: "humber-sandbox-cd17c.appspot.com",
    messagingSenderId: "573257265680",
    appId: "1:573257265680:web:53b6a0c78a2fc8ab879095",
    // measurementId: "G-1EQ4FKJ2PG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   calling the database
  const database = getDatabase();
  const messages = ref(database, "messages");

//   referencing to check data is working in the database
  onValue(messages, (snapshot) => {
    // console.log(snapshot)

    // referendinc tthe values form the defined databse above 
    const ul = document.getElementById("messages");

    ul.replaceChildren();

    snapshot.forEach((childSnapShot) =>{
        // loggin the infomration from the database
        console.log(childSnapShot.key);
        console.log(childSnapShot.val());

        const childData = childSnapShot.val();

        // const text = document.createTextNode(childData.message);
        const text = document.createTextNode(childData.message + "~" + childData.name);

        const li = document.createElement("li")

        li.appendChild(text)
        // li.appendChild(firstName)
        ul.appendChild(li)
    })
  })

//   const analytics = getAnalytics(app);

