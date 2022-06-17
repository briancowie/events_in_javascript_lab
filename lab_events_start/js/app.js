document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
const form = document.querySelector("#new-item-form")
form.addEventListener('submit', handleFormSubmit)
})
const handleFormSubmit = function(event) {
  event.preventDefault()
  console.log(event.target.title.value)
  console.log(event.target.author.value)
  const formResultParagraph = document.createElement('p');
  formResultParagraph.classList.add('form-result')
  formResultParagraph.textContent = event.target.title.value + ' ' + event.target.author.value
  console.log(formResultParagraph)
  const formResult = document.querySelector('#reading-list')
  formResult.appendChild(formResultParagraph)
}