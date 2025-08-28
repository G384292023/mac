let photos = [
    "main/BLB.jpg",
    "main/BM.jpg",
    "main/CB.jpg",
    "main/DCB.jpg",
    "main/FOF.jpg",
    "main/HB.jpg",
    "main/TMB.jpg",
    "main/アブダブ.jpg",
    "main/エグチ.jpg",
    "main/エビフィレオ.jpg",
    "main/スパチキ.jpg",
    "main/たまごベーコン.jpg",
    "main/チキチー.jpg",
    "main/チキンフィレ.jpg",
    "main/てりチキ.jpg",
    "main/マックチキン.jpg"
]
let sidephotos = [
    "side/edamame.jpg",
    "side/naget.jpg",
    "side/potato.jpg",
    "side/salada.jpg"
];
let drinkphotos = [
    "drink/apple.jpg",
    "drink/caramel.jpg",
    "drink/cola.jpg",
    "drink/earl.jpg",
    "drink/earlicetea.jpg",
    "drink/earltea.jpg",
    "drink/grape.jpg",
    "drink/hotcaramel.jpg",
    "drink/hotcoffee.jpg",
    "drink/hottea.jpg",
    "drink/icecaferate.jpg",
    "drink/icecoffee.jpg",
    "drink/kuro.jpg",
    "drink/lemontea.jpg",
    "drink/melon.jpg",
    "drink/milk.jpg",
    "drink/milktea.jpg",
    "drink/orange.jpg",
    "drink/qoo.jpg",
    "drink/rate.jpg",
    "drink/souken.jpg",
    "drink/sprite.jpg",
    "drink/yasai.jpg"
];
function burger() {
    const photo = document.getElementById("photo");
    const btn = document.getElementById("btn");
    btn.disabled = true;

    function randomphoto() {
        let array = Math.floor(Math.random() * photos.length);
        photo.innerHTML = `<img src="${photos[array]}" width="300" height="300">`;
    }

    let interval = setInterval(randomphoto, 100);

    setTimeout(() => {
        clearInterval(interval);
        randomphoto();
        btn.disabled = false;
    }, 4000);
    let array = Math.floor(Math.random() * photos.length);
    photo.innerHTML = `<img src="${photos[array]}" width="300" height="300">`;
}
function side() {
    const photo1 = document.getElementById("photo1");
    const btn1 = document.getElementById("btn1");
    btn1.disabled = true;
    function randomsidephoto() {
        let array = Math.floor(Math.random() * sidephotos.length);
        photo1.innerHTML = `<img src="${sidephotos[array]}" width="300" height="300">`;
    }

    let interval = setInterval(randomsidephoto, 100);

    setTimeout(() => {
        clearInterval(interval);
        randomsidephoto();
        btn1.disabled = false;
    }, 4000);
    let array = Math.floor(Math.random() * sidephotos.length);
    photo1.innerHTML = `<img src="${sidephotos[array]}" width="300" height="300">`;
}
function drink() {
    const photo2 = document.getElementById("photo2");
    const btn2 = document.getElementById("btn2");
    btn2.disabled = true;
    function randomdrinkphoto() {
        let array = Math.floor(Math.random() * drinkphotos.length);
        photo2.innerHTML = `<img src="${drinkphotos[array]}" width="300" height="300">`;
    }

    let interval = setInterval(randomdrinkphoto, 100);

    setTimeout(() => {
        clearInterval(interval);
        randomdrinkphoto();
        btn2.disabled = false;
    }, 4000);
    let array = Math.floor(Math.random() * drinkphotos.length);
    photo2.innerHTML = `<img src="${drinkphotos[array]}" width="300" height="300">`;
}