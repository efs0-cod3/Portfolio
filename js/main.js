const sMenu = document.getElementById('menu_icon');
const menu = document.getElementById('show-menu');
const navigation = document.getElementsByClassName('nav');
const btn = document.getElementById('submit');
const fName = document.getElementById('fullName')
const form_message = document.getElementById('message')
const email = document.getElementById('email_id')


// activate and deactivate menu button
sMenu.addEventListener('click', () => {
  menu.classList.toggle('menu_active')
})

// function caller
window.onscroll = function () {
  scrollFunction()
};
// function that will be triggered when whindow is scrolled
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    menu.classList.add('menu--scrolled')
  } else {
    menu.classList.remove('menu--scrolled')
  }
}


for (let i = 0; i < navigation.length; i++) {
  navigation[i].addEventListener('click', () => {
    menu.classList.remove('menu_active')
  })
}

// form
// emailJs API
document.querySelector('#form').addEventListener('submit', form)

function form(e) {
  e.preventDefault()

  if (fName.value == '' && form_message.value == '' && email.value == '') {
    fName.classList.add('fill-warning');
    fName.setAttribute('placeholder', 'Please fill this box');
    email.classList.add('fill-warning');
    email.setAttribute('placeholder', 'Please fill this box');
    form_message.classList.add('fill-warning');
    form_message.setAttribute('placeholder', 'Please fill this box');
    setTimeout(removeWarning, 2000);

  } else if (fName.value == '' && email.value == '') {
    fName.classList.add('fill-warning');
    fName.setAttribute('placeholder', 'Please fill this box');
    email.classList.add('fill-warning');
    email.setAttribute('placeholder', 'Please fill this box');
    setTimeout(removeWarning, 2000);

  } else if (fName.value == '' && form_message.value == '') {
    fName.classList.add('fill-warning');
    fName.setAttribute('placeholder', 'Please fill this box');
    form_message.classList.add('fill-warning');
    form_message.setAttribute('placeholder', 'Please fill this box');
    setTimeout(removeWarning, 2000);

  } else if (form_message.value == '' && email.value == '') {
    email.classList.add('fill-warning');
    email.setAttribute('placeholder', 'Please fill this box');
    form_message.classList.add('fill-warning');
    form_message.setAttribute('placeholder', 'Please fill this box');
    setTimeout(removeWarning, 2000);

  } else if (fName.value == '') {
    fName.classList.add('fill-warning');
    fName.setAttribute('placeholder', 'Please fill this box');
    setTimeout(removeWarning, 2000);

  } else if (email.value == '') {
    email.classList.add('fill-warning');
    email.setAttribute('placeholder', 'Please fill this box');
    setTimeout(removeWarning, 2000);

  } else if (form_message.value == '') {
    form_message.classList.add('fill-warning');
    form_message.setAttribute('placeholder', 'Please fill this box');
    setTimeout(removeWarning, 2000);

  } else {
    btn.value = 'Sending...';
    let parameters = {
      from_name: fName.value,
      email_id: email.value,
      message: form_message.value,
    }
    emailjs.send('service_quuge9h', 'template_4tf2otb', parameters)
      .then(function (res) {
        alert(`Thanks ${fName.value}, your message was sent`)
        btn.value = "Send Message"
        fName.value = ''
        email.value = ''
        form_message.value = ''
      })

  };
}

function removeWarning() {
  fName.classList.remove('fill-warning');
  email.classList.remove('fill-warning');
  message.classList.remove('fill-warning');
  message.setAttribute('placeholder', 'Send a message and let\'s schedule a chat!');
  email.setAttribute('placeholder', 'Email here...');
  fName.setAttribute('placeholder', 'Name here...');
}