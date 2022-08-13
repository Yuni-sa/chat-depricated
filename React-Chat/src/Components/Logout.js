import { loggedIn } from "../App";

function Logout() {
  (async () => {
    const response = await fetch("http://localhost:4000/api/Logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const info = await response.json();
    loggedIn = false;
    console.log(info);
    return info;
  })();
}

export default Logout;
