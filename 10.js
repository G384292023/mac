let photos = [
    "BLB.jpg",
    "BM.jpg",
    "CB.jpg",
    "DCB.jpg",
    "FOF.jpg",
    "HB.jpg",
    "TMB.jpg",
    "アブダブ.jpg",
    "エグチ.jpg",
    "エビフィレオ.jpg",
    "スパチキ.jpg",
    "たまごベーコン.jpg",
    "チキチー.jpg",
    "チキンフィレ.jpg",
    "てりチキ.jpg",
    "マックチキン.jpg"
]
let sidephotos = [
    "edamame.jpg",
    "naget.jpg",
    "potato.jpg",
    "salada.jpg"
]
let drinkphotos = [
    "apple.jpg",
    "caramel.jpg",
    "cola.jpg",
    "earl.jpg",
    "earlicetea.jpg",
    "earltea.jpg",
    "grape.jpg",
    "hotcaramel.jpg",
    "hotcoffee.jpg",
    "hottea.jpg",
    "icecaferate.jpg",
    "icecoffee.jpg",
    "kuro.jpg",
    "lemontea.jpg",
    "melon.jpg",
    "milk.jpg",
    "milktea.jpg",
    "orange.jpg",
    "qoo.jpg",
    "rate.jpg",
    "souken.jpg",
    "sprite.jpg",
    "yasai.jpg"
];
function burger() {
    const photo = document.getElementById("photo");
    const btn = document.getElementById("btn");
    btn.disabled = true;

    function randomphoto() {
        let array = Math.floor(Math.random() * photos.length);
        photo.innerHTML = `<img src="${photos[array]}"`;
    }

    let interval = setInterval(randomphoto, 100);

    setTimeout(() => {
        clearInterval(interval);
        randomphoto();
        btn.disabled = false;
    }, 4000);
    let array = Math.floor(Math.random() * photos.length);
    photo.innerHTML = `<img src="${photos[array]}"`;
}
function side() {
    const photo1 = document.getElementById("photo1");
    const btn1 = document.getElementById("btn1");
    btn1.disabled = true;
    function randomsidephoto() {
        let array = Math.floor(Math.random() * sidephotos.length);
        photo1.innerHTML = `<img src="${sidephotos[array]}"`;
    }

    let interval = setInterval(randomsidephoto, 100);

    setTimeout(() => {
        clearInterval(interval);
        randomsidephoto();
        btn1.disabled = false;
    }, 4000);
    let array = Math.floor(Math.random() * sidephotos.length);
    photo1.innerHTML = `<img src="${sidephotos[array]}"`;
}
function drink() {
    const photo2 = document.getElementById("photo2");
    const btn2 = document.getElementById("btn2");
    btn2.disabled = true;
    function randomdrinkphoto() {
        let array = Math.floor(Math.random() * drinkphotos.length);
        photo2.innerHTML = `<img src="${drinkphotos[array]}"`;
    }

    let interval = setInterval(randomdrinkphoto, 100);

    setTimeout(() => {
        clearInterval(interval);
        randomdrinkphoto();
        btn2.disabled = false;
    }, 4000);
    let array = Math.floor(Math.random() * drinkphotos.length);
    photo2.innerHTML = `<img src="${drinkphotos[array]}"`;
}