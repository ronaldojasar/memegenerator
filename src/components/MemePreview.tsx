interface IMemePreviewProps {
  image: string;
  topText: string;
  bottomText: string;
  topTextSize: number;
  bottomTextSize: number;
}

export default function MemePreview(props: IMemePreviewProps) {
  return (
    <div className="meme">
      <img src={props.image} alt="Din valda meme" />
      <div
        className="meme-text text-top"
        style={{ fontSize: `${props.topTextSize}px` }}
      >
        {props.topText}
      </div>
      <div
        className="meme-text text-bottom"
        style={{ fontSize: `${props.bottomTextSize}px` }}
      >
        {props.bottomText}
      </div>
    </div>
  );
}
