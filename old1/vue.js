new Vue({
    el: '#app',
    data: {
        lifemonstro: 100,
        lifejogador: 100,
        relatorio: [],
        jogoativo: false,
        mostraresultado: false,
        vencedor: false,
    },
    methods: {
        ataque(tipo) {
            let jogador = tipo ? 9 : 6
            let monstro = 8

            jogador = this.sorteio(jogador-5, jogador)
            this.lifemonstro -= jogador
            this.relatorio.push(`JOGADOR ATINGIU MONSTRO COM ${jogador}.`)
            monstro = this.sorteio(monstro-5, monstro)
            this.lifejogador -= monstro
            this.relatorio.push(`MONSTRO ATINGIU JOGADOR COM ${monstro}.`)
        },
        curar() {
            let jogador = 9
            let monstro = 7

            jogador = this.sorteio(jogador-5,jogador)
            this.lifejogador += jogador
            this.relatorio.push(`JOGADOR GANHOU FORÇA DE ${jogador}.`)
            monstro = this.sorteio(monstro-5,monstro)
            this.lifejogador -= monstro
            this.relatorio.push(`MONSTRO ATINGIU JOGADOR COM ${monstro}.`)
        },
        zerar(tipo) {
            this.jogoativo = tipo
            this.mostraresultado = false
            this.lifemonstro = 100
            this.lifejogador = 100
            this.relatorio = []
        },
        corbarra(tipo) {
            let cor = tipo ? this.lifejogador : this.lifemonstro
            return cor > 20 ? 'limegreen' : 'orangered'
        },
        sorteio (min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        }
    },
    computed: {},
    watch: {
        lifejogador(tam) {
            if (tam <= 0 && this.lifemonstro > 0) {
                this.vencedor = false
                this.mostraresultado = true
                this.jogoativo = false
                this.lifejogador = 0
            }
            if (tam > 100) this.lifejogador = 100
        },
        lifemonstro(tam) {
            if (tam <= 0) {
                this.vencedor = true
                this.mostraresultado = true
                this.jogoativo = false
                this.lifemonstro = 0
            }
        }
    }
})