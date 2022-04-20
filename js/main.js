const sMenu = document.getElementById('menu_icon');
const menu = document.getElementById('show-menu');
const navigation = document.getElementsByClassName('nav');
const btn = document.getElementById('submit');
let fName = document.getElementById('fullName')
let message = document.getElementById('message')
let email = document.getElementById('email_id')


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

  if (fName.value == '' && message.value == '' && email.value == '') {
    fName.classList.add('fill-warning');
    fName.setAttribute('placeholder', 'Please fill this box');
    email.classList.add('fill-warning');
    email.setAttribute('placeholder', 'Please fill this box');
    message.classList.add('fill-warning');
    message.setAttribute('placeholder', 'Please fill this box');
    setTimeout(removeWarning, 2000);

  } else if (fName.value == '' && email.value == '') {
    fName.classList.add('fill-warning');
    fName.setAttribute('placeholder', 'Please fill this box');
    email.classList.add('fill-warning');
    email.setAttribute('placeholder', 'Please fill this box');
    setTimeout(removeWarning, 2000);

  } else if (fName.value == '' && message.value == '') {
    fName.classList.add('fill-warning');
    fName.setAttribute('placeholder', 'Please fill this box');
    message.classList.add('fill-warning');
    message.setAttribute('placeholder', 'Please fill this box');
    setTimeout(removeWarning, 2000);

  } else if (message.value == '' && email.value == '') {
    email.classList.add('fill-warning');
    email.setAttribute('placeholder', 'Please fill this box');
    message.classList.add('fill-warning');
    message.setAttribute('placeholder', 'Please fill this box');
    setTimeout(removeWarning, 2000);

  } else if (fName.value == '') {
    fName.classList.add('fill-warning');
    fName.setAttribute('placeholder', 'Please fill this box');
    setTimeout(removeWarning, 2000);

  } else if (email.value == '') {
    email.classList.add('fill-warning');
    email.setAttribute('placeholder', 'Please fill this box');
    setTimeout(removeWarning, 2000);

  } else if (message.value == '') {
    message.classList.add('fill-warning');
    message.setAttribute('placeholder', 'Please fill this box');
    setTimeout(removeWarning, 2000);

  } else {
    btn.value = 'Sending...';
    sendMail()

  };
}

function sendMail() {
  let parameters = {
    from_name: document.getElementById('fullName').value,
    email_id: document.getElementById('email_id').value,
    message: document.getElementById('message').value,
  }
  emailjs.send('service_quuge9h', 'template_4tf2otb', parameters)
    .then(function (res) {
      alert(`Thanks ${fName.value}, your message was sent`)
      btn.value = "Send Message"
      fName.value = ''
      email.value = ''
      message.value = ''
    })
}


function removeWarning() {
  fName.classList.remove('fill-warning');
  email.classList.remove('fill-warning');
  message.classList.remove('fill-warning');
  message.setAttribute('placeholder', 'Send a message and let\'s schedule a chat!');
  email.setAttribute('placeholder', 'Email here...');
  fName.setAttribute('placeholder', 'Name here...');

}