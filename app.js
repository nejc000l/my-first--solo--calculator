
var inpuT = document.querySelector('.input');
var inpuT2 = document.querySelector('.input2');
var button = document.querySelector('.btn');
var resault = document.getElementById('res');


button.addEventListener('click',operating);



function operating(event){
    var a = inpuT.value;
    var b = inpuT2.value;
    var k = Number(a)+ Number(b);
    resault.style.color = 'red';
    resault.innerHTML = k;
    var element = resault;
    if(k === 10){
        element.style.color = "blue" 
    }
    else if (k === 0)
    element.style.color = "red"
    else{
        element.style.color = "green"
    }
}
operating();



  //  if (decided === '+'){
     //     parseInt(a)+ parseInt(b);
      //    var k = parseInt(a)+parseInt(b);
     //     console.log(k);

   //   }else if (decided ==='*'){
   //      parseInt(a)*parseInt(b);
   //       var m =  parseInt(a)*parseInt(b);
    //      console.log(m)
    //  }else if (decided === '-'){
     //     parseInt(a)-parseInt(b);    
     //     var minu =  parseInt(a)-parseInt(b);
      //    console.log(minu);
   //   }


//function sayHello (){
  //  if (sum === 5){
    //    console.log('vic');
    //}
    // else if(sum === 10){
      //  console.log('somwhat vic')
    //}
   // else{
     //   alert('def')
    //}
//};
//sayHello();

