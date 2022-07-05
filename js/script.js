window.onload = function(){
    var perfis=[];
    perfis.push({nome: 'Walbinho', icon:'1',})
    perfis.push({nome: 'Bia', icon:'2',})
    perfis.push({nome: 'Lucas', icon:'3',})
    perfis.push({nome: 'Milena', icon:'4',})
    perfis.push({nome: 'Samuel', icon:'5',})
    perfis.push({nome: 'Yasmim', icon:'6',})
    var perfilsecao = document.getElementById('perfis');
    // array.length
    for (var index = 0; index < 7; index++) {
        perfilsecao.innerHTML+=`<div class='perfil'>
            <div style='background-image: url(../imgs/icons/${perfis[index].icon}.png);'>
            </div>
            <h2>${perfis[index].nome}</h2>
        </div>`;
    }
}
