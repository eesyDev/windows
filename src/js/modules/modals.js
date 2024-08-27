// const modals = () => {
//     function bindModal(trigger, modal, close) {
//         trigger.addEventListener('click', (e) => {
//             if (e.target) {
//                 e.preventDefault();
//             }
//             modal.style.display = 'block';
//             // document.body.style.overflow = 'hidden';
//             document.body.classList.add('modal-open');
//         });

//         close.addEventListener('click', () => {
//             modal.style.display = 'none';
//             // document.body.style.overflow = '';
//             document.body.classList.remove('modal-open');
//         });
//         modal.addEventListener('click', (e) => {
//             if (e.target === modal) {
//                 modal.style.display = 'none';
//                 // document.body.style.overflow = '';
//                 document.body.classList.remove('modal-open');
//             }
//         })
//     }

//     const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
//           modalEngineer = document.querySelector('.popup_engineer'),
//           modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

//     bindModal(callEngineerBtn, modalEngineer, modalEngineerClose)
// }


const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const close = document.querySelector(closeSelector);
        const modal = document.querySelector(modalSelector);
        const windows = document.querySelectorAll('[data-modal]');
        const scroll = calcScrollbar();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                windows.forEach(item => {
                    item.style.display = 'none';
                })
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = `${scroll}px`;
                // document.body.classList.add('modal-open');
            });
        })

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            windows.forEach(item => {
                item.style.display = 'none';
            })
            // document.body.classList.remove('modal-open');
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                })
                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');
            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    }

    function calcScrollbar() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div)

        let scrollbarWidth = div.offsetWidth - div.clientWidth;
        console.log(div.offsetWidth)
        console.log(div.clientWidth)

        div.remove();

        return scrollbarWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    //calculator-popup
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)
    // showModalByTime('.popup', 60000)
}
export default modals;