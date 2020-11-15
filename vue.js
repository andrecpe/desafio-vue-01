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

            monstro = this.sorteio(monstro - 5, monstro)
            this.lifejogador -= monstro
            this.relatorio.unshift(`MONSTRO ATINGIU JOGADOR COM ${monstro}`)
            jogador = this.sorteio(jogador - 5, jogador)
            this.lifemonstro -= jogador
            this.relatorio.unshift(`JOGADOR ATINGIU MONSTRO COM ${jogador}`)
        },
        curar() {
            let jogador = 9
            let monstro = 7

            monstro = this.sorteio(monstro - 5, monstro)
            this.lifejogador -= monstro
            this.relatorio.unshift(`MONSTRO ATINGIU JOGADOR COM ${monstro}`)
            jogador = this.sorteio(jogador - 5, jogador)
            this.lifejogador += jogador
            this.relatorio.unshift(`JOGADOR GANHOU FORÇA DE ${jogador}`)
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
            return cor > 20 ? 'bg-success' : 'bg-danger'
        },
        sorteio(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        rela(num) {
            return num % 2 ? "list-group-item-danger" : "list-group-item-success"
        }
    },
    computed: {},
    watch: {
        lifejogador(tam) {
            if (tam <= 0) {
                this.lifejogador = 0
                if (this.lifemonstro > 0) {
                    this.vencedor = false
                    this.mostraresultado = true
                    this.jogoativo = false
                }
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