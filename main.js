// Selección de elementos
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

// Sonidos hover
const hover1 = document.getElementById('hoverSound1');
const hover2 = document.getElementById('hoverSound2');
const hover3 = document.getElementById('hoverSound3');
const hover4 = document.getElementById('hoverSound4');
const hover5 = document.getElementById('hoverSound5');

// Sonidos click
const click1 = document.getElementById('clickSound1');
const click2 = document.getElementById('clickSound2');
const click3 = document.getElementById('clickSound3');
const click4 = document.getElementById('clickSound4');
const click5 = document.getElementById('clickSound5');


// Configuración de eventos para el Botón 1
btn1.addEventListener('mouseenter', () => {
    hover1.currentTime = 0;
    hover1.play();
});

btn1.addEventListener('mouseleave', () => {
    hover1.pause();
});

btn1.addEventListener('click', () => {
    click1.currentTime = 0;
    click1.play();
});

// Configuración de eventos para el Botón 2
btn2.addEventListener('mouseenter', () => {
    hover2.currentTime = 0;
    hover2.play();
});

btn2.addEventListener('mouseleave', () => {
    hover2.pause();
});

btn2.addEventListener('click', () => {
    click2.currentTime = 0;
    click2.play();
});

// Configuración de eventos para el Botón 3
btn3.addEventListener('mouseenter', () => {
    hover3.currentTime = 0;
    hover3.play();
});

btn3.addEventListener('mouseleave', () => {
    hover3.pause();
});

btn3.addEventListener('click', () => {
    click3.currentTime = 0;
    click3.play();
});

// Configuración de eventos para el Botón 4
btn4.addEventListener('mouseenter', () => {
    hover4.currentTime = 0;
    hover4.play();
});

btn4.addEventListener('mouseleave', () => {
    hover4.pause();
});

btn4.addEventListener('click', () => {
    click4.currentTime = 0;
    click4.play();
});

// Configuración de eventos para el Botón 5
btn5.addEventListener('mouseenter', () => {
    hover5.currentTime = 0;
    hover5.play();
});

btn5.addEventListener('mouseleave', () => {
    hover5.pause();
});

btn5.addEventListener('click', () => {
    click5.currentTime = 0;
    click5.play();
});


let played = false;
const scroll = document.getElementById('scroll_Sound');


window.addEventListener('wheel', (event) => {
  if (!played) {
    const audio = document.getElementById('scroll_Sound');
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          played = true;
          console.log("Sonido reproducido.");
        })
        .catch((error) => {
          console.log("No se pudo reproducir el sonido:", error);
        });
    }
  }
}, { once: true });
