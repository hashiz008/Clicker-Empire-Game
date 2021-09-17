const target = document.getElementById('target');

//スタートページからメインページ
function mainfromStart() {
    config.startPage.classList.add("d-none");
    config.mainPage.append(mainPage());
}
//メインページからスタートページ
function startfromMain() {
    config.mainPage.classList.add("d-none");
    config.startPage.classList.add(startPage());
}

//アイテム 一覧
class Items {
    constructor(name,maxPurchases,description,price,img) {
        this.name = name
        this.maxPurchases = maxPurchases
        this.description = description
        this.price = price
        this.img = img
    }
}

let items =
[
    new Items ("Flip machine","500","Get ￥25/clicking","￥15000","https://images.pond5.com/beef-burger-grilling-professional-flipping-footage-082500216_iconl.jpeg"),
    new Items ("ETF Stock","∞","Get 0.1%/sec","￥300000","https://image.shutterstock.com/image-photo/crypto-etf-next-step-towards-600w-1150453739.jpg"),
    new Items ("ETF Bonds","∞","Get 0.07%/sec","￥300000","https://image.shutterstock.com/image-illustration/etf-exchange-traded-funds-concept-600w-1146749063.jpg"),
    new Items ("Lemonade Stand","1000","Get ￥30/sec","￥30000","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lemonade-stand-set-up-in-front-yard-royalty-free-image-613017806-1561043004.jpg?crop=0.670xw:1.00xh;0.0119xw,0&resize=480:*"),
    new Items ("Ice Cream Truck","500","Get ￥120/sec","￥100000","https://apih.alamy.com/zooms/9/%7BF513E912-ECA7-409F-9CA2-06D7AA51CE5A%7D/2AC9F52.jpg"),
    new Items ("House","100","Get ￥32000/sec","￥20000000","https://hapaeikaiwa.com/wp-content/uploads/2013/02/house-home-2.jpg"),
    new Items ("TownHouse","100","Get ￥64000/sec","￥40000000","https://image.ceres-realestate.net/upload_directory/d5d538dc-8b9d-427d-ae38-0d652cd6249b/pool.jpg"),
    new Items ("Mansion","20","Get ￥500000/sec","￥250000000","https://www.haseko-sumai.com/kurashi/img/archive/cut/cut_132.jpg"),
    new Items ("Industrial Space","10","Get ￥2200000/sec","￥1000000000","https://tk.ismcdn.jp/mwimgs/1/e/1140/img_1e50351c65760975c989f3e6a92f05e7512408.jpg"),
    new Items ("Hotel Skyscraper","5","Get ￥25000000/sec","￥10000000000","https://www.uniqhotels.com/media/hotels/57-hotel-orig/four_seasons_hotel_manama.jpg.700x345_q85_box-0%2C173%2C2000%2C1159_crop_detail.jpg?h=/srv/www/uniqhotels/production/media/hotels/57/67d3dc-317e-4641-b0d8-e7173c477498-hotel.jpeg"),
    new Items ("Bullet-speed Sky Railway","1","Get ￥30000000000/sec","￥10000000000000","https://www.keisei.co.jp/keisei/tetudou/skyliner/us/assets/images/skyliner/index/skyliner_poster.jpg"),
];

//最初のページ
function startPage() {
    let container = document.createElement("div");
    container.classList.add("d-flex","align-items-center")
    container.innerHTML =
    `
    <div id="startPage" class="bg-white p-4">
        <h3 class="pb-4">Clicker Empire Game<h3>
        <input type="text" class="form-control" id="inputName" placeholder="name">
        <button class="btn btn-primary mt-4 ml-2" id="startBtn">New game</button>
        <button style="width:40%" class="btn btn-info mt-4 ml-4" id="loginBtn">Login</button>
    </div>
    <div id="mainPage">
    </div>
    `;
    target.append(container);

    //New gameボタンでメインページの切り替え
    let name = document.getElementById("inputName");
    let startBtn = document.getElementById("startBtn");

    startBtn.onclick = function() {
        if (name.value != "") {
            mainfromStart()
            document.getElementById("name").innerHTML = name.value;
        } else {
            alert("名前を入力してください!");
        }
    }

    //Loginボタンで途中再開
    let loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click",function() {
        if (name.value == localStorage["saveData0"]) {
            mainfromStart();
            document.getElementById("name").innerHTML = localStorage["saveData0"];
            document.getElementById("burgerNum").innerHTML = localStorage["saveData1"];
            document.getElementById("getPrice").innerHTML = localStorage["saveData2"];
            document.getElementById("balance").innerHTML = localStorage["saveData3"];
            document.getElementById("days").innerHTML = localStorage["saveData4"];
            document.getElementById("yearsOld2").innerHTML = localStorage["saveData5"];
            document.getElementById("buyingTotal").innerHTML = localStorage["saveData6"];
        } else {
            alert("ログイン名が間違ってます！")
        }
    })
}
startPage();

let config =
{
    startPage: document.getElementById("startPage"),
    mainPage: document.getElementById("mainPage")
};

