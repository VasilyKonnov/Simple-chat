var submitMessage = document.querySelector('.chat-form');
var templateWrap = document.getElementById('message-template').content;
var template = templateWrap.querySelector('.chat-message');
var message = document.querySelector('.chat-form-input');
var chatContent = document.querySelector('.chat-content');
var itemMassages = chatContent.children;
//console.log(itemMassages);
//var delButton = itemMassages.querySelector('.chat-message-button');

var deleteMessage = function(itemMassage){
    var delButton = itemMassage.querySelector('.chat-message-button');
    delButton.addEventListener('click', function(){
        itemMassage.remove();
    });
}


for(var i = 0; i < itemMassages.length; i++){
    console.log(itemMassages[i]);

    deleteMessage(itemMassages[i]);
}

submitMessage.addEventListener('submit', function (evt) {

    evt.preventDefault();

    var chatMessage = template.cloneNode(true);
    var messageInChat = chatMessage.querySelector('.chat-message-text');
    document.getElementsByClassName("chat-message-text").textContent = "newtext";
    messageInChat.textContent = message.value;
    chatContent.appendChild(chatMessage);
    message.value = '';

    deleteMessage(chatMessage);



    if(itemMassages.length > 0){

        console.log(itemMassages);
    }

})


/*

 Нужно запрограммировать мессенджер. Как должна работать программа:

 — Шаблон сообщения находится в теге template с идентификатором message-template.

 — В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.

 — Новое сообщение добавляется в конец контейнера с классом chat-content.

 — Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить».

 - Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.

 */


