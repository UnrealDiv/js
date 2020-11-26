const clock = document.querySelector('.clock');

const tick = () => {

    const time = new Date();

    const sec = time.getSeconds();
    const min = time.getMinutes();
    const h = time.getHours();


    const html = ` ${h} : ${min} : ${sec} `;

    clock.textContent = html;


};

setInterval(tick,1000);

