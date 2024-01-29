import { useEffect } from "react";
import { useState } from "react";

function Content() {
const [avatar, setAvatar] = useState();

useEffect(() => {
return () => {
avatar && URL.revokeObjectURL(avatar.preview);
};
}, [avatar]);
const handlePreviewAvatar = (e) => {
const file = e.target.files[0];
file.preview = URL.createObjectURL(file);
setAvatar(file);
e.target.value = null;
console.log(123);
};
return (

<div>
<input type="file" onChange={handlePreviewAvatar} />
{avatar && <img src={avatar.preview} alt="" width="80%" />}
</div>
);
}

export default Content;
