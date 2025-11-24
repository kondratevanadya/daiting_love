
const tg = window.Telegram.WebApp;
tg.expand();

document.getElementById("user").innerHTML =
    "<b>Ваш ID:</b> " + tg.initDataUnsafe.user.id + "<br>" +
    "<b>Ваш username:</b> @" + tg.initDataUnsafe.user.username;

document.getElementById("sendData").onclick = () => {
    tg.sendData(JSON.stringify({ action: "hello_from_webapp" }));
};