// メインページ
function mainPage() {
    let container = document.createElement("div");
    container.style="background-color:lightslategray"
    container.classList.add("p-4","d-flex")
    container.innerHTML =
    `
    <div id="main" class="main d-flex">
        <div style="height:130px; background-color:steelblue" class="mr-4 p-4">
            <div class="pb-4">
                <h2 id="burgerNum" class="pl-2"  style="color:white">0 Burgers</h2>
                <h5 id="getPrice" class="pt-2" style="color:white">$25 per second</h5>
            </div>
            <div class="d-flex justify-content-center mt-5">
                <div class="d-flex align-items-center">
                   <img id="burgerClicking" style="width:170px; height:170px" src="https://cdn.pixabay.com/photo/2014/04/02/17/00/burger-307648_1280.png">
                </div>
            </div>
        </div>
            <div id="rightParts" class="mt-1 pb-3">
                <div class="d-flex flex-wrap ml-3 p-3" style="height:120px; background-color:steelblue">
                    <div style="background-color:royalblue; height:40px;" class="d-flex justify-content-center col-6 p-1 border border-secondary">
                        <p id="name" style="color:white" class="name"><p>
                    </div>
                    <div id="yearsOld" style="background-color:royalblue; color:white; height:40px" class="d-flex justify-content-center col-6 p-1 border border-secondary">
                        <p id="yearsOld2" style="color:white" class="yearsOld">20 years old<p>
                    </div>
                    <div id="days" style="background-color:royalblue; color:white; height:40px" class="d-flex justify-content-center days col-6 p-1 border border-secondary">
                        <p id="days2" style="color:white">0 days</p>
                    </div>
                    <div style="background-color:royalblue; height:40px" class="d-flex justify-content-center col-6 p-1 border border-secondary">
                        <p value="50000" id="balance" style="color:white">￥ 50000</p>
                    </div>
                </div>
                <div id="itemPage1" class="mt-3 items d-flex justify-content-center">
                    <div id="itemPage2" class="items ml-3 col-11 p-1" style="overflow-y:scroll; width:500px; height:220px; background-color:steelblue">
                    </div>
                </div>

                <div class="d-flex">
                    <div id="resetBtn" class="resetBtn d-flex align-items-end">
                        <i style="color:white; font-size: 30px" class="fas fa-redo"></i>
                    </div>
                </div>
                <div class="d-flex">
                    <div id="saveBtn" class="saveBtn d-flex align-items-end">
                        <i style="color: white; font-size: 30px" class="fas fa-save"></i>
                    </div>
                </div>
            </div>
    </div>
    `;
    config.mainPage.append(container);

    //アイテムページ一覧
    let str = document.createElement("div");
    for (let i=0; i<items.length; i++) {
        str.innerHTML +=
        `
        <div id="sss" class="ml-3 item">
            <div id="${i}" style="width:420px; height:100px; background-color:royalblue" class="itemBox mt-3 p-1">
                <div class="d-flex justify-content-center">
                <h5 style="color:white" class="pl-5 data pt-4">${items[i].name+"<br>"+items[i].price}</h5>
                    <div>
                        <p style="color:springgreen">${items[i].description}</p>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <h5 id="buyingTotal" style="color:white" class="buyingTotal">0</h5>
                </div>
                <div class="d-flex">
                    <img class="img" src="${items[i].img}">
                </div>
            </div>
        </div>
        `;
    }
    document.getElementById("itemPage2").append(str);

    //アイテム クリック
    for (let i=0; i<items.length; i++) {
        let itemsClicking = document.querySelectorAll(".items .item")[i];
        itemsClicking.onclick = function() {
            let numItems = Number(document.querySelectorAll(".item .itemBox")[i].id);
            if (0 == numItems) {
                document.getElementById("itemPage2").classList.add("d-none");
                flipmachine();
            }
            else if (1 == numItems) {
                document.getElementById("itemPage2").classList.add("d-none");
                etfStock()
            } else if (2 == numItems) {
                document.getElementById("itemPage2").classList.add("d-none");
                etfBonds()
            }
            else if (3 == numItems) {
                document.getElementById("itemPage2").classList.add("d-none");
                lemonadeStand()
            }
            else if (4 == numItems) {
                document.getElementById("itemPage2").classList.add("d-none");
                iceCreameTruck()
            }
            else if (5 == numItems) {
                document.getElementById("itemPage2").classList.add("d-none");
                house()
            }
            else if (6 == numItems) {
                document.getElementById("itemPage2").classList.add("d-none");
                twonHouse()
            }
            else if (7 == numItems) {
                document.getElementById("itemPage2").classList.add("d-none");
                mansion()
            } else if (8 == numItems) {
                document.getElementById("itemPage2").classList.add("d-none");
                industrialSpace()
            }
            else if (9 == numItems) {
                document.getElementById("itemPage2").classList.add("d-none");
                hotelSkyscraper()
            } else if (10 == numItems) {
                document.getElementById("itemPage2").classList.add("d-none");
                railway()
            }
        }
    }

    //保存ボタン
    let saveBtn = document.getElementById("saveBtn");

    saveBtn.onclick = () => {
        //名前
        let name = document.getElementById("name").innerHTML;
        //バーガーのクリック個数
        let burgerNum = document.getElementById("burgerNum").innerHTML;
        // バーガーの値段
        let burgerPrice = document.getElementById("getPrice").innerHTML;
        //残高
        let balance = document.getElementById("balance").innerHTML;
        //日数
        let days = document.getElementById("days").innerHTML;
        //年齢
        let yearsOld = document.getElementById("yearsOld2").innerHTML;
        //アイテムページ 購入合計
        let buyingTotal = document.getElementById("buyingTotal").innerHTML;

        //各データの集まり
        let methods = [name,burgerNum,burgerPrice,balance,days,yearsOld,buyingTotal];
        for (let i=0; i<methods.length; i++) {
            localStorage.setItem(`saveData${i}`,methods[i]);
        }
        alert("保存しました");
        startfromMain()
    }

    //リセットボタン(データをリセット/スタートページに戻る)
    let resetBtn = document.getElementById("resetBtn");

    resetBtn.onclick = () => {
        let getData =[
          localStorage.getItem("saveData0"),
          localStorage.getItem("saveData1"),
          localStorage.getItem("saveData2"),
          localStorage.getItem("saveData3"),
          localStorage.getItem("saveData4"),
          localStorage.getItem("saveData5"),
          localStorage.getItem("saveData6")
        ];
        for (let i=0; i<getData.length; i++) {
            localStorage.removeItem(`saveData${i}`);
        }
        alert("削除しました");
        startfromMain()
    }

}

// 日付/年齢 処理
function countUp() {
    let startBtn = document.getElementById("startBtn");
    let loginBtn = document.getElementById("loginBtn");
    let countDays = 0;
    let countYears = 21;
    let str = "";
    let str2 = "";

    //スタート用
    startBtn.addEventListener("click",function() {
        let days = document.getElementById("days");
        let days2 = document.getElementById("days2");
        let yearsOld = document.getElementById("yearsOld");
        let yearsOld2 = document.getElementById("yearsOld2");

        //日付
        const daysUp = () => {
            str = days2.innerHTML = String(countDays++)+"  days";
            days.innerHTML = str;
        }
        setInterval(daysUp, 1000);

        //年齢
        const years = () => {
            str2 = yearsOld2.innerHTML = String(countYears++)+"  years old";
            yearsOld.innerHTML = str2;
        }
        setInterval(years,365000)
    })

    //ログイン用
    loginBtn.addEventListener("click",function() {
        //日付
        let days = document.getElementById("days");
        let keepingDays = Number(localStorage["saveData4"].slice(0,2));
        //年齢
        let yearsOld = document.getElementById("yearsOld");
        let keepingYears = Number(localStorage["saveData5"].slice(0,2));

        //日付 処理
        const daysUp = () => {
            days.innerHTML = String(keepingDays+countDays++)+" days";
        }
        setInterval(daysUp, 1000);

        //年齢 処理
        const years = () => {
            yearsOld.innerHTML = String(keepingYears+countYears++)+" years old";
        }
        setInterval(years,365000-keepingYears)
    })
}
countUp();

