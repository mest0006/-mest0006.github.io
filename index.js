

const logo = [ 'logo.jpg ']

const logo1 =  [  
]




for( const logos of logo){
    logo1.push(` <img src="img/${logos}" alt="  ">`);
    
}



const $logo = document.getElementById('logo');
  $logo.innerHTML = logo1.join(' ');


 const button = document.getElementById("one").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("one").innerHTML = "Find Out More!";
}
    


