
firebase.initializeApp({     projectId: "fuckyou-8dbb6"   });    var db = firebase.firestore(); var ref = db.collection('fruit').doc('apple');  function storedata(){     ref.set({     total: 500,     good: 480,     sale: 330     }).then(() => {     console.log('set data successful');     }); }