//ハンバーガー クリック処理
function burgerClicking() {
   let startBtn = document.getElementById("startBtn");
   let loginBtn = document.getElementById("loginBtn");

   //スタート用
   startBtn.addEventListener("click", function() {
       let burgerClick = document.getElementById("burgerClicking");
       //バーガー 個数
       let burgerNum = document.getElementById("burgerNum");
       let count = 1;
       //バーガー 値段
       let balance = document.getElementById("balance");
       let count2 = 1;

       burgerClick.addEventListener("click",function() {
            if (Number(balance.innerHTML.slice(1,7)) >= 50000) {
                burgerNum.innerHTML = count++ + "  Burgers";
                balance.innerHTML = "￥ "+`${50000+(count2++*25)}`;
            } else if (Number(balance.innerHTML.slice(1,7)) >= 35000) {
                burgerNum.innerHTML = count++ + "  Burgers";
                balance.innerHTML = "￥ "+`${50000+(count2++*50)}`;
            } else if (Number(balance.innerHTML.slice(1,7)) >= 20000) {
                burgerNum.innerHTML = count++ + "  Burgers";
                balance.innerHTML = "￥ "+`${50000+(count2++*75)}`;
            } else if (Number(balance.innerHTML.slice(1,7)) >= 5000) {
                burgerNum.innerHTML = count++ + "  Burgers";
                balance.innerHTML = "￥ "+`${50000+(count2++*100)}`;
            }
       })
   })

   //ログイン用
   loginBtn.addEventListener("click", function() {
       let burgerClick = document.getElementById("burgerClicking");
       //バーガー 個数
       let burgerNum = document.getElementById("burgerNum");
       let count = Number(localStorage["saveData1"].slice(0,3));

       //バーガー 値段
       let balance = document.getElementById("balance");
       let count2 = 1;
       let keepingBalance = Number(localStorage["saveData3"].slice(2,7));

       burgerClick.addEventListener("click",function() {
        if (Number(balance.innerHTML.slice(1,7)) >= 50000) {
            burgerNum.innerHTML = count++ + " Burgers";
            balance.innerHTML = "￥ "+`${keepingBalance+(count2++*25)}`
        } else if (Number(balance.innerHTML.slice(1,7)) >= 35000) {
            burgerNum.innerHTML = count++ + " Burgers";
            balance.innerHTML = "￥ "+`${keepingBalance+(count2++*50)}`
        } else if (Number(balance.innerHTML.slice(1,7)) >= 25000) {
            burgerNum.innerHTML = count++ + " Burgers";
            balance.innerHTML = "￥ "+`${keepingBalance+(count2++*75)}`
        } else if (Number(balance.innerHTML.slice(1,7)) >= 5000) {
            burgerNum.innerHTML = count++ + " Burgers";
            balance.innerHTML = "￥ "+`${keepingBalance+(count2++*100)}`
        }
       })
   })
}
burgerClicking();

