const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
const form = document.querySelector('form');

fetch ('https://us-central1-js04-b4877.cloudfunctions.net/tasks')
    .then(response => response.json())
    .then(data => {
        const tasks = data.data;

        tasks.forEach(element => {
            const textArray = element.text;

            const listItem = document.createElement('li');
            const listText = document.createElement('span');
            const deleteBtn = document.createElement('button');
            const checkBox = document.createElement('input');
          
            checkBox.type = 'checkbox';

            listItem.appendChild(checkBox);

            checkBox.addEventListener('change', function(event) {
                const parent = event.target.parentNode;
                if (event.target.checked) {
                    parent.classList.add('checked');
                } else {
                    parent.classList.remove('checked')
                }
                });
            
            listItem.appendChild(listText);
            listText.textContent = textArray;
            listItem.appendChild(deleteBtn);
            deleteBtn.textContent = 'Delete';
            ul.appendChild(listItem);
            
            deleteBtn.addEventListener('click', () => {
              ul.removeChild(listItem);
            })
            
            input.value = '';
            input.focus();


        });
    })
    .catch (function() {
        console.log('Catch Error')
    });

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let myItem = input.value;

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const deleteBtn = document.createElement('button');
  const checkBox = document.createElement('input');

  checkBox.type = 'checkbox';

  listItem.appendChild(checkBox);

  checkBox.addEventListener('change', function(event) {
    const parent = event.target.parentNode;
    if (event.target.checked) {
        parent.classList.add('checked');
    } else {
        parent.classList.remove('checked')
    }
    });

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(deleteBtn);
  deleteBtn.textContent = 'Delete';
  ul.appendChild(listItem);

  deleteBtn.addEventListener('click', () => {
    ul.removeChild(listItem);
  })

  input.value = '';
  input.focus();
})