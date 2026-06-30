let sel = document.querySelector("select");
let dev = document.querySelector("#device");


sel.addEventListener("change",function(deta){
  dev.textContent = `${deta.target.value} device selected`;
});

