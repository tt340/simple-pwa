const broadCast = new BroadcastChannel("kg");

broadCast.addEventListener("message", (event) => {
  document.getElementById("anzeige").innerText = event.data;
});
document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("button").addEventListener("click", handleClick);
});

function handleClick() {
  const input = document.getElementById("input");
  broadCast.postMessage(input.value);
}
