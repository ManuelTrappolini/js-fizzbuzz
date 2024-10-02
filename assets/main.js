/* //Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda: Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

//0. Tools: elenca tutti gli strumenti
// variables, for loop , console.log() ,  if/ else, operatori


//1. fase di preparazione  - creo le variabili
    let Fizz = 'Fizz'
    let Buzz = 'Buzz'
    let FizzBuzz = 'FizzBuzz'

//2. Raccolta dati - comincio con creare un ciclo con for che stampi numeri da 1 a 100 
for (let i = 1; i <= 100; i++){
    

 // 3. elaborazione dati - devo capire quali numeri da 1 a 100 sono multipli di 3 e 5 e stampare FizzBuzz 
    if( i % 3 === 0 && i % 5 === 0){
        console.log(FizzBuzz);
        
    }
// faccio un'altra condizione per i multipli di 5
// per riuscire a sostituire il multiplo di 5 con la parola Buzz
    else if( i % 5 === 0){
        console.log(Buzz);

    }
// faccio un'altra condizione per i multipli di 3 per sostituirli con la parola Buzz
    else if( i % 3 === 0){
        console.log(Fizz);
        
    }

// 4. stampo tutti i numeri da 1 a 100 in console
    else{
        console.log(i);  
    }
}





 
   
