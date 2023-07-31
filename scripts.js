const chatMessages = document.getElementById("chat-messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

const socket = new WebSocket("ws://your-websocket-server-url");

socket.onmessage = (event) => {
  const message = event.data;
  addMessageToChat(message);
};

function addMessageToChat(message) {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message !== "") {
    socket.send(message);
    addMessageToChat("You: " + message);
    messageInput.value = "";
  }
});

messageInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendButton.click();
  }
});
