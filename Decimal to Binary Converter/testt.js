
 
 //this sample programe convert decemel to bynary
 
 var putton = document.getElementById("ptn");

//when we click on button we call the function 
putton.onclick =function convertDecemelToBynary(){
 
  var box = document.getElementById("dd");
  //this arr for stor data 
  var data=[];
  
  var number = document.getElementById("city").value;
  //check if number greater than zero mack loop
    while(number > 0){
      //check if if number accept devision on 2 ?
      if(number % 2 > 0){
        //if not accept put "1" in the arr and Subtraction 1 and deviesion on 2
        data.push ("1");
        number = (number-1)/2;
  }
  // if realy accept put "0" in the arr  and deviesion on 2
  else if (number % 2 == 0){
    data.push ("0");
        number = (number)/2;
  }}
  
  //for(var i=1; i<=data.length;i++){
    
  //reselt[i-1]=data[data.length-i];}
  
  //make reverse to arr and convert it to string by join() 
  //and delet "," from arr to make like string 
  
  var reselt = data.reverse().join('');
  //the final code to disblay the output
  
  box.value=reselt;} ;
