import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems (event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                // if (elem.length > 1) {
                //     state[prop] = i;
                // } else {
                //     state[prop] = item.value;
                // }
                switch(item.nodeName) {
                    case 'SPAN':
                        //console.log('span');
                        state[prop] = i;
                        break;
                    case 'INPUT' : 
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое'
                            //console.log('checkbox');
                            //only one allowed checkbox
                            elem.forEach((box, j) => {
                                box.checked = false
                                if (i == j) {
                                    box.checked = true
                                }
                            })
                        } else {
                            //console.log('input');
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        //console.log('select');
                        state[prop] = item.value;
                        break;
                }
                console.log(state)
            })
        })
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');



    // windowForm.forEach((item, i) => {
    //     item.addEventListener('click', () => {
    //         state.form = i;
    //         console.log(state);
    //     })
    // })
}

export default changeModalState;