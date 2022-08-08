export const ws = new WebSocket("ws://" + "localhost:8000" + "/websocket");
ws.onopen = function (event) { alert("socket opened:)"); }

export const sendMessage = (input) => {
  ws.send(
    JSON.stringify({
      room: "0",
      username: "user",
      text: input,
    }));
  //alert("sent!: "+input)
}
const client = ({ }) => {

}

export default client;