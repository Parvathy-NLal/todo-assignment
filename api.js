function ajax(){




    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        
      if (this.readyState == 4 && this.status == 200) {
          
          var response = JSON.parse(this.responseText);

        //   var Jpeople=response.people;

          var myobj = document.getElementById("content");
          myobj.remove();
          var count = 0;
          var tab =document.getElementById("myTable");
          var row1 = tab.insertRow(0);
          var cel1 = row1.insertCell(0);
          var cel2 = row1.insertCell(1);
          var cel3 = row1.insertCell(2);
          var cel4 = row1.insertCell(3);
          cel1.innerHTML = "USER ID";
          cel2.innerHTML = "ID";
          cel3.innerHTML = "TITLE";
          cel4.innerHTML = "COMPLETED";
            
              

           var output="";
           var user="";
           var id1 = ""; 
           
           for(var i=0;i<response.length;i++){



           output =  response[i].title;
           user = response[i].userId;
           id1 = response[i].id;
           var cmp = response[i].completed;

           var table = document.getElementById("myTable");
           var row = table.insertRow(i+1);
           var cell1 = row.insertCell(0);
           var cell2 = row.insertCell(1);
           var cell3 = row.insertCell(2);
           var cell4 = row.insertCell(3);




            cell1.innerHTML = user;
            cell2.innerHTML = id1;
            cell3.innerHTML = output;
          if(cmp==false){

            cell4.innerHTML = "<input type=checkbox id=check disabled>";
           }
           else{
            cell4.innerHTML =  "<input type=checkbox  onclick=checkbox1(); class=check1>";


          }


         }
              
         
// 
   
        // if(count>5){
        //   alert("count greater than 5");
        // }



          // document.getElementById("content").innerHTML =output;
 

             }
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos", true);// xhttp.open("GET","ajax.txt", true);earlier it was txt file to access from our folder//
  
    xhttp.send();
  }