var obg = document.getElementById('menu');
obg.addEventListener('click', func1);
function func1() {
   var x = document.getElementById('myTopnav');
   if(x.className === 'topnav') {
      x.className += ' responsive';
   } else {
      x.className = 'topnav';
   }
}