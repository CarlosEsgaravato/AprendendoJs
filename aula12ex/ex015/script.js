function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert(`[ERRO] Verifique os dados.`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.classList.add('resize-img'); // Adiciona a classe para poder estilizar a img com css
        if (fsex[0].checked) {
            genero = 'Homem'
            img.setAttribute('src', 'homem.png')
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            img.setAttribute('src', 'mulher.png')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }

}