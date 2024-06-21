document.addEventListener("DOMContentLoaded", function() {

    let divmenubar = document.querySelector('.divmenubar');
    let cartDiv = document.querySelector('.cartdiv');
    let accountDiv = document.querySelector('.accountdiv');
    let choiceDiv = document.querySelector('.choicediv');
    let cart = document.querySelector('.cart');
    let account = document.querySelector('.account');
    let choice = document.querySelector('.choice');
    let closeButtons = document.querySelectorAll('.closeimg3');

    function showDivAbove(div) {
    if (!div.dataset.initialized) {
        let currentTop = div.getBoundingClientRect().top;
        let newTop = currentTop - window.innerHeight * 0.8;
        div.style.top = newTop + 'px';
        div.dataset.initialized = true;
    }
    div.style.display = 'block';
    }

    cart.addEventListener('click', function() {
    cartDiv.style.display = 'block';
    accountDiv.style.display = 'none';
    choiceDiv.style.display = 'none';
    showDivAbove(cartDiv);
    });

    account.addEventListener('click', function() {
    cartDiv.style.display = 'none';
    accountDiv.style.display = 'block';
    choiceDiv.style.display = 'none';
    showDivAbove(accountDiv);
    });

    choice.addEventListener('click', function() {
    cartDiv.style.display = 'none';
    accountDiv.style.display = 'none';
    choiceDiv.style.display = 'block';
    showDivAbove(choiceDiv);
    });


    for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
        cartDiv.style.display = 'none';
        accountDiv.style.display = 'none';
        choiceDiv.style.display = 'none';
    });
    }

    divmenubar.addEventListener('mousedown', function(e) {
    e.preventDefault();

    let shiftX = e.clientX - divmenubar.getBoundingClientRect().left;
    let shiftY = e.clientY - divmenubar.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        divmenubar.style.left = pageX - shiftX + 'px';
        divmenubar.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    divmenubar.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', onMouseMove);
        divmenubar.onmouseup = null;
    });
    });

    divmenubar.ondragstart = function() {
    return false;
    };

    // form

    const modal = document.getElementById("modal");
    const openModalBtn = document.querySelector(".posterhovertext");
    const closeModalBtn = document.querySelector(".close");

    // Открыть модальное окно при клике на кнопку
    openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
    });

    // Закрыть модальное окно при клике на крестик
    closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
    });

    // Закрыть модальное окно при клике вне его области
    window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    });

    // Отправка формы
    const form = document.getElementById("myForm");
    form.addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Здесь можно добавить код для отправки данных формы на сервер
    alert("Форма отправлена!");
    modal.style.display = "none"; // Закрываем модальное окно после отправки
    form.reset(); // Сбрасываем содержимое формы
});

                
});
