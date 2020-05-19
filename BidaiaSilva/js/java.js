var imatge=document.getElementById('like');
imatge.addEventListener('click',like);

function like(){
  if(imatge.src.match("../img/unlike.png")){
    imatge.src="../img/like.png";
    console.log("like");
  }

  else{
    imatge.src="../img/unlike.png";
    console.log("dislike");
  }
