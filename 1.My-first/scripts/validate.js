var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.form', {
  colorWrong: 'red',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    mail: {
      required: true,
      email: true
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone);
        return Number(phone) && phone.length === 10
      }
    },
    text: {
        required: true,
        minLength: 1
    }
  },
  messages: {
      mail: {
          required: "Вы не ввели e-mail"
      },
      name: "Вы не ввели имя", 
      tel: {
          required: "Вы не ввели телефон",
          function: "Недостаточно количество символов"
      },
      text: "Введите, пожалуйста текст"
  }
});