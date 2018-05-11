// Listen for submit
document.getElementById('calculatebutton').addEventListener('click',function(e){
  // hide results
  document.getElementById('results').style.display='none'; 

 // show loader
 document.getElementById('loading').style.display='block'; 

 setTimeout(calculateResult,2000);

 e.preventDefault();
});

/*

*/
// Calculate result
function calculateResult(){
//alert('Button pressed');
// collect all variables
const amount =  document.getElementById('amount');
const intrest =  document.getElementById('intrest');
const years =  document.getElementById('years');
// showing variables
const monthlyPayment =  document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalIntrest = document.getElementById('total-intrest');

const principle = parseFloat(amount.value);
const calculatedIntrest = parseFloat(intrest.value)/100/12;

const calculatePayment = parseFloat(years.value) * 12;

// compute the monthly payment

const x = Math.pow(1 + calculatedIntrest,calculatePayment);

const monthly = (principle*x*calculatedIntrest)/(x-1);
if(isFinite(monthly)){
monthlyPayment.value = monthly.toFixed(2);
totalPayment.value = (monthly * calculatePayment).toFixed(2);

totalIntrest.value = ((monthly * calculatePayment)- principle).toFixed(2);


 // loading results
 document.getElementById('results').style.display='block'; 

 // hide loader
 document.getElementById('loading').style.display='none'; 
}
else{
  showError('Please check your number');
  document.getElementById('loading').style.display='none';
}



}

// show error
function showError(error){
  // Create a div
  const errorDiv = document.createElement('div');

  // Get element
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';
  // create tect node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv,heading);

  // clear error after three sec

  setTimeout(clearError,3000);
}

// clear error function
function clearError(){
  document.querySelector('.alert').remove();
}