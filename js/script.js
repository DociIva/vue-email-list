//console.log('CIAOOOOO');
//Descrizione
//Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail 
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista con Vue JS e Axios.

// A istanza Vue
const app = new Vue({
    el: '#app',
    data: { 
       email: [],
       emails: 10,
       
    }, 
     // per chiamare Api
    created() { 
        
    
         
        for(let i = 0; i < 10 ; i++) {

            // chiamata | GET con che metodo
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
 
             //Then funzioni di callback per i casi di successo | catch istruzione ti consente di gestire l'errore
              .then(result => {

               //console.log(result.data);
               
                 //this.email.push(result.data.response);
                 //console.log(this.email)
                 //cosa sto prendendo fai la referenza dentro
                 this.referenza = result.data.response;
                 console.log(this.referenza); 
             
                  
                 // mettere dentro l'array tutti gli elementi
                 // prendi l'array vuoto e e metti denttro la referenza 
                   this.email.push(this.referenza);
                 
                 // console.log(this.referenza);
             
            })
            
            
        
        };
            
    },
    methods: {

    }

        
    
    


   
});


 
