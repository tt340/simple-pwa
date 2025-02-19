const broadCast = new BroadcastChannel("kg");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker registriert mit Scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.log("Service Worker Registrierung fehlgeschlagen:", error);
      });
  });
}
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persisted().then((persistent) => {
    if (persistent) {
      console.log("Storage will not be cleared except by explicit user action");
    } else {
      console.log("Storage may be cleared by the UA under storage pressure.");
    }
  });
}

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("button").addEventListener("click", handleClick);
  document
    .getElementById("button_anzeige")
    .addEventListener("click", () => (window.location.href = "anzeige.html"));
});

function handleClick() {
  const input = document.getElementById("input");
  broadCast.postMessage(input.value);
}
