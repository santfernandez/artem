/**/

const justChecking = (event) => {
  const h3Content = event.currentTarget.querySelector('.h3').innerText;
  const h3 = document.createElement('h3')
  const pContent = event.currentTarget.querySelectorAll('.p');
  const pArray = [...pContent]
  console.log(pArray)
  const p = document.createElement('p')
  let text = '';
  const pForEach = () => {
    pArray.forEach(element => text = element.textContent);
  }
  console.log(pForEach())
  console.log(text)
  const modalContent = document.createElement('section');
  const modalDialog = document.createElement('div');
  const modal = document.createElement('div');
  const modalDiv = document.getElementById('modal')

  
  h3.textContent = h3Content;
  p.textContent = text;
  console.log(p)
  modalContent.className = 'modal-content';
  modalDialog.className = 'modal-dialog';
  modal.className = 'modal is-visible';
  
 
  modalContent.appendChild(h3);
  modalContent.appendChild(p);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  modal.onclick = function() {
    modalDiv.removeChild(modal);
  }

  if (screen.width <= 479) {
    //console.log(modal)
    modalDiv.appendChild(modal);
  }
  else{
    console.log('funciona');
  };
};
