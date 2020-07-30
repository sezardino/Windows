import {chectInputForNumbers} from './utils';

const forms = (url, info) => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

  const messages = {
    loading: 'идет отправка',
    success: 'отправлено',
    error: 'ошибка'
  };
  
  chectInputForNumbers('input[name="user_phone');

  const postData = async (url, data) => {
    const response = await fetch(url, {
      method: 'Post',
      body: data
    });

    return await response.text();
  };

  const clearInputs = () => {
    inputs.forEach((input) => input.value = '');
  };


  form.forEach(element => {
    element.addEventListener('submit', (evt) => {
        evt.preventDefault();

      const statusMassage = document.createElement('div');
      statusMassage.classList.add('status');
      element.append(statusMassage)
      statusMassage.textContent = messages.loading;

      const formData = new FormData(element);
      
      if (element.getAttribute('data-calc') === 'end') {
        for (let key in info) {
          formData.append(key, info[key]);
        }
      };
      
      postData(url, formData)
        .then(response => {
          console.log(response);
          statusMassage.textContent = messages.success;
          clearInputs();
        })
        .catch(() => statusMassage.textContent = messages.error)
        .finally(() => {
          setTimeout(() => statusMassage.remove(), 5000);
        });
    })
  });
};

export default forms;