//フィリップマシーン
function flipmachine() {
    //itemページを消去
    let itemsPage = document.getElementById("itemPage2");

    //flipページを表示
    let flipDiv = document.createElement("div");
    flipDiv.innerHTML =
    `
    <div style="height:370px; background-color:royalblue" class="d-flex mt-3 ml-2 itemData p-3">
        <div>
            <h3 style="color:white">${items[0].name}</h3>
            <h5 style="color:white">Max Purchases: ${items[0].maxPurchases}</h5>
            <h5 style="color:white">Price: ${items[0].price}</h5>
            <h5 style="color:white">${items[0].description}</h5>
            <h5 class="pt-3" style="color:white">How Many would you like to purchase?</h5>
            <input id="buyingNum" type="number" min="0" max=${items[0].maxPurchases} class="form-control col-12"/>
            <div class="mt-2 d-flex justify-content-end">
                <h5 id="total" style="color:white">Total:￥0</h5>
            </div>
            <button id="backBtn" style="color:blue" class="mt-1 backBtn ml-2 btn btn-light col-5">Go Back</button>
            <button id="purchaseBtn" class="mt-1 ml-3 btn btn-primary col-5">Purchase</button>
        </div>
        <div class="d-flex justify-content-end">
            <img style="width:150px; height:150px" src="${items[0].img}">
        </div>
    </div>
    `;
    document.getElementById("itemPage1").append(flipDiv);

    // 購入数(input)
    let buyingNum = document.getElementById("buyingNum");
    let total = document.getElementById("total");
    let count = 1;
    let count2 = 1;
    //購入数 処理
    buyingNum.onclick = function() {
         if(Number(buyingNum.value)+1 > count || Number(buyingNum.value)-1 > count) {
             total.innerHTML = "Total:"+"￥"+count++*15000;
         } else if (Number(buyingNum.value) < count || Number(buyingNum.value)+1 < count) {
            total.innerHTML = "Total:"+"￥"+count2--*15000;
        }
    }

    //バックボタン
    let backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click",function() {
        flipDiv.innerHTML = "";
        itemsPage.classList.add("d-block");
    })
    // 購入ボタン
    let purchaseBtn = document.getElementById("purchaseBtn");
    // クリックの値段
    let getPrice = document.getElementById("getPrice");

    // 残高
    let balance = document.getElementById("balance");
    let buyingCount = 15000
    // 購入の合計
    let buyingTotal = document.querySelectorAll(".items .item .itemBox .buyingTotal")[0];

    purchaseBtn.addEventListener("click",function(){
        //purchaseボタン押したらメインページに戻る
        flipDiv.innerHTML = "";
        itemsPage.classList.add("d-block");

        //残高 数字
        if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
            balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount)}`;
            // 購入の合計
            buyingTotal.innerHTML = buyingNum.value;
        } else {
            alert("お金が足りません");
        }

        // クリックの値段
        let clickPrice = 25 * Number(buyingNum.value);
        getPrice.innerHTML = "￥"+`${Number(getPrice.innerHTML.slice(1,3)) + clickPrice}`+" per second";

        //残高が購入数毎+25増加
        let burgerClick = document.getElementById("burgerClicking");
        burgerClick.onclick = () => {
            let clickIncrease = 25 * Number(buyingNum.value);
            let balance2 = Number(balance.innerHTML.slice(1,7));
            let buying = 15000 * Number(buyingNum.value);
            let count = 1;
            let clickIncrease2 = clickIncrease*count++;
            balance.innerHTML = "￥ "+`${(balance2-buying)+clickIncrease2}`;
        }
    })
}

//ETF stock
function etfStock() {
    //前のページを消去
    let itemsPage = document.getElementById("itemPage2");

    // etfページを表示
    let etfStockDiv = document.createElement("div");
    etfStockDiv.classList.add("etfDiv")
    etfStockDiv.innerHTML =
    `
    <div style="height:370px; background-color:royalblue" class="d-flex mt-3 ml-2 itemData p-3">
        <div class="etfData">
            <h3 style="color:white">${items[1].name}</h3>
            <h5 style="color:white">Max Purchases: ${items[1].maxPurchases}</h5>
            <h5 id="price" style="color:white" class="inPrice">Price: ${items[1].price}</h5>
            <h5 style="color:white">${items[1].description}</h5>
            <h5 class="pt-3" style="color:white">How Many would you like to purchase?</h5>
            <input id="buyingNum" type="number" min="0"  class="form-control col-12"/>
            <div class="mt-2 d-flex justify-content-end">
                <h5 id="total" style="color:white">Total:￥0</h5>
            </div>
            <button id="backBtn" style="color:blue" class="mt-1 backBtn ml-2 btn btn-light col-5">Go Back</button>
            <button id="purchaseBtn" class="mt-1 ml-3 btn btn-primary col-5">Purchase</button>
        </div>
        <div class="d-flex justify-content-end">
            <img style="width:150px; height:150px" src="${items[1].img}">
        </div>
    </div>
    `;
    document.getElementById("itemPage1").append(etfStockDiv);

    // 購入数(input)
    let buyingNum = document.getElementById("buyingNum");
    let total = document.getElementById("total");
    let count = 1;
    let count2 = 1;

    // 購入数 処理
    buyingNum.onclick = function() {
         if(Number(buyingNum.value)+1 > count || Number(buyingNum.value)-1 > count) {
             total.innerHTML = "Total:"+"￥"+count++*300000;
         } else if (Number(buyingNum.value) < count || Number(buyingNum.value)+1 < count) {
            total.innerHTML = "Total:"+"￥"+count2--*300000;
        }
    }

    //バックボタン
    let backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click",function() {
        etfStockDiv.innerHTML = "";
        itemsPage.classList.add("d-block");
    })
    // 購入ボタン
    let purchaseBtn = document.getElementById("purchaseBtn");

    // 残高
    let balance = document.getElementById("balance");
    let buyingCount = 300000

    // 購入の合計
    let buyingTotal = document.querySelectorAll(".items .item .itemBox .buyingTotal")[1];

    purchaseBtn.addEventListener("click",function(){
        //purchaseボタン押したらメインページに戻る
        etfStockDiv.innerHTML = "";
        itemsPage.classList.add("d-block");

        // 購入ごと価格が10%増加
        let frontPrice = Number(document.querySelectorAll(".items .item .itemBox .data")[1].innerHTML.slice(14,20));
        let increasePrice = frontPrice * Number(buyingNum.value) * 0.1;

        if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
            document.querySelectorAll(".items .item .itemBox .data")[1].innerHTML = "ETF Stock"+"<br/>"+"￥"+`${frontPrice+increasePrice}`;
        }

        //購入数に応じて残高 0.1%増加
        let upBalance = Number(buyingNum.value)*0.001*Number(balance.innerHTML.slice(2));

        const upSaving = () => {
            if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
            balance.innerHTML = "￥ "+ `${Math.floor(Number(balance.innerHTML.slice(2))+upBalance)}`;
            }
        }
        setInterval(upSaving, 1000);

        //数字 - 残高
        if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
            balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount)}`;
            // 購入の合計
            buyingTotal.innerHTML = buyingNum.value;
        } else {
            alert("お金が足りません");
        }
    })
}

