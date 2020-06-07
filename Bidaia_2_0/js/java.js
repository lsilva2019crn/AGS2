var imatge0=document.getElementById('friend');
imatge0.addEventListener('click',friend);

var imatge1=document.getElementById('friend1');
imatge1.addEventListener('click',friend1);

var imatge2=document.getElementById('friend2');
imatge2.addEventListener('click',friend2);

var img0=document.getElementById('like0');
img0.addEventListener('click',like0);

var img1=document.getElementById('like1');
img1.addEventListener('click',like1);

var img2=document.getElementById('like2');
img2.addEventListener('click',like2);


function friend(){
  if(imatge0.src.match("img/add.png")){
    imatge0.src="img/friend.png";
    console.log("friend");
  }

  else{
    imatge0.src="img/add.png";
    console.log("notfriend");
  }
}

function friend1(){
  if(imatge1.src.match("img/add.png")){
    imatge1.src="img/friend.png";
    console.log("friend");
  }

  else{
    imatge1.src="img/add.png";
    console.log("notfriend");
  }
}

function friend2(){
  if(imatge2.src.match("img/add.png")){
    imatge2.src="img/friend.png";
    console.log("friend");
  }

  else{
    imatge2.src="img/add.png";
    console.log("notfriend");
  }
}

function like0(){
  if(img0.src.match("img/unlike.png")){
    img0.src="img/like.png";
    console.log("like");
  }

  else{
    img0.src="img/unlike.png";
    console.log("unlike");
  }
}

function like1(){
  if(img1.src.match("img/unlike.png")){
    img1.src="img/like.png";
    console.log("like");
  }

  else{
    img1.src="img/unlike.png";
    console.log("unlike");
  }
}

function like2(){
  if(img2.src.match("img/unlike.png")){
    img2.src="img/like.png";
    console.log("like");
  }

  else{
    img2.src="img/unlike.png";
    console.log("unlike");
  }
}
