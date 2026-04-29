/* =========================================================
   Captain Americano — App Logic
   Handles chat UI, submissions, suggestion chips.
   ========================================================= */

(function () {
  "use strict";

  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");
  const log = document.getElementById("chat-log");
  const chips = document.querySelectorAll(".chip");

  if (!form || !input || !log) return;

  const persona = window.CaptainPersona;

  const CAP_AVATAR_SVG =
    '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" stroke-width="1"/><polygon points="20,14 21.8,18.6 26.5,18.6 22.8,21.4 24.2,26 20,23.2 15.8,26 17.2,21.4 13.5,18.6 18.2,18.6" fill="currentColor"/></svg>';

  const USER_AVATAR_SVG =
    '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="14" r="6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 34 Q 20 22, 32 34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function appendMessage(role, text) {
    const isUser = role === "user";
    const msg = document.createElement("div");
    msg.className = "chat-msg " + (isUser ? "chat-msg--user" : "chat-msg--cap");

    const avatar = document.createElement("span");
    avatar.className = "chat-avatar";
    avatar.innerHTML = isUser ? USER_AVATAR_SVG : CAP_AVATAR_SVG;

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";
    const name = document.createElement("p");
    name.className = "chat-name";
    name.textContent = isUser ? "You" : "Captain Americano";
    const body = document.createElement("p");
    body.className = "chat-text";
    body.innerHTML = escapeHtml(text);

    bubble.appendChild(name);
    bubble.appendChild(body);
    msg.appendChild(avatar);
    msg.appendChild(bubble);
    log.appendChild(msg);

    // Scroll to bottom
    log.scrollTop = log.scrollHeight;
    return msg;
  }

  function appendTyping() {
    const msg = document.createElement("div");
    msg.className = "chat-msg chat-msg--cap";
    msg.dataset.typing = "true";

    const avatar = document.createElement("span");
    avatar.className = "chat-avatar";
    avatar.innerHTML = CAP_AVATAR_SVG;

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";
    const name = document.createElement("p");
    name.className = "chat-name";
    name.textContent = "Captain Americano";
    const dots = document.createElement("div");
    dots.className = "typing-dots";
    dots.setAttribute("aria-label", "Captain is typing");
    dots.innerHTML = "<span></span><span></span><span></span>";

    bubble.appendChild(name);
    bubble.appendChild(dots);
    msg.appendChild(avatar);
    msg.appendChild(bubble);
    log.appendChild(msg);
    log.scrollTop = log.scrollHeight;
    return msg;
  }

  function submitMessage(text) {
    const message = (text || "").trim();
    if (!message) return;

    appendMessage("user", message);
    input.value = "";

    const typing = appendTyping();

    // Simulated thinking delay — feels more human
    const delay = 500 + Math.random() * 700;
    setTimeout(function () {
      typing.remove();
      const reply = persona.respond(message);
      appendMessage("cap", reply);
    }, delay);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    submitMessage(input.value);
  });

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      const prompt = chip.getAttribute("data-prompt");
      if (prompt) {
        submitMessage(prompt);
      }
    });
  });

  // Focus input when arriving at the section
  window.addEventListener("hashchange", function () {
    if (window.location.hash === "#ask") {
      setTimeout(function () { input.focus(); }, 300);
    }
  });
})();
