let chat = document.querySelector('.chat-widget');

let textBox = document.querySelector('.chat-widget__input');

let messages = document.querySelector( '.chat-widget__messages' );

let robotMessages = ['Здравствуйте, чем вам помочь?','Мы направим ваше обращение оператору','Могу помочь вам чем-то еще?','Все операторы сейчас заняты, вскоре вам ответит первый освободившийся оператор','Ожидайте ответа оператора'];

document.addEventListener('click', () => {
  chat.classList.add('chat-widget_active');
});

document.addEventListener('keydown', e => {
  if (e.key == 'Enter') {
    let message = textBox.value;

    var time = new Date();
    
    var timeStr = time.toLocaleTimeString();
    let rand = Math.floor(Math.random()*robotMessages.length);

    let robotValue = robotMessages[rand];

    if (message !== '') {
      messages.innerHTML += `
      <div class="message message_client">
      <div class="message__time">${timeStr}</div>
      <div class="message__text">
      ${message}
        </div>
        </div>
      `;
      textBox.value = '';
      messages.innerHTML += `
      <div class="message ">
        <div class="message__time">${timeStr}</div>
        <div class="message__text">
          ${robotValue}
            </div>
            </div>
         `;
    

    } else {
      alert('Строка пуста')
    }      
   }
});