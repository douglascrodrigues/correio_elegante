
const phrases = [
    'O tempo não espera por ninguém, mas você pode decidir como aproveitá-lo.', 
    'Às vezes, a jornada é mais importante do que o destino.', 
    'A verdadeira riqueza não está nos bens materiais, mas nas experiências que colecionamos.',
    'A adversidade é a pedra de amolar da sabedoria; é o teste que revela quem realmente somos.', 
];

function mostrarFraseComIntervalo(index) {
    document.getElementById('message').innerHTML = phrases[index];
    if (index < phrases.length) {
      setTimeout(() => {
        document.getElementById('message').innerHTML = phrases[index];
        mostrarFraseComIntervalo(index + 1);
      }, 5000);
    } else {
      mostrarFraseComIntervalo(0);
    }
  }
  
mostrarFraseComIntervalo(0);
