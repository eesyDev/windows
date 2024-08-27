import IMask from 'imask';

const maskPhoneInput = (selector) => {
  const phoneInput = document.querySelectorAll(selector);

  phoneInput.forEach(input => {
    const phoneMask = IMask(input, {
      mask: '+7 (000) 000-00-00'
    });
    
  })

}

export default maskPhoneInput;


// import IMask from 'imask';

// const maskPhoneInput = (selector) => {
//   const phoneInput = document.querySelectorAll(selector);
//   //for placeholder
//   const maskPattern = '+7 (000) 000-00-00';
//   phoneInput.forEach(input => {
    
//     const phoneMask = IMask(input, {
//       mask: maskPattern,
//       placeholderChar: '_'
//     });
//     const examplePhoneNumber = maskPattern.replace(/0/g, '_');
//     input.placeholder = examplePhoneNumber;
//   })

// }

// export default maskPhoneInput;