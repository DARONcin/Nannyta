// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I think I've got my sight for you", time: 30 },
  { text: "I don't mean to let it brew", time: 35 },
  { text: "I thought I thought it through", time: 40 },
  { text: "Now come on, you know I just get confused", time: 43 },
  { text: "Come get your funky love story", time: 46 },
  { text: "I love it when the skies can't sleep", time: 50 },
  { text: "I left a message encased in me", time: 54 },
  { text: "So, bye-bye (so, bye-bye)", time: 57 },
  { text: "A flawless ending", time: 59 },
  { text: "So beautiful", time: 61 },
  { text: "You're so", time: 65 },
  { text: "♪", time: 68 },
  { text: "You're so", time: 73 },
  { text: "♪", time: 75 },
  { text: "Let's take a trip down a dark place, baby", time: 82 },
  { text: "Look for me now, I'm not that (crazy)", time: 85 },
  { text: "Let's talk about what makes you happy", time: 89 },
  { text: "Cause I know (I know)", time: 93 },
  { text: "I'm calling for you", time: 94 },
  { text: "Come get your funky love story", time: 97 },
  { text: "I love it when the skies can't sleep", time: 101 },
  { text: "I left a message encased in me", time: 105 },
  { text: "So, bye-bye (so, bye-bye)", time: 108 },
  { text: "A flawless ending", time: 110 },
  { text: "So beautiful", time: 113 },
  { text: "(You're so beautiful) my love is turning kinda grey", time: 116 },
  { text: "(I love it when you sing) my heart is looking the other way", time: 120 },
  { text: "(So beautiful) my love is turning kinda grey", time: 124 },
  { text: "(She loves it when you sing) my heart is looking the other way", time: 127 },
  { text: "♪", time: 133 },
  { text: "Come get your funky love story", time: 148 },
  { text: "I love it when the skies can't sleep", time: 153 },
  { text: "I left a message encased in me", time: 156 },
  { text: "So, bye-bye (so, bye-bye)", time: 159 },
  { text: "A flawless ending", time: 161 },
  { text: "(So beautiful) come get your funky love story", time: 163 },
  { text: "(So beautiful) I love it when the skies can't sleep", time: 167 },
  { text: "(So beautiful) I left a message encased in me", time: 171 },
  { text: "So, bye-bye (so, bye-bye)", time: 175 },
  { text: "A flawless ending", time: 177 },
  { text: "So beautiful", time: 179 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
