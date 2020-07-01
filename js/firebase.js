firebase.initializeApp(
    {     
        projectId: "breadshop-e8dea"
    }
);    
var db = firebase.firestore();
var allCookies
function print_value(textview,Size,Price)
{
    Size=Number(document.getElementById(Size).value)-8;
    var price = Price+Size*50;
    var obj = document.getElementById(textview);
    obj.innerText= '$'+String(price);
}

function storedata(Num,Name,Price,img,tag,Size)
{ 
    allCookies = document.cookie;
    console.log(allCookies);
    if(allCookies!=null)
    {
        const numElement = document.getElementById(Num);
        var price = Number($(Price).text().slice(1));
        var r=confirm("確定要購買\n"+$(Name).text()+"\n"+numElement.value+"個，共"+String(price*Number(numElement.value))+"元嗎");
        if (r==true)
        {
                var ref = db.collection('Total').doc($(Name).text());
                console.log(price);
                ref.get().then(function(doc) {
                    if (!doc.exists) {
                        var size=document.getElementById(Size);
                        ref.set(
                            {
                                Name : $(Name).text(),
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
                var ref2 = db.collection(allCookies).doc($(Name).text());
                    console.log(price);
                    ref2.get().then(function(doc) {
                        if (!doc.exists) {
                            var size=document.getElementById(Size);
                            ref2.set(
                                {
                                    Name : $(Name).text(),
                                    Total: Number(numElement.value),
                                    Price: Number(price)*Number(numElement.value),
                                    Image: $(img).attr("src"),
                                    Tag : tag,
                                    size_8: 0,
                                    size_10: 0,
                                    size_12: 0,
                                    size_14: 0,
                            })
                            if(size.value=="8")   ref2.update({size_8: Number(numElement.value)})
                            if(size.value=="10")  ref2.update({size_10: Number(numElement.value)})
                            if(size.value=="12")  ref2.update({size_12: Number(numElement.value)})
                            if(size.value=="14")  ref2.update({size_14: Number(numElement.value)})
                            console.log('加入購物車');
                        }
                        else{
                            var num =doc.data().Total;
                            var Price =doc.data().Price;
                            var size=document.getElementById(Size);
                            ref2.update(
                                {
                                    Total: Number(num)+Number(numElement.value),
                                    Price: (Number(price) * Number(numElement.value)) + Number(Price)
                                }
                                ).then(() => 
                                {     console.log('加入購物車');});
                            if(size.value=="8")   ref2.update({size_8: doc.data().size_8+Number(numElement.value)})
                            if(size.value=="10")  ref2.update({size_10: doc.data().size_10+Number(numElement.value)})
                            if(size.value=="12")  ref2.update({size_12: doc.data().size_12+Number(numElement.value)})
                            if(size.value=="14")  ref2.update({size_14: doc.data().size_14+Number(numElement.value)})
                        }

                });
        }
    }
}
function buy(Num,Name,Price,img,tag,Size)
{
    allCookies = document.cookie;
    console.log(allCookies);
    if(allCookies!=null)
    {
        const numElement = document.getElementById(Num);
        var price = Number($(Price).text().slice(1));
        var r=confirm("確定要購買\n"+$(Name).text()+"\n"+numElement.value+"個，共"+String(price*Number(numElement.value))+"元嗎");
        if (r==true)
        {
                var ref = db.collection('Total').doc($(Name).text());
                console.log(price);
                ref.get().then(function(doc) {
                    if (!doc.exists) {
                        var size=document.getElementById(Size);
                        ref.set(
                            {
                                Name : $(Name).text(),
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
            window.alert("已被註冊") 
        }
    });
}
function login()
{
    var account = document.getElementById("account");
    var pwd = document.getElementById("pwd");
    var ref = db.collection('user').doc(account.value);

    ref.get().then(function(doc) {
        if (doc.exists) {
            var accountU =doc.data().account;
            var pwdU =doc.data().pwd;
            if(String(account.value) == accountU && String(pwd.value) == pwdU) {
                window.alert("登入成功") ;
                document.cookie = account.value;
                $("#popup").fadeOut('fast');
                window.location.reload("#");
            }
            else window.alert("密碼錯誤") 
        }
        else{
            window.alert("帳號錯誤") 
        }
    });
}
window.onload=function (){
    var ref = db.collection('Total').orderBy("Price","desc").limit(4)
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
    allCookies = document.cookie;
    console.log(allCookies);
    if(allCookies !="null") document.getElementById("login").innerHTML="登出";
    else document.getElementById("login").innerHTML="登入";
}
window.onload=function (){
    allCookies = document.cookie;
    var ref = db.collection(allCookies);
    var i = 1;
    ref.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            $("#product"+String(i)).attr("src",doc.data().Image);
            document.getElementById("count" +String(i)).innerHTML = doc.data().Total;
            document.getElementById("name" +String(i)).innerHTML = doc.data().Name;
            document.getElementById("price" +String(i)).innerHTML = doc.data().Price;
            // $("#rank"+String(i)).attr("href","./items.html#"+doc.data().Tag)
            console.log(doc.data().Image);    
            i++;
            console.log(i);
            var j = i;
            for(;j<=11;j++){
                $("#item" + String(j)).fadeOut('fast')
            }
            for(var a = 1 ; a <i; a++){
                $("#item" + String(a)).fadeIn('fast')
            }
        });
    })
    allCookies = document.cookie;
    console.log(allCookies);
    if(allCookies =="null"){
     for(var b = 1; b<= 11; b++)
        {
            $("#item" + String(b)).fadeOut('fast')
        }
    }
    
    if(allCookies !="null") document.getElementById("login").innerHTML="登出";
    else document.getElementById("login").innerHTML="登入";
}
$(function(){
    allCookies = document.cookie;
    if(document.cookie=="null"){
    $("#login").click(function(){
        $("#popup").fadeIn('fast')
     })
    $(".cross").click(function(){
       $("#popup").fadeOut('fast')
    })
    $(".closebutton").click(function(){
       $("#popup").fadeOut('fast')
    })
    $(".goquestion").click(function(){
       $("#popup").fadeOut('fast')
    })
    }
    else
    {
        $("#login").click(function(){
            document.cookie = "null";
            allCookies = document.cookie;
            window.alert("登出成功") ;
            console.log(allCookies);
            window.location.reload("#");
         })
    }
});
