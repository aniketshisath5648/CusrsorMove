const elem = document.getElementById('circ');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  elem.style.top = `${y}px`;
  elem.style.left = `${x}px`;
});





// function circle() {
//   window.addEventListener('mousemove', function(e) {
//     document.querySelector('.circle').style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//   })
// }


// circle();