//ETF bonds
function etfBonds() {
    //前のページを消去
    let itemsPage = document.getElementById("itemPage2");

    // etfページを表示
    let etfBondsDiv = document.createElement("div");
    etfBondsDiv.classList.add("etfDiv")
    etfBondsDiv.innerHTML =
    `
    <div style="height:370px; background-color:royalblue" class="d-flex mt-3 ml-2 itemData p-3">
        <div class="etfData">
            <h3 style="color:white">${items[2].name}</h3>
            <h5 style="color:white">Max Purchases: ${items[2].maxPurchases}</h5>
            <h5 id="price" style="color:white" class="inPrice">Price: ${items[2].price}</h5>
            <h5 style="color:white">${items[2].description}</h5>
            <h5 class="pt-3" style="color:white">How Many would you like to purchase?</h5>
            <input id="buyingNum" type="number" min="0"  class="form-control col-12"/>
            <div class="mt-2 d-flex justify-content-end">
                <h5 id="total" style="color:white">Total:￥0</h5>
            </div>
            <button id="backBtn" style="color:blue" class="mt-1 backBtn ml-2 btn btn-light col-5">Go Back</button>
            <button id="purchaseBtn" class="mt-1 ml-3 btn btn-primary col-5">Purchase</button>
        </div>
        <div class="d-flex justify-content-end">
            <img style="width:150px; height:150px" src="${items[2].img}">
        </div>
    </div>
    `;
    document.getElementById("itemPage1").append(etfBondsDiv);

    // 購入数(input)
    let buyingNum = document.getElementById("buyingNum");
    let total = document.getElementById("total");
    let count = 1;
    let count2 = 1;

    // 購入数 処理
    buyingNum.onclick = function() {
         if(Number(buyingNum.value)+1 > count || Number(buyingNum.value)-1 > count) {
             total.innerHTML = "Total:"+"￥"+count++*300000;
         } else if (Number(buyingNum.value) < count || Number(buyingNum.value)+1 < count) {
            total.innerHTML = "Total:"+"￥"+count2--*300000;
        }
    }

    //バックボタン
    let backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click",function() {
        etfBondsDiv.innerHTML = "";
        itemsPage.classList.add("d-block");
    })

    // 購入ボタン
    let purchaseBtn = document.getElementById("purchaseBtn");

    // 残高
    let balance = document.getElementById("balance");
    let buyingCount = 300000

    // 購入の合計
    let buyingTotal = document.querySelectorAll(".items .item .itemBox .buyingTotal")[2];

    purchaseBtn.addEventListener("click",function(){
        //purchaseボタン押したらメインページに戻る
        etfBondsDiv.innerHTML = "";
        itemsPage.classList.add("d-block");

        //購入数に応じて残高 0.07%増加
        let upBalance = Number(buyingNum.value)*0.0007*Number(balance.innerHTML.slice(2));

        const upSaving = () => {
            if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
            balance.innerHTML = "￥ "+ `${Math.floor(Number(balance.innerHTML.slice(2))+upBalance)}`;
            }
        }
        setInterval(upSaving, 1000);

        //数字 - 残高
        if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
            balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount)}`;
            // 購入の合計
            buyingTotal.innerHTML = buyingNum.value;
        } else {
            alert("お金が足りません");
        }
    })
}

//Lemonade Stand
function lemonadeStand() {
    //前のページを消去
    let itemsPage = document.getElementById("itemPage2");

    // lemonadeページを表示
    let lemonadeDiv = document.createElement("div");
    lemonadeDiv.innerHTML =
    `
    <div style="height:370px; background-color:royalblue" class="d-flex mt-3 ml-2 itemData p-3">
        <div class="etfData">
            <h3 style="color:white">${items[3].name}</h3>
            <h5 style="color:white">Max Purchases: ${items[3].maxPurchases}</h5>
            <h5 id="price" style="color:white" class="inPrice">Price: ${items[3].price}</h5>
            <h5 style="color:white">${items[3].description}</h5>
            <h5 class="pt-3" style="color:white">How Many would you like to purchase?</h5>
            <input id="buyingNum" type="number" min="0" max=${items[3].maxPurchases} class="form-control col-12"/>
            <div class="mt-2 d-flex justify-content-end">
                <h5 id="total" style="color:white">Total:￥0</h5>
            </div>
            <button id="backBtn" style="color:blue" class="mt-1 backBtn ml-2 btn btn-light col-5">Go Back</button>
            <button id="purchaseBtn" class="mt-1 ml-3 btn btn-primary col-5">Purchase</button>
        </div>
        <div class="d-flex justify-content-end">
            <img style="width:150px; height:150px" src="${items[3].img}">
        </div>
    </div>
    `;
    document.getElementById("itemPage1").append(lemonadeDiv);

    // 購入数(input)
    let buyingNum = document.getElementById("buyingNum");
    let total = document.getElementById("total");
    let count = 1;
    let count2 = 1;

   // 購入数 処理
    buyingNum.onclick = function() {
         if(Number(buyingNum.value)+1 > count || Number(buyingNum.value)-1 > count) {
             total.innerHTML = "Total:"+"￥"+count++*30000;
         } else if (Number(buyingNum.value) < count || Number(buyingNum.value)+1 < count) {
            total.innerHTML = "Total:"+"￥"+count2--*30000;
        }
    }

    //バックボタン
    let backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click",function() {
        lemonadeDiv.innerHTML = "";
        itemsPage.classList.add("d-block");
    })

    // 購入ボタン
    let purchaseBtn = document.getElementById("purchaseBtn");

    // 残高
    let balance = document.getElementById("balance");
    let buyingCount = 30000

    // 購入の合計
    let buyingTotal = document.querySelectorAll(".items .item .itemBox .buyingTotal")[3];

    purchaseBtn.addEventListener("click",function(){
        //purchaseボタン押したらメインページに戻る
        lemonadeDiv.innerHTML = "";
        itemsPage.classList.add("d-block");

        //毎秒30円取得
        let buying = 30 * Number(buyingNum.value);

        const upMoney = () => {
            if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
                balance.innerHTML = balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2))+buying}`;
            }
        }
        setInterval(upMoney, 1000);

        //数字 - 残高
        if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
            balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount)}`;
            // 購入の合計
            buyingTotal.innerHTML = buyingNum.value;
        } else {
            alert("お金が足りません");
        }
    })
}

//Ice Cream Truck
function iceCreameTruck() {
     //前のページを消去
    let itemsPage = document.getElementById("itemPage2");

     // iceCreamページを表示
    let iceCreamDiv = document.createElement("div");
    iceCreamDiv.innerHTML =
    `
    <div style="height:370px; background-color:royalblue" class="d-flex mt-3 ml-2 itemData p-3">
        <div class="etfData">
            <h3 style="color:white">${items[4].name}</h3>
            <h5 style="color:white">Max Purchases: ${items[4].maxPurchases}</h5>
            <h5 id="price" style="color:white" class="inPrice">Price: ${items[4].price}</h5>
            <h5 style="color:white">${items[4].description}</h5>
            <h5 class="pt-3" style="color:white">How Many would you like to purchase?</h5>
            <input id="buyingNum" type="number" min="0" max=${items[4].maxPurchases} class="form-control col-12"/>
            <div class="mt-2 d-flex justify-content-end">
                <h5 id="total" style="color:white">Total:￥0</h5>
            </div>
            <button id="backBtn" style="color:blue" class="mt-1 backBtn ml-2 btn btn-light col-5">Go Back</button>
            <button id="purchaseBtn" class="mt-1 ml-3 btn btn-primary col-5">Purchase</button>
        </div>
        <div class="d-flex justify-content-end">
            <img style="width:150px; height:150px" src="${items[4].img}">
        </div>
    </div>
    `;
    document.getElementById("itemPage1").append(iceCreamDiv);

     // 購入数(input)
    let buyingNum = document.getElementById("buyingNum");
    let total = document.getElementById("total");
    let count = 1;
    let count2 = 1;

    // 購入数 処理
    buyingNum.onclick = function() {
         if(Number(buyingNum.value)+1 > count || Number(buyingNum.value)-1 > count) {
             total.innerHTML = "Total:"+"￥"+count++*100000;
         } else if (Number(buyingNum.value) < count || Number(buyingNum.value)+1 < count) {
            total.innerHTML = "Total:"+"￥"+count2--*100000;
        }
    }

     //バックボタン
    let backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click",function() {
        iceCreamDiv.innerHTML = "";
        itemsPage.classList.add("d-block");
    })

     // 購入ボタン
    let purchaseBtn = document.getElementById("purchaseBtn");

     // 残高
    let balance = document.getElementById("balance");
    let buyingCount = 100000

     // 購入の合計
    let buyingTotal = document.querySelectorAll(".items .item .itemBox .buyingTotal")[4];

    purchaseBtn.addEventListener("click",function(){
         //purchaseボタン押したらメインページに戻る
        iceCreamDiv.innerHTML = "";
        itemsPage.classList.add("d-block");

         //毎秒120円取得
        let buying = 120 * Number(buyingNum.value);

        const upMoney = () => {
            if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
                balance.innerHTML = balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2))+buying}`;
            }
        }
        setInterval(upMoney, 1000);

        //数字 - 残高
        if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
            balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount)}`;
            // 購入の合計
            buyingTotal.innerHTML = buyingNum.value;
        } else {
            alert("お金が足りません");
        }
    })
}

//House
function house() {
     //前のページを消去
    let itemsPage = document.getElementById("itemPage2");

     // houseページを表示
    let houseDiv = document.createElement("div");
    houseDiv.innerHTML =
    `
    <div style="height:370px; background-color:royalblue" class="d-flex mt-3 ml-2 itemData p-3">
        <div class="etfData">
            <h3 style="color:white">${items[5].name}</h3>
            <h5 style="color:white">Max Purchases: ${items[5].maxPurchases}</h5>
            <h5 id="price" style="color:white" class="inPrice">Price: ${items[5].price}</h5>
            <h5 style="color:white">${items[5].description}</h5>
            <h5 class="pt-3" style="color:white">How Many would you like to purchase?</h5>
            <input id="buyingNum" type="number" min="0" max=${items[5].maxPurchases} class="form-control col-12"/>
            <div class="mt-2 d-flex justify-content-end">
                <h5 id="total" style="color:white">Total:￥0</h5>
            </div>
            <button id="backBtn" style="color:blue" class="mt-1 backBtn ml-2 btn btn-light col-5">Go Back</button>
            <button id="purchaseBtn" class="mt-1 ml-3 btn btn-primary col-5">Purchase</button>
        </div>
        <div class="d-flex justify-content-end">
            <img style="width:150px; height:150px" src="${items[5].img}">
        </div>
    </div>
    `;
    document.getElementById("itemPage1").append(houseDiv);

     // 購入数(input)
    let buyingNum = document.getElementById("buyingNum");
    let total = document.getElementById("total");
    let count = 1;
    let count2 = 1;

    // 購入数 処理
    buyingNum.onclick = function() {
         if(Number(buyingNum.value)+1 > count || Number(buyingNum.value)-1 > count) {
             total.innerHTML = "Total:"+"￥"+count++*20000000;
         } else if (Number(buyingNum.value) < count || Number(buyingNum.value)+1 < count) {
            total.innerHTML = "Total:"+"￥"+count2--*20000000;
        }
    }

     //バックボタン
    let backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click",function() {
        houseDiv.innerHTML = "";
        itemsPage.classList.add("d-block");
    })

     // 購入ボタン
    let purchaseBtn = document.getElementById("purchaseBtn");

     // 残高
    let balance = document.getElementById("balance");
    let buyingCount = 20000000

     // 購入の合計
    let buyingTotal = document.querySelectorAll(".items .item .itemBox .buyingTotal")[5];

    purchaseBtn.addEventListener("click",function(){
         //purchaseボタン押したらメインページに戻る
        houseDiv.innerHTML = "";
        itemsPage.classList.add("d-block");

         //毎秒32000円取得
        let buying = 32000 * Number(buyingNum.value);

        const upMoney = () => {
            if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
                balance.innerHTML = balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2))+buying}`;
            }
        }
        setInterval(upMoney, 1000);

        //数字 - 残高
        if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
            balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount)}`;
            // 購入の合計
            buyingTotal.innerHTML = buyingNum.value;
        } else {
            alert("お金が足りません");
        }
    })
}

//TownHouse
function twonHouse() {
     //前のページを消去
    let itemsPage = document.getElementById("itemPage2");

     // twonHouseページを表示
    let twonHouseDiv = document.createElement("div");
    twonHouseDiv.innerHTML =
    `
    <div style="height:370px; background-color:royalblue" class="d-flex mt-3 ml-2 itemData p-3">
        <div class="etfData">
            <h3 style="color:white">${items[6].name}</h3>
            <h5 style="color:white">Max Purchases: ${items[6].maxPurchases}</h5>
            <h5 id="price" style="color:white" class="inPrice">Price: ${items[6].price}</h5>
            <h5 style="color:white">${items[6].description}</h5>
            <h5 class="pt-3" style="color:white">How Many would you like to purchase?</h5>
            <input id="buyingNum" type="number" min="0" max=${items[6].maxPurchases} class="form-control col-12"/>
            <div class="mt-2 d-flex justify-content-end">
                <h5 id="total" style="color:white">Total:￥0</h5>
            </div>
            <button id="backBtn" style="color:blue" class="mt-1 backBtn ml-2 btn btn-light col-5">Go Back</button>
            <button id="purchaseBtn" class="mt-1 ml-3 btn btn-primary col-5">Purchase</button>
        </div>
        <div class="d-flex justify-content-end">
            <img style="width:150px; height:150px" src="${items[6].img}">
        </div>
    </div>
    `;
    document.getElementById("itemPage1").append(twonHouseDiv);

     // 購入数(input)
    let buyingNum = document.getElementById("buyingNum");
    let total = document.getElementById("total");
    let count = 1;
    let count2 = 1;

    // 購入数 処理
    buyingNum.onclick = function() {
         if(Number(buyingNum.value)+1 > count || Number(buyingNum.value)-1 > count) {
             total.innerHTML = "Total:"+"￥"+count++*20000000;
         } else if (Number(buyingNum.value) < count || Number(buyingNum.value)+1 < count) {
            total.innerHTML = "Total:"+"￥"+count2--*20000000;
        }
    }

     //バックボタン
    let backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click",function() {
        twonHouseDiv.innerHTML = "";
        itemsPage.classList.add("d-block");
    })

     // 購入ボタン
    let purchaseBtn = document.getElementById("purchaseBtn");

     // 残高
    let balance = document.getElementById("balance");
    let buyingCount = 20000000

     // 購入の合計
    let buyingTotal = document.querySelectorAll(".items .item .itemBox .buyingTotal")[6];

    purchaseBtn.addEventListener("click",function(){
         //purchaseボタン押したらメインページに戻る
        twonHouseDiv.innerHTML = "";
        itemsPage.classList.add("d-block");

         //毎秒64000円取得
        let buying = 64000 * Number(buyingNum.value);

        const upMoney = () => {
            if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
                balance.innerHTML = balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2))+buying}`;
            }
        }
        setInterval(upMoney, 1000);

        //数字 - 残高
        if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
            balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount)}`;
            //購入の合計
            buyingTotal.innerHTML = buyingNum.value;
        } else {
            alert("お金が足りません");
        }
    })
}

//Mansion
function mansion() {
     //前のページを消去
    let itemsPage = document.getElementById("itemPage2");

     // twonHouseページを表示
    let mansionDiv = document.createElement("div");
    mansionDiv.innerHTML =
    `
    <div style="height:370px; background-color:royalblue" class="d-flex mt-3 ml-2 itemData p-3">
        <div class="etfData">
            <h3 style="color:white">${items[7].name}</h3>
            <h5 style="color:white">Max Purchases: ${items[7].maxPurchases}</h5>
            <h5 id="price" style="color:white" class="inPrice">Price: ${items[7].price}</h5>
            <h5 style="color:white">${items[7].description}</h5>
            <h5 class="pt-3" style="color:white">How Many would you like to purchase?</h5>
            <input id="buyingNum" type="number" min="0" max=${items[7].maxPurchases} class="form-control col-12"/>
            <div class="mt-2 d-flex justify-content-end">
                <h5 id="total" style="color:white">Total:￥0</h5>
            </div>
            <button id="backBtn" style="color:blue" class="mt-1 backBtn ml-2 btn btn-light col-5">Go Back</button>
            <button id="purchaseBtn" class="mt-1 ml-3 btn btn-primary col-5">Purchase</button>
        </div>
        <div class="d-flex justify-content-end">
            <img style="width:150px; height:150px" src="${items[7].img}">
        </div>
    </div>
    `;
    document.getElementById("itemPage1").append(mansionDiv);

     // 購入数(input)
    let buyingNum = document.getElementById("buyingNum");
    let total = document.getElementById("total");
    let count = 1;
    let count2 = 1;

    // 購入数 処理
    buyingNum.onclick = function() {
         if(Number(buyingNum.value)+1 > count || Number(buyingNum.value)-1 > count) {
             total.innerHTML = "Total:"+"￥"+count++*250000000;
         } else if (Number(buyingNum.value) < count || Number(buyingNum.value)+1 < count) {
            total.innerHTML = "Total:"+"￥"+count2--*250000000;
        }
    }

     //バックボタン
    let backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click",function() {
        mansionDiv.innerHTML = "";
        itemsPage.classList.add("d-block");
    })

     // 購入ボタン
    let purchaseBtn = document.getElementById("purchaseBtn");

     // 残高
    let balance = document.getElementById("balance");
    let buyingCount = 250000000

     // 購入の合計
    let buyingTotal = document.querySelectorAll(".items .item .itemBox .buyingTotal")[7];

    purchaseBtn.addEventListener("click",function(){
         //purchaseボタン押したらメインページに戻る
        mansionDiv.innerHTML = "";
        itemsPage.classList.add("d-block");

         //毎秒500000円取得
        let buying = 500000 * Number(buyingNum.value);

        const upMoney = () => {
            if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
                balance.innerHTML = balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2))+buying}`;
            }
        }
        setInterval(upMoney, 1000);

        //数字 - 残高
        if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
            balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount)}`;
            // 購入の合計 //
            buyingTotal.innerHTML = buyingNum.value;
        } else {
            alert("お金が足りません");
        }
    })
}

//Industrial Space
function industrialSpace() {
     //前のページを消去
    let itemsPage = document.getElementById("itemPage2");

    // industrialSpaceページを表示
    let industrialSpaceDiv = document.createElement("div");
    industrialSpaceDiv.innerHTML =
    `
    <div style="height:370px; background-color:royalblue" class="d-flex mt-3 ml-2 itemData p-3">
        <div class="etfData">
            <h3 style="color:white">${items[8].name}</h3>
            <h5 style="color:white">Max Purchases: ${items[8].maxPurchases}</h5>
            <h5 id="price" style="color:white" class="inPrice">Price: ${items[8].price}</h5>
            <h5 style="color:white">${items[8].description}</h5>
            <h5 class="pt-3" style="color:white">How Many would you like to purchase?</h5>
            <input id="buyingNum" type="number" min="0" max=${items[8].maxPurchases} class="form-control col-12"/>
            <div class="mt-2 d-flex justify-content-end">
                <h5 id="total" style="color:white">Total:￥0</h5>
            </div>
            <button id="backBtn" style="color:blue" class="mt-1 backBtn ml-2 btn btn-light col-5">Go Back</button>
            <button id="purchaseBtn" class="mt-1 ml-3 btn btn-primary col-5">Purchase</button>
        </div>
        <div class="d-flex justify-content-end">
            <img style="width:150px; height:150px" src="${items[8].img}">
        </div>
    </div>
    `;
    document.getElementById("itemPage1").append(industrialSpaceDiv);

    // 購入数(input)
    let buyingNum = document.getElementById("buyingNum");
    let total = document.getElementById("total");
    let count = 1;
    let count2 = 1;

    // 購入数 処理
    buyingNum.onclick = function() {
         if(Number(buyingNum.value)+1 > count || Number(buyingNum.value)-1 > count) {
             total.innerHTML = "Total:"+"￥"+count++*1000000000;
         } else if (Number(buyingNum.value) < count || Number(buyingNum.value)+1 < count) {
            total.innerHTML = "Total:"+"￥"+count2--*1000000000;
        }
    }

     //バックボタン
    let backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click",function() {
        industrialSpaceDiv.innerHTML = "";
        itemsPage.classList.add("d-block");
    })

    // 購入ボタン
    let purchaseBtn = document.getElementById("purchaseBtn");

     // 残高
    let balance = document.getElementById("balance");
    let buyingCount = 1000000000

    // 購入の合計
    let buyingTotal = document.querySelectorAll(".items .item .itemBox .buyingTotal")[8];

    purchaseBtn.addEventListener("click",function(){
        //purchaseボタン押したらメインページに戻る
        industrialSpaceDiv.innerHTML = "";
        itemsPage.classList.add("d-block");

         //毎秒2200000円取得
        let buying = 2200000  * Number(buyingNum.value);

        const upMoney = () => {
            if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
                balance.innerHTML = balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2))+buying}`;
            }
        }
        setInterval(upMoney, 1000);

        //数字 - 残高
        if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
            balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount)}`;
            // 購入の合計 //
            buyingTotal.innerHTML = buyingNum.value;
        } else {
            alert("お金が足りません");
        }
    })
}

//Hotel Skyscraper
function hotelSkyscraper() {
     //前のページを消去
    let itemsPage = document.getElementById("itemPage2");

    // hotelSkyscaperページを表示
    let hotelSkyscraperDiv = document.createElement("div");
    hotelSkyscraperDiv.innerHTML =
    `
    <div style="height:370px; background-color:royalblue" class="d-flex mt-3 ml-2 itemData p-3">
        <div class="etfData">
            <h3 style="color:white">${items[9].name}</h3>
            <h5 style="color:white">Max Purchases: ${items[9].maxPurchases}</h5>
            <h5 id="price" style="color:white" class="inPrice">Price: ${items[9].price}</h5>
            <h5 style="color:white">${items[9].description}</h5>
            <h5 class="pt-3" style="color:white">How Many would you like to purchase?</h5>
            <input id="buyingNum" type="number" min="0" max=${items[9].maxPurchases} class="form-control col-12"/>
            <div class="mt-2 d-flex justify-content-end">
                <h5 id="total" style="color:white">Total:￥0</h5>
            </div>
            <button id="backBtn" style="color:blue" class="mt-1 backBtn ml-2 btn btn-light col-5">Go Back</button>
            <button id="purchaseBtn" class="mt-1 ml-3 btn btn-primary col-5">Purchase</button>
        </div>
        <div class="d-flex justify-content-end">
            <img style="width:150px; height:150px" src="${items[9].img}">
        </div>
    </div>
    `;
    document.getElementById("itemPage1").append(hotelSkyscraperDiv);

    // 購入数(input)
    let buyingNum = document.getElementById("buyingNum");
    let total = document.getElementById("total");
    let count = 1;
    let count2 = 1;

    // 購入数 処理
    buyingNum.onclick = function() {
         if(Number(buyingNum.value)+1 > count || Number(buyingNum.value)-1 > count) {
             total.innerHTML = "Total:"+"￥"+count++*10000000000;
         } else if (Number(buyingNum.value) < count || Number(buyingNum.value)+1 < count) {
            total.innerHTML = "Total:"+"￥"+count2--*10000000000;
        }
    }

     //バックボタン
    let backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click",function() {
        hotelSkyscraperDiv.innerHTML = "";
        itemsPage.classList.add("d-block");
    })

    //  // 購入ボタン
    let purchaseBtn = document.getElementById("purchaseBtn");

     // 残高
    let balance = document.getElementById("balance");
    let buyingCount = 10000000000

    //  // 購入の合計
    let buyingTotal = document.querySelectorAll(".items .item .itemBox .buyingTotal")[9];

    purchaseBtn.addEventListener("click",function(){
        //purchaseボタン押したらメインページに戻る
        hotelSkyscraperDiv.innerHTML = "";
        itemsPage.classList.add("d-block");

         //毎秒25000000円取得
        let buying = 25000000  * Number(buyingNum.value);

        const upMoney = () => {
            if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
                balance.innerHTML = balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2))+buying}`;
            }
        }
        setInterval(upMoney, 1000);

        //数字 - 残高
        if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
            balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount)}`;
            // 購入の合計 //
            buyingTotal.innerHTML = buyingNum.value;
        } else {
            alert("お金が足りません");
        }
    })
}

//Bullet-speed Sky Railway
function railway() {
     //前のページを消去
    let itemsPage = document.getElementById("itemPage2");

    // Bullet-speedSkyRailwayページを表示
    let railwayDiv = document.createElement("div");
    railwayDiv.innerHTML =
    `
    <div style="height:370px; background-color:royalblue" class="d-flex mt-3 ml-2 itemData p-3">
        <div class="etfData">
            <h3 style="color:white">${items[10].name}</h3>
            <h5 style="color:white">Max Purchases: ${items[10].maxPurchases}</h5>
            <h5 id="price" style="color:white" class="inPrice">Price: ${items[10].price}</h5>
            <h5 style="color:white">${items[10].description}</h5>
            <h5 class="pt-3" style="color:white">How Many would you like to purchase?</h5>
            <input id="buyingNum" type="number" min="0" max=${items[10].maxPurchases} class="form-control col-12"/>
            <div class="mt-2 d-flex justify-content-end">
                <h5 id="total" style="color:white">Total:￥0</h5>
            </div>
            <button id="backBtn" style="color:blue" class="mt-1 backBtn ml-2 btn btn-light col-5">Go Back</button>
            <button id="purchaseBtn" class="mt-1 ml-3 btn btn-primary col-5">Purchase</button>
        </div>
        <div class="d-flex justify-content-end">
            <img style="width:150px; height:150px" src="${items[10].img}">
        </div>
    </div>
    `;
    document.getElementById("itemPage1").append(railwayDiv);

    // 購入数(input)
    let buyingNum = document.getElementById("buyingNum");
    let total = document.getElementById("total");
    let count = 1;
    let count2 = 1;

    // 購入数 処理
    buyingNum.onclick = function() {
         if(Number(buyingNum.value)+1 > count || Number(buyingNum.value)-1 > count) {
             total.innerHTML = "Total:"+"￥"+count++*10000000000000;
         } else if (Number(buyingNum.value) < count || Number(buyingNum.value)+1 < count) {
            total.innerHTML = "Total:"+"￥"+count2--*10000000000000;
        }
    }

     //バックボタン
    let backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click",function() {
        railwayDiv.innerHTML = "";
        itemsPage.classList.add("d-block");
    })

    //  // 購入ボタン
    let purchaseBtn = document.getElementById("purchaseBtn");

     // 残高
    let balance = document.getElementById("balance");
    let buyingCount = 10000000000000

    //  // 購入の合計
    let buyingTotal = document.querySelectorAll(".items .item .itemBox .buyingTotal")[10];

    purchaseBtn.addEventListener("click",function(){
        //purchaseボタン押したらメインページに戻る
        railwayDiv.innerHTML = "";
        itemsPage.classList.add("d-block");

         //毎秒30000000000円取得
        let buying = 30000000000  * Number(buyingNum.value);

        const upMoney = () => {
            if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
                balance.innerHTML = balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2))+buying}`;
            }
        }
        setInterval(upMoney, 1000);

        //数字 - 残高
        if (Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount) > 0) {
            balance.innerHTML = "￥ "+ `${Number(balance.innerHTML.slice(2)) - (Number(buyingNum.value) * buyingCount)}`;
            // 購入の合計 //
            buyingTotal.innerHTML = buyingNum.value;
        } else {
            alert("お金が足りません");
        }
    })
}








