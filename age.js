function signup(){
    let number=document.getElementById("age").value;
    let num=parseInt(number);
    if(num>=18){
       alert("Major Sign Up!!!");
    }
    else{
        alert("Miner Sign Up only!!!")
    }
}