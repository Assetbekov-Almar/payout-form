const fromBalanceCurrencySection = document.querySelector('.from_balance_currency_section')
const paymentCurrencySection = document.querySelector('.payment_currency_section')
const paymentDetailsSection = document.querySelector('.payment_details_section')
const submitFormBtn = document.querySelector('.submit_form_section')
const currencyFromBalance = document.querySelectorAll('input[name="from_balance_currency"]')
const currencyFromBalanceArray = [...currencyFromBalance]
const paymentCurrency = document.querySelectorAll('input[name="payment_currency"]')
const paymentCurrencyArray = [...paymentCurrency]
const checkboxAllAvailableAmount = [...document.querySelectorAll('.checkbox_all_available_amount')]

window.addEventListener('DOMContentLoaded', () => {
	paymentCurrencySection.classList.add('d-none')
	paymentDetailsSection.classList.add('d-none')
	submitFormBtn.classList.add('d-none')   
	fromBalanceCurrencySection.classList.add('in_focus_attention')
	paymentCurrencySection.classList.add('in_focus_attention')
})

currencyFromBalanceArray.forEach(currencyFromBalanceBtn => {
	currencyFromBalanceBtn.addEventListener('change', () => {
		paymentCurrencySection.classList.remove('d-none')
		fromBalanceCurrencySection.classList.remove('in_focus_attention')
	})
})

paymentCurrencyArray.forEach(paymentCurrencyBtn => {
	paymentCurrencyBtn.addEventListener('change', () => {
		paymentDetailsSection.classList.remove('d-none')
		submitFormBtn.classList.remove('d-none')
		paymentCurrencySection.classList.remove('in_focus_attention')
	})
})

checkboxAllAvailableAmount.forEach(checkbox => {
	checkbox.addEventListener('change', () => {
		let paymentAmountParent = checkbox.closest('.payment_amount')
		let enteredPaymentAmount = paymentAmountParent.querySelector('.entered_payment_amount')
		if (checkbox.checked) {
			enteredPaymentAmount.disabled = true
		}
		else {
			enteredPaymentAmount.disabled = false
		}	
	})
})


