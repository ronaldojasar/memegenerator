import { useState } from "react";
import html2canvas from "html2canvas";
import ImageSelector from "./components/ImageSelector";
import MemePreview from "./components/MemePreview";
import MemeControls from "./components/MemeControls";
import "./App.css";

export default function App() {
  // all state ligger i app
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSelectorOpen, setIsSelectorOpen] = useState<boolean>(false);

  const [topText, setTopText] = useState<string>("");
  const [bottomText, setBottomText] = useState<string>("");

  const [topTextSize, setTopTextSize] = useState<number>(40);
  const [bottomTextSize, setBottomTextSize] = useState<number>(40);

  // bilderna/meme templates
  const availableImages = [
    "/bearsbeetsbattlestargalactica.jpg",
    "/charlie.jpg",
    "/drake.png",
    "/monkey.jpg",
    "/spidermanpointing.webp",
    "/ucantseeme.jpg",
  ];

  // byta bild
  const handleSelectImage = (imagePath: string) => {
    setSelectedImage(imagePath);
    setIsSelectorOpen(false);

    // & rensa text och storleksvärden
    setTopText("");
    setBottomText("");
    setTopTextSize(40);
    setBottomTextSize(40);
  };

  //  ladda ner min meme
  const saveMeme = () => {
    const element = document.querySelector(".meme") as HTMLDivElement;
    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="app">
      <h2>😂⚡😎😂⚡😎</h2>
      <h1>Meme Generator</h1>

      {!isSelectorOpen && (
        <button onClick={() => setIsSelectorOpen(true)}>
          {selectedImage ? "Byt bild" : "Välj meme"}
        </button>
      )}

      {isSelectorOpen && (
        <ImageSelector
          images={availableImages}
          onSelect={handleSelectImage}
          onClose={() => setIsSelectorOpen(false)}
        />
      )}

      {selectedImage && !isSelectorOpen && (
        <div className="edit-area">
          <MemePreview
            image={selectedImage}
            topText={topText}
            bottomText={bottomText}
            topTextSize={topTextSize}
            bottomTextSize={bottomTextSize}
          />

          <MemeControls
            topText={topText}
            bottomText={bottomText}
            topTextSize={topTextSize}
            bottomTextSize={bottomTextSize}
            onTopTextChange={setTopText}
            onBottomTextChange={setBottomText}
            onTopTextSizeChange={setTopTextSize}
            onBottomTextSizeChange={setBottomTextSize}
            onClearTop={() => setTopText("")}
            onClearBottom={() => setBottomText("")}
            onSave={saveMeme}
          />
        </div>
      )}
    </div>
  );
}
