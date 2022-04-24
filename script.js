

const toodolist = new Vue({
    el: '#lista',
    data: {
        weekendTenda: [
            {
                nome: 'Tenda',
                check: false,
            },
            {
                nome: 'Sacco a a pelo',
                check: false,
            },
            {
                nome: 'Cuscin',
                check: false,
            },
            {
                nome: 'scatolame',
                check: false,
            },
            {
                nome: 'acqua',
                check: false,
            },
            {
                nome: 'acciarino',
                check: false,
            },
            {
                nome: 'coltello',
                check: true,
            },
        ],
        nuovoOgetto: '',
    },
    methods: {
        aggiungi(){
          const ogetto = {
            nome: this.nuovoOgetto,
            check: false,
          }  
        this.weekendTenda.push(ogetto)
        },
        
        rimuovi(i){
            this.weekendTenda.splice(i, 1)
        }
    },
   
})