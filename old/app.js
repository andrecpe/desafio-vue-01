new Vue({
    el: '#desafio',
    data: {
        nome: 'André',
        idade: 4,
        imagem: 'http://4.bp.blogspot.com/-SKPA4ogtPlc/VwLBCd_aGkI/AAAAAAABNow/M-Q7oL16e4UAWzZm1cHlQplpvmlMWhTDg/s1600/cac63409.gif'
    },
    methods: {
        tres() { return this.idade * 3 },
        numero: () => Math.random()
    }
})