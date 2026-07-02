let downloadbtn = document.querySelector("#downloadBtn");
let progress = document.querySelector("#progress");
let  status = document.querySelector("#status");
let percentage = document.querySelector("#percentage")
let count = 0
downloadbtn.addEventListener("click",function(){
    downloadbtn.textContent="downloading";

    let setinv = setInterval(function(){
        if(count<=99){
            count ++;
            progress.style.width=`${count}%`
            percentage.textContent=`${count}%`
        }
        else{
            
            downloadbtn.textContent= "download completed "
            clearInterval(setinv);
        }
        

        
  }, 10000 / 100);
});