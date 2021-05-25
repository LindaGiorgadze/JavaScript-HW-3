const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
const form = document.querySelector('form');

fetch ('https://us-central1-js04-b4877.cloudfunctions.net/tasks')
    .then(response => response.json())
    .then (data => {
        const tasks = data.data;
        form.addEventListener ('submit', (e) => {
            e.preventDefault();
          
            let inputValue = input.value;
          
            const listItem = document.createElement('li');
            const listText = document.createElement('span');
            const deleteBtn = document.createElement('button');
            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';

            checkBox.addEventListener('change', function(event) {
                const parent = event.target.parentNode;
                if (event.target.checked) {
                    parent.classList.add('checked');
                } else {
                    parent.classList.remove('checked')
                }
            })

            listItem.appendChild(checkBox);
            listItem.appendChild(listText);


            for(let i = 0; i < tasks.length; i++) {
                const textArray = tasks[i].text;
                if (inputValue == 'tasks') {
                    const dataLi = document.createElement('li');
                    const textContent = document.createElement('span');
                    const deleteData = document.createElement('button');

                    dataLi.appendChild(checkBox);
                    dataLi.appendChild(textContent);
                    ul.appendChild(dataLi);
                    textContent.textContent = textArray;
                    dataLi.appendChild(deleteData);
                    deleteData.textContent = 'Delete';
                    deleteData.addEventListener('click', () => {
                        ul.removeChild(dataLi);
                    })

                } else {
                    listText.textContent = inputValue;
                }

            }
          
            listItem.appendChild(deleteBtn);
            deleteBtn.textContent = 'Delete';
            ul.appendChild(listItem);
          
            deleteBtn.addEventListener('click', () => {
              ul.removeChild(listItem);
            })
          
            input.value = '';
            input.focus();
        })
        
    })
    .catch(function(){
        console.log('catch error')
    });



// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   let myItem = input.value;

//   const listItem = document.createElement('li');
//   const listText = document.createElement('span');
//   const deleteBtn = document.createElement('button');

//   listItem.appendChild(listText);
//   listText.textContent = myItem;
  



//   listItem.appendChild(deleteBtn);
//   deleteBtn.textContent = 'Delete';
//   ul.appendChild(listItem);

//   deleteBtn.addEventListener('click', () => {
//     ul.removeChild(listItem);
//   })

//   input.value = '';
//   input.focus();
// })