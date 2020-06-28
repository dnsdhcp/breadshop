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
function storedata(Num,Name,Price,img,tag)
{ 
    const numElement = document.getElementById(Num);
    var price = Number($(Price).text().slice(1));
    var r=confirm("確定要購買\n"+$(Name).text()+"\n"+numElement.value+"個，共"+String(price*Number(numElement.value))+"元嗎");
    if (r==true)
    {
            var ref = db.collection('fruit').doc($(Name).text());
            console.log(price);
            ref.get().then(function(doc) {
                if (!doc.exists) {
                    ref.set(
                        {
                            Total: Number(numElement.value),
                            Price: Number(price)*Number(numElement.value),
                            Image: $(img).attr("src"),
                            Tag : tag
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

}
window.onload=function (){
    var ref = db.collection('fruit').orderBy("Price").limit(4)
    var i=4;
    ref.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            $("#rankimg"+String(i)).attr("src",doc.data().Image);
            $("#rank"+String(i)).attr("href","./items.html#"+doc.data().Tag)
            console.log(doc.data().Image);      
            i--;
        });
    })
}