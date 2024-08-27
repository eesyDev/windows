import checkNumInputs from './checkNumInputs';
import maskPhoneInput from './mask';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');
    maskPhoneInput('input[name="user_phone"]');
    
    const message = {
        loading: 'Loading...',
        success: 'Success',
        error: 'Something went wrong'
    };


//Sending request
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text()
    }

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        })
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            if (item.getAttribute('data-calc') === 'end') {
                for (let k in state) {
                    formData.append(key, state[k])
                }
            }
            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res)
                    statusMessage.textContent = message.success
                })
                .catch(() => statusMessage.textContent = message.error)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                })

        })
    })
};

export default forms;