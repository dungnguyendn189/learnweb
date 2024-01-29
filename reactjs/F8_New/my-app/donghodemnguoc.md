import { useEffect } from "react";
import { useState } from "react";

function Content() {
const [countdown, setCountdown] = useState(180);

useEffect(() => {
const timerID = setInterval(() => {
setCountdown(countdown - 1);
}, 1000);
return () => clearInterval(timerID);
}, [countdown]);
return (
<div>
<h1>{countdown}</h1>
</div>
);
}

export default Content;
