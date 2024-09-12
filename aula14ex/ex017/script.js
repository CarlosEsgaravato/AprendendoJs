function gerar() {
    var numero = document.getElementById('txtn').value;
    var seltab = document.getElementById('seltab');
    seltab.innerHTML = ''; // Limpa o resultado anterior

    if (numero === '') {
        var option = document.createElement('option');
        option.textContent = 'Por favor, insira um número.';
        seltab.appendChild(option);
        return;
    }

    for (var i = 1; i <= 10; i++) {
        var item = document.createElement('option');
        item.textContent = `${numero} x ${i} = ${numero * i}`;
        seltab.appendChild(item);
    }
}