const cardEmail = document.querySelector(".card-email");
const cardDate = document.querySelector(".card-date");
const cardTime = document.querySelector(".card-time");
const cardConfirmation = document.querySelector(".card-confirmation");
const btnNextSection = document.querySelectorAll(".btn-next-section");
const daySelectedText = document.querySelector(".day-selected-text");
const cardTimeItem = document.querySelectorAll(".card-time-item");
const calendarDays = document.querySelectorAll(".calendar-days-item");

btnNextSection.forEach((e) => {
    e.addEventListener('click', () => {
        swapCard(e.id)
    })
})

function swapCard(e) {
    switch (e) {
        case "button-card-1":
            cardEmail.style.left = "-100%";
            cardDate.style.left = "0";
            break;
        case "button-card-2":
            cardDate.style.left = "-100%";
            cardTime.style.left = "0";
            break;
        case "button-card-3":
            cardTime.style.left = "-100%";
            cardConfirmation.style.left = "0";
            break;
    }
};

cardTimeItem.forEach((e) => {
    e.addEventListener('click', () => {
        for (let i = 0; i < cardTimeItem.length; i++) {
            cardTimeItem[i].classList.remove("card-time-item-selected");
        };
        e.classList.add("card-time-item-selected");
    })
});

calendarDays.forEach((e) => {
    e.addEventListener('click', () => {
        for (let i = 0; i < calendarDays.length; i++) {
            calendarDays[i].classList.remove("day-selected");
        };
        e.classList.add("day-selected");

        daySelectedText.textContent = `${e.innerHTML} May | 30 Minute Meeting`;
    })
})