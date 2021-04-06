const form = document.querySelector('form')
const containerHTML = document.querySelector('.container')


form.addEventListener('change', (e) => {
  const valueInput = e.target.value
  
  if(valueInput === 'value1') {
    let bolinha = document.createElement('div');
    bolinha.setAttribute('class', 'bolinha faltando')
    containerHTML.insertAdjacentElement('afterbegin', bolinha);
  }

  if(valueInput === 'value2') {
    let bolinha = document.createElement('div');
    bolinha.setAttribute('class', 'bolinha quebrado')
    containerHTML.insertAdjacentElement('afterbegin', bolinha);
  }

 
})