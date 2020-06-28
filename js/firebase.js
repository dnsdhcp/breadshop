var firebaseConfig = {
    apiKey: "AIzaSyBKTjpCwxTuGDvi0vtoifPL43AteKZA5rM",
    authDomain: "fuckyou-8dbb6.firebaseapp.com",
    databaseURL: "https://fuckyou-8dbb6.firebaseio.com",
    projectId: "fuckyou-8dbb6",
    storageBucket: "fuckyou-8dbb6.appspot.com",
    messagingSenderId: "23394211358",
    appId: "1:23394211358:web:c15e52e078d709877f000f"
  };
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();
  function storedata() {
    db.collection("234324").doc("324324").set({
      name: "新世紀福爾摩斯",
      date: "2010",
      desctiption: "本劇改編自阿瑟·柯南·道爾爵士家喻戶曉的推理小說，一位脾氣古怪的大偵探在現代倫敦的街頭悄悄巡行，四處搜尋線索。",
      actors: ["班尼迪克·康柏拜區", "馬丁·費曼"]
    });
  }