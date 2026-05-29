interface IImageSelectorProps {
  images: string[];
  onSelect: (image: string) => void;
  onClose: () => void;
}

export default function ImageSelector(props: IImageSelectorProps) {
  return (
    <div className="image-picker">
      <h3>Välj en meme!</h3>
      <div>
        {props.images.map((img) => (
          <img
            key={img}
            src={img}
            alt="Meme missing"
            onClick={() => props.onSelect(img)}
          />
        ))}
      </div>
      <button onClick={props.onClose}>Stäng (Avbryt)</button>
    </div>
  );
}
