import { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(0);

  const feed = (amount) => {
    setLevel((prevLevel) => prevLevel + amount);
  };

  const reset = () => {
    setLevel(0);
  };

  const imageSrc =
  level > 100
      ? "https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSGobOgNAaRVNvqAD1f9E8yK9T9vIC.jpg" 
      :level > 99
      ? "https://marketeeronline.co/archives/375887/news-%E0%B9%84%E0%B8%A7%E0%B8%A3%E0%B8%B1%E0%B8%A5%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%80%E0%B8%94%E0%B9%89%E0%B8%87-9" 
      : "https://marketeeronline.co/archives/375887/news-%E0%B9%84%E0%B8%A7%E0%B8%A3%E0%B8%B1%E0%B8%A5%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%80%E0%B8%94%E0%B9%89%E0%B8%87-9";

  return (
    <>
      <h1>Level {level}</h1>
      <img src={imageSrc} alt="หมูเด้ง" height={400 + level} />
      <br />

      <button onClick={() => feed(5)} style={{ margin: "0 10px" }} aria-label="Feed with watermelon">
        <img
          src="https://s.isanook.com/he/0/ud/6/32261/watermelon.jpg"
          alt="แตงโม"
          height={100}
        />
      </button>
      <button onClick={() => feed(10)} style={{ margin: "0 10px" }} aria-label="Feed with pumpkin">
        <img
          src="https://spfresh.co.th/wp-content/uploads/2022/12/%E0%B8%9F%E0%B8%B1%E0%B8%81%E0%B8%97%E0%B8%AD%E0%B8%87-2.jpg"
          alt="ฟักทอง"
          height={100}
        />
      </button>
      <button onClick={() => feed(20)} style={{ margin: "0 10px" }} aria-label="Feed with grass">
        <img
          src="https://mpics.mgronline.com/pics/Images/566000005450103.JPEG"
          alt="หญ้า"
          height={100}
        />
      </button>
      <br />
      <button onClick={reset} style={{ margin: "20px" }} aria-label="Start over">
        Start Over
      </button>
    </>
  );
}