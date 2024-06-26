import { handle } from "./cmds.js";

const msg = "Welcome on my Terminal portfolio !";
const welcome = `<div class="nomobile">
Type <span data-color="red">help</span> For List Of Available Commands
`;
const sleep = (m) => new Promise((r) => setTimeout(r, m));
const welcomemsg = document.querySelector("welcomemsg");
const terminal = document.querySelector("pre");
const history = [];
let prompt = document.querySelector("#prompt-template").content.cloneNode(true);

setTimeout(async () => {
  for (let i = 0; i < msg.length; i++) {
    welcomemsg.innerText += msg[i];
    await sleep(100);
  }
  terminal.innerHTML += welcome;
  terminal.appendChild(prompt);
}, 500);

window.addEventListener("DOMContentLoaded", () => {
  document.onclick = () => {
    let prompts = document.querySelectorAll("input");
    if (!window.getSelection().toString()) prompts[prompts.length - 1].focus();
  };
    let history_ptr = 0 ;
  window.onkeydown = async (e) => {
    let prompts = document.querySelectorAll("input");
    let command = prompts[prompts.length - 1];
    if (e.key === "Enter") {
        history_ptr = 0;
      command.setAttribute("placeholder", command.value);
      command.setAttribute("readonly", true);
      document
        .querySelectorAll(".help")
        .forEach((el) => el.parentElement.remove());

      if (command.value.includes("&&")) {
        let runs = command.value.split("&&");
        for (let cmds of runs) {
          await handle(cmds, terminal, history);
          terminal.innerHTML += "\n";
        }
      } else {
        await handle(command.value, terminal, history);
      }
      history.push(command.value);

      prompt = document
        .querySelector("#prompt-template")
        .content.cloneNode(true);
      terminal.appendChild(prompt);

      prompts = document.querySelectorAll("input");
      prompts[prompts.length - 1].focus();
      document.body.scrollTop = document.body.scrollHeight;
    } else if (e.key === "ArrowUp") {
      if (history_ptr != history.length) {
        history_ptr += 1;
        command.value = history[history.length - history_ptr];
      }
    } else if (e.key === "ArrowDown") {
        history_ptr -= 1;
      if (history_ptr <= 0) {
        history_ptr = 0;
        command.value = "";
      }
      else {
        command.value = history[history.length - history_ptr];
        }
    }
  };
});
