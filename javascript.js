document.getElementById("btn"),addEventListener("click",displayDate);
function displayDate(){
         document.getElementById("demo").innerHTML = Date();
}
document.querySelector('#li').style.color="red";
document.querySelector(".li").style.color="orange";

var list = document.querySelectorAll('#ul')
for(var i=0;i<list.length;i++){
         list[i].style.color="blue";
}

function change()
{
         let num = Math.floor(Math.random()*100)

         fetch('https://swapi.dev/api/people/'+num+"/")
          .then(res=>res.json())
          .then(data=>document.getElementById("name").innerText=data.name)

          fetch('https://swapi.dev/api/people/'+num+"/")
          .then(res=>res.json())
          .then(data=>document.getElementById("height").innerText=data.height)

          fetch('https://swapi.dev/api/people/'+num+"/")
          .then(res=>res.json())
          .then(data=>document.getElementById("hair").innerText=data.hair_color)
         
}