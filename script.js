let num = 10;
let count = setInterval(function(){
  if (num>0 ){console.log(num);
  num--}
  else {
    clearInterval(count)
  }

  } , 1000);