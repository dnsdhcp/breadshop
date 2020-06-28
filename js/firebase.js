firebase.initializeApp(
    {     
        projectId: "breadshop-e8dea"
    }
);    
var db = firebase.firestore();
function print_value(textview,Size,Price)
{
    Size=Number(document.getElementById(Size).value)-8;
    var price = Price+Size*50;
    var obj = document.getElementById(textview);
    obj.innerText= '$'+String(price);
}
function storedata(Num,Name,Price)
{ 
    const numElement = document.getElementById(Num);
    var ref = db.collection('fruit').doc($(Name).text());
    var price = Number($(Price).text().slice(1));
    console.log(price);
    ref.get().then(function(doc) {
        if (!doc.exists) {
            ref.set(
                {
                    Total: Number(numElement.value),
                    Price: Number(price)*Number(numElement.value),
            })
        }
        else{
            var num =doc.data().Total;
            var Price =doc.data().Price;
            ref.update(
                {
                    Total: Number(num)+Number(numElement.value),
                    Price: (Number(price) * Number(numElement.value)) + Number(Price)
                }
                ).then(() => 
                {     console.log('set data successful');});
        }
    });

}