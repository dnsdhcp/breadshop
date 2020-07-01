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

function storedata(Num,Name,Price,img,tag,Size)
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
                    var size=document.getElementById(Size);
                    ref.set(
                        {
                            Total: Number(numElement.value),
                            Price: Number(price)*Number(numElement.value),
                            Image: $(img).attr("src"),
                            Tag : tag,
                            size_8: 0,
                            size_10: 0,
                            size_12: 0,
                            size_14: 0,
                    })
                    if(size.value=="8")   ref.update({size_8: Number(numElement.value)})
                    if(size.value=="10")  ref.update({size_10: Number(numElement.value)})
                    if(size.value=="12")  ref.update({size_12: Number(numElement.value)})
                    if(size.value=="14")  ref.update({size_14: Number(numElement.value)})
                }
                else{
                    var num =doc.data().Total;
                    var Price =doc.data().Price;
                    var size=document.getElementById(Size);
                    ref.update(
                        {
                            Total: Number(num)+Number(numElement.value),
                            Price: (Number(price) * Number(numElement.value)) + Number(Price)
                        }
                        ).then(() => 
                        {     console.log('set data successful');});
                    if(size.value=="8")   ref.update({size_8: doc.data().size_8+Number(numElement.value)})
                    if(size.value=="10")  ref.update({size_10: doc.data().size_10+Number(numElement.value)})
                    if(size.value=="12")  ref.update({size_12: doc.data().size_12+Number(numElement.value)})
                    if(size.value=="14")  ref.update({size_14: doc.data().size_14+Number(numElement.value)})
                }

        });
    }

}
function user()
{
    var account = document.getElementById("account");
    var pwd = document.getElementById("pwd");
    var ref = db.collection('user').doc(account.value);
    ref.get().then(function(doc) {
        if (!doc.exists) {
            ref.set(
                {
                    account: account.value,
                    pwd : pwd.value,
            })
        }
        else{
            r=confirm("已被註冊")
        }
    });
}
function login()
{
    var account = document.getElementById("account");
    var pwd = document.getElementById("pwd");
    var ref = db.collection('user').doc(account.value);
    ref.get().then(function(doc) {
        if (!doc.exists) {
            var accountU =doc.data().account;
            var pwdU =doc.data().pwd;
            // if(account.value)
        }
        else{
            r=confirm("帳號錯誤")
        }
    });
}
window.onload=function (){
    var ref = db.collection('fruit').orderBy("Price","desc").limit(4)
    var i=1;
    ref.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            $("#rankimg"+String(i)).attr("src",doc.data().Image);
            $("#rank"+String(i)).attr("href","./items.html#"+doc.data().Tag)
            console.log(doc.data().Image);      
            i++;
        });
    })
}
