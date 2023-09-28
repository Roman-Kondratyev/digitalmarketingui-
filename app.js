const btn1 = document.querySelector(`.btn1`);
let prg1 = true;

btn1.addEventListener(`click`, function () {
    const a = document.querySelector(`.one p`);
    if (prg1 === true) {
        a.style = `display: flex`;
        a = false;
    } else {
        a.style = `display: none`;
        a = true
    }

});

const btn2 = document.querySelector(`.btn2`);
let prg2 = true;

btn1.addEventListener(`click`, function () {
    const b = document.querySelector(`.two p`);
    if (prg2 === true) {
        b.style = `display: flex`;
        b = false
    } else {
        b.style = `display: none`;
        b = true
    }
});

const btn3 = document.querySelector(`.btn3`);
let prg3 = true;

btn1.addEventListener(`click`, function () {
    const c = document.querySelector(`.three p`);
    if (prg3 === true) {
        c.style = `display: flex`;
        c = false
    } else {
        c.style = `display: none`;
        c = true
    }
});

const btn4 = document.querySelector(`.btn4`);
let prg4 = true;

btn1.addEventListener(`click`, function () {
    const d = document.querySelector(`.four p`);
    if (prg4 === true) {
        d.style = `display: flex`;
        d = false
    } else {
        d.style = `display: none`;
        d = true
    }
});

