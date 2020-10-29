import {postData} from '../services/services';

const forms = () => {
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]');

    function clearInputs() {
        inputs.forEach(input => {
            input.value = "";
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = "No file selected";
        });
    }

    const messages = {
        success: "Thank you, we'll call you back!",
        loading: "Loading...",
        failure: "No connection with the server.",
        spinner: "assets/img/spinner.gif",
        ok: "assets/img/ok.png",
        fail: "assets/img/fail.png"
    };

    const path = {
        design: "assets/server.php",
        question: 'assets/question.php'
    };


    upload.forEach(item => {
        item.addEventListener('input', () => {
            console.log(item.files[0]);

            let dots;

            const arr = item.files[0].name.split('.');

            if (arr[0].length > 5) {
                dots = '...';
            } else { 
                dots = '.';
            }

            const name = arr[0].substring(0, 5) + dots + arr[1];

            item.previousElementSibling.textContent = name;
        });
    });

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Container(Form parent) of icon and text message
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.parentNode.appendChild(statusMessage);

            // Hiding form
            form.classList.add("animated", "fadeOutUp");
            setTimeout(() => {
                form.style.display = "none";
            }, 400);

            /////   Create and adding process icon
            let statusImg = document.createElement('img');
            statusImg.classList.add('status');
            statusImg.setAttribute('src', messages.spinner);
            statusImg.classList.add("animated", "fadeInUp");
            statusMessage.appendChild(statusImg);
            /////   Create and adding process text
            let textMessage = document.createElement('div');
            textMessage.textContent = messages.loading;
            statusMessage.appendChild(textMessage);


            const formData = new FormData(form);
            // const obj = {};
            // formData.forEach((value, key) => {
            //     obj[key] = value;
            // });
            // const json = JSON.stringify(obj);

            let api;

            if (form.closest('.popup-design') || form.classList.contains('calc_form')) {
                api = path.design;
            } else {
                api = path.question;
            }   

            console.log(api);

            postData(api, formData)
                .then(data => {
                    console.log(data);
                    statusImg.setAttribute('src', messages.ok);
                    textMessage.textContent = messages.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', messages.fail);
                    textMessage.textContent = messages.failure;
                })
                .finally(() => {
                    clearInputs();
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display = 'block';
                        form.classList.remove('fadeOutUp');
                        form.classList.add('fadeInUp');
                    }, 3000);
                });

        });
    });
};
export default forms;