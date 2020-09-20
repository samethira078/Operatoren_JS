//Samet Hira
//Software Developer

//It starts a function and only succeeds to work if the user has pressed the button associated with the "onclick" line.
function mijnSom(){

//Alert that number starts with 12.
alert("Uw begin getal is 12.");

//Starting number.
const GETAL_EEN_INPUT = 12;

/* Prompt for the user to enter a number. 
If it's a number, it continues, if not, it keeps asking until the person enters a number. */
var getal_twee_input = prompt("Vul uw eerste getal in: ");
while(isNaN(getal_twee_input)){
getal_twee_input = prompt("Geen getal ingevoerd. Probeer het opnieuw: ");
		}
var getal_drie_input = prompt("Vul uw tweede getal in: ");
while(isNaN(getal_drie_input)){
getal_drie_input = prompt("Geen getal ingevoerd. Probeer het opnieuw: ");
		}
var getal_vier_input = prompt("Vul uw derde getal in: ");
while(isNaN(getal_vier_input)){
getal_vier_input = prompt("Geen getal ingevoerd. Probeer het opnieuw: ");
		}
var getal_vijf_input = prompt("Vul uw vierde getal in: ");
while(isNaN(getal_vijf_input)){
getal_vijf_input = prompt("Geen getal ingevoerd. Probeer het opnieuw: ");}

//It changes the numbers to int & calculates the numbers in the order stated in the written theory.
const OPTELLEN_INPUT = (Number(GETAL_EEN_INPUT) + Number(getal_twee_input));
const VERMENIGVULDIGEN_INPUT = (Number(OPTELLEN_INPUT) * Number(getal_drie_input));
const DELEN_INPUT = (Number(VERMENIGVULDIGEN_INPUT) / Number(getal_vier_input));
const MINNEN_INPUT = (Number(DELEN_INPUT) - Number(getal_vijf_input));

//It shows the result of the calculation on the website with the operators as strings.
document.write(GETAL_EEN_INPUT + "+" + getal_twee_input + "*" + getal_drie_input + "/" + getal_vier_input + "-" + getal_vijf_input + "=  " + MINNEN_INPUT); }