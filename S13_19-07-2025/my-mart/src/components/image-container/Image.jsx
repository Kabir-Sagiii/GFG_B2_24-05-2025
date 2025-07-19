import { useState } from "react";

function Image() {
  const [image, setImage] = useState(
    "https://wallpapercave.com/wp/wp4923992.png"
  );

  const [title, setTitle] = useState("React JS");

  function changeToNode() {
    setImage(
      "https://tse1.mm.bing.net/th/id/OIP.IwqM3b1uW0WV8gq1chMc9wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
    );
    setTitle("NodeJS");
  }

  function changeToReact() {
    setImage("https://wallpapercave.com/wp/wp4923992.png");
    setTitle("React JS");
  }

  return (
    <div>
      <h2>{title}</h2>
      <img
        src={image}
        width={500}
        height={300}
        onMouseEnter={changeToNode}
        onMouseLeave={changeToReact}
      />
      <br />
      <br />
      <button onClick={changeToReact}>React</button>&nbsp;&nbsp;
      <button onClick={changeToNode}>Node</button>
    </div>
  );
}

export default Image;
