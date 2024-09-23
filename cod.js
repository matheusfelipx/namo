const dataInicio = new Date('2024-03-30T00:00:00');

function atualizarContador() {
    const agora = new Date();
    const tempoDecorrido = agora - dataInicio;

    const segundos = Math.floor((tempoDecorrido / 1000) % 60);
    const minutos = Math.floor((tempoDecorrido / (1000 * 60)) % 60);
    const horas = Math.floor((tempoDecorrido / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(tempoDecorrido / (1000 * 60 * 60 * 24));

    const anos = Math.floor(dias / 365);
    const meses = Math.floor((dias % 365) / 30); // Aproximação de meses

    document.getElementById('contador').innerHTML = 
        `${anos} anos, ${meses} meses, ${dias % 30} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos ❤️   `;
}

setInterval(atualizarContador, 1000);
atualizarContador(); // Chama uma vez para inicializar