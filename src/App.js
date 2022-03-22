import { useEffect, useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [online, SetOnline] = useState(navigator.onLine);
  const innerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("online", function () {
      console.log("online");
      SetOnline(true);
      //return online;
    });

    window.addEventListener("offline", function (e) {
      SetOnline(false);
      console.log("offline");
    });
  }, [online]);

  //console.log(online + "axas");
  return (
    <div className="App" ref={innerRef}>
      {online === true ? "Online" : "offline"}
    </div>
  );
}
