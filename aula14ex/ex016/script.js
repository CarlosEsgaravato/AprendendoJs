function contar() {
    var ini = document.getElementById('numInicio')
    var fim = document.getElementById('numFim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    }else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if(i < f) {
            //contragem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            //contagem regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}