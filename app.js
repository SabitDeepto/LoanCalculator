var form = document.getElementById('loan-form')

form.addEventListener('submit', function(e){
	document.getElementById('results').style.display = 'none'
	document.getElementById('loading').style.display = 'block'

	setTimeout(calculateResults, 1000)

	e.preventDefault()
})

function calculateResults(){
	
	const p = document.getElementById('amount').value

	const i = document.getElementById('interest').value
	const r = parseFloat(i/100) 

	const t = document.getElementById('years').value

	const monthlyPayment = document.getElementById('monthly-payment')
	const totalPayment = document.getElementById('total-payment')
	const totalInterest = document.getElementById('total-interest')



	const calculateTotalInterest = p*r*t
	const calculateTotalPayment =  parseInt(calculateTotalInterest) + parseInt(p) 
	const calculateMonthlyPaymet = (parseInt(calculateTotalPayment) / (12*t))

	if (isFinite(calculateMonthlyPaymet)){
		monthlyPayment.value = calculateMonthlyPaymet.toFixed(2)
		totalInterest.value = calculateTotalInterest.toFixed(2)
		totalPayment.value = calculateTotalPayment.toFixed(2)

		document.getElementById('results').style.display = 'block'
		document.getElementById('loading').style.display = 'none'
	}else{
		showError('please check your numbers')
	}
	
}

function showError(error){
	document.getElementById('results').style.display = 'none'
	document.getElementById('loading').style.display = 'none'

	const errorDiv = document.createElement('div') //create div

	const card = document.querySelector('.card') 
	const heading = document.querySelector('.heading')

	errorDiv.className = 'alert alert-danger' //add class

	errorDiv.appendChild(document.createTextNode(error))  // append to div

	card.insertBefore(errorDiv, heading)  //insert error above heading

	setTimeout(clearError, 2000)

}

function clearError(){
	document.querySelector('.alert').remove()
}