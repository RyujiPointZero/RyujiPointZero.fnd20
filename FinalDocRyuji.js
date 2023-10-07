const member1 = document.getElementById("n1");
const mask = document.getElementById("mask");
const modal = document.getElementById("modal");
const office = document.getElementById("inOffice");//出社の取得
const plant = document.getElementById("atplant");//現場の取得
const home = document.getElementById("goHome");//退社の取得
const house = document.getElementById("inHouse");//在宅の取得
const trip = document.getElementById("businessTrip");//出張の取得
const holiday = document.getElementById("Paidholiday");//年休の取得
const templeave = document.getElementById("leave");//離業の取得

//【勤怠登録】画面表示(ブラックアウトする)
    member1.addEventListener("click",() =>{
    mask.classList.remove("hidden");
    modal.classList.remove("hidden");
});
//登録操作
const name1 = document.getElementsByClassName("Name1");
console.log(name1);
//↓出勤
office.addEventListener("click",() =>{
    member1.style.background="rgb(0, 115, 255)";
    window.alert("登録完了");
    })
//↓現場
plant.addEventListener("click",() =>{
    member1.style.background="orange";
    member1.style.color="red";
    window.alert("登録完了");
    })
//↓退社
home.addEventListener("click",() =>{
    member1.style.background="rgb(255, 0, 55)";
    member1.style.color="white";
    window.alert("登録完了");
    })

//↓在宅
house.addEventListener("click",() =>{
    member1.style.background="rgb(0, 255, 140)";
    member1.style.color="black";
    window.alert("登録完了");
    })

//↓出張
trip.addEventListener("click",() =>{
    member1.style.background="rgb(61, 77, 70)";
    member1.style.color="white";
    window.alert("登録完了");
    })
    
//↓年休
holiday.addEventListener("click",() =>{
    member1.style.background="red";
    member1.style.color="black";
    window.alert("登録完了");
})

//↓離業
templeave.addEventListener("click",() =>{
    member1.style.background=" rgb(12, 22, 18)";
    member1.style.color="white";
    window.alert("登録完了");
})
//member1.style.background="red";だと、文字部のみ色が変わる

mask.addEventListener("click",() =>{
    mask.classList.add("hidden");
    modal.classList.add("hidden");
}
);
