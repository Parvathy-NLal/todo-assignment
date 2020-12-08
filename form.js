let email= document.getElementById("exampleInputEmail1");
// let pwd= document.getElementById("pwd");
let pwd= document.getElementById("exampleInputPassword1");
let error = document.getElementById("error");
let error1 = document.getElementById("error1");



// function validate(){
   
//     //A-Za-z0-9 can be replaced with \w

//     if(email.value=="admin"){
//         error.innerHTML = "Valid";
//         error.style.color = "green";
//         if(pwd.value==1234){
//             error1.innerHTML="Valid";
//             error1.style.color = "green";
//             return true;
//         }
//         else{
//             error1.innerHTML = "Invalid";
//             error1.style.color= "red";
//             return false;

//         }
    
//     }
//     else{
//         error.innerHTML = "Invalid";
//         error.style.color= "red";
//         return false;
//     }
// }



function validate(callback){
   
    //A-Za-z0-9 can be replaced with \w

    if(email.value=="admin"){
        error.innerHTML = "Valid";
        error.style.color = "green";
        if(pwd.value==12345){
            error1.innerHTML="Valid";
            error1.style.color = "green";
            callback();
            
        }
        else{
            error1.innerHTML = "Invalid";
            error1.style.color= "red";
            return false;

        }
    
    }
    else{
        error.innerHTML = "Invalid";
        error.style.color= "red";
        return false;
    }
}

function redirect1(){
    return true;
}



    var ele = document.getElementsByClassName("check1");
    // function checkbox1(){
        
    //     count=0;
    //     for(var i=0;i<=ele.length;i++){


    //     if(ele[i].checked===true){
    //         count++;
            
    //     }
    //     if(count==5){
    //     alert(count);
    //     break;
    //    }
        
        

    //     }        
         
    //     return true;
    // }
     
    function checkbox1(){
    var promise = new Promise(function(resolve,reject){
        count=0;
          for(var i=0;i<=ele.length;i++){


             if(ele[i].checked===true){
                 count++;
            
                 }
            if(count==5){
        
                 break;
                 }
        
         }
        if(count==5){
        resolve("Congrats!! 5 tasks have been successfully completed.");
         }
         else{
            reject("Error");
         }
     });

    promise
      .then(function(s){
        alert(s);
      })
      .catch(function(e){
        console.log(e);
      })
  }

    
