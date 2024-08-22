
let randomCap = document.querySelector('#captcha');

let inputBox = document.querySelector('input[type="text"]');

let button = document.querySelector('button');

let newCap = document.querySelector('#newCaptcha');

// const res = randomString();

// randomCap.textContent =res;
randomString();
function randomString(){
    let arrIndex="";
    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random()*52);
        let arr = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K',
                'l','L','m','M','n','N','O','o','p','P','Q','q','r','R','s','S','t','T','u','U','v','V','x','X','W','w','Y','y','z','Z'];
        arrIndex +=arr[randomNum];
        console.log(randomNum);
    }
    randomCap.textContent = arrIndex;
    console.log(randomCap);
    // return arrIndex;
}

button.addEventListener("click",()=>{
    
    // let len = inputBox.value;
    // let con = /[a-zA-Z]/;
    // console.log(con.test(inputBox.value));
    // if(con)
    if(randomCap.textContent.length==inputBox.value.length){
        if(randomCap.textContent == inputBox.value){

            alert("Access granted");
            inputBox.value="";
        }
        else{
            alert("Invalid");
        }
    }
    else{
        // alert(randomCap.length);
        // console.log(randomCap.textContent.length);
        // console.log(inputBox.value.length);
        alert("Invalid try again");
    }

});

newCap.addEventListener("click",()=>{
    // const res2 = randomString();
    // randomCap.textContent = res2;
    // // alert();

    randomString();
});