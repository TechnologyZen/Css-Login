//This Was Made By Zenith
function show() {
  let pwd = document.getElementById('pwd');
  if (pwd.type === "password") {
    pwd.type = "text";
  } else {
    pwd.type = "password";
  }
}

function submit() {
  let txt = document.getElementById('txt');
  let user = document.getElementById('user').value;
  let use = user;
  let pwd = document.getElementById('pwd').value;
  let pw = pwd;
  if (use == '') {
    document.getElementById('user').style.border = "3px solid red";
  }
  if (use != '') {
    document.getElementById('user').style.border = "none";
  }
  if (pw == '') {
    document.getElementById('pwd').style.border = "3px solid red";
  }
  if (pw != '') {
    document.getElementById('pwd').style.border = "none";
  }
  if (user !== ''){
  if(use, pw != ""){
  txt.style.display = "block";
  setTimeout(function() {
    txt.style.display = "none";    
    document.getElementById('text').innerHTML = 'Hello ' + user;
  }, 500)
  setTimeout(function(){document.getElementById('text').innerHTML = '';}, 7000)
}

  }
}