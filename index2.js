document.querySelector("#exit").addEventListener("click", function() {
    window.location.href = "exit.html";
})
function getParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
if (Number(getParam("val")) === "NaN")
    document.querySelector("#money").innerHTML = "Bakiyeniz okunurken bir sorun oluştu.";
else 
    document.querySelector("#money").innerHTML = Number(getParam("val")) + " TRY";
if (getParam("val") === "null") 
    document.querySelector("#money").innerHTML = "0.00 TRY";