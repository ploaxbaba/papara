var nan;
if (document.referrer = "./server.html")
    nan/*pass*/;
else 
    window.location.href = "index.html";
function getParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
if (getParam("newVal") === "")
    nan/*pass*/;
else
    document.querySelector("#moneyA").innerHTML = getParam("newVal");
document.querySelector("#username2").addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        window.location.href = "server.html?type=admin&op=seeMoney&referrer=admin.html&username=" + document.querySelector("#username2").value;
    }
});
document.querySelector("#inMoney").onclick = function() {
    window.location.href = "server.html?type=admin&op=changeMoney&referrer=admin.html&username=" + document.querySelector("#username2").value + "&newVal=" +
    window.prompt("Değer");
}
document.querySelector("#outMoney").onclick = function() {
    window.location.href = "server.html?type=admin&op=changeMoney&referrer=admin.html&username=" + document.querySelector("#username2").value + "&newVal=" +
    window.prompt("Değer");
}