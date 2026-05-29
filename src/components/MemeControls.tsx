interface IMemeControlsProps {
  topText: string;
  bottomText: string;
  topTextSize: number;
  bottomTextSize: number;
  onTopTextChange: (text: string) => void;
  onBottomTextChange: (text: string) => void;
  onTopTextSizeChange: (size: number) => void;
  onBottomTextSizeChange: (size: number) => void;
  onClearTop: () => void;
  onClearBottom: () => void;
  onSave: () => void;
}

export default function MemeControls(props: IMemeControlsProps) {
  return (
    <div className="controls">
      <div className="input-box">
        <label>Topp-text: </label>
        <input
          type="text"
          value={props.topText}
          onChange={(evt) => props.onTopTextChange(evt.target.value)}
        />
        <button onClick={props.onClearTop}>Rensa text</button>
        <br />
        <label>Storlek (Topp): </label>
        <input
          type="range"
          min="10"
          max="100"
          value={props.topTextSize}
          onChange={(evt) =>
            props.onTopTextSizeChange(Number(evt.target.value))
          }
        />
      </div>

      <div className="input-box">
        <label>Botten-text: </label>
        <input
          type="text"
          value={props.bottomText}
          onChange={(evt) => props.onBottomTextChange(evt.target.value)}
        />
        <button onClick={props.onClearBottom}>Rensa text</button>
        <br />
        <label>Storlek (Botten): </label>
        <input
          type="range"
          min="10"
          max="100"
          value={props.bottomTextSize}
          onChange={(evt) =>
            props.onBottomTextSizeChange(Number(evt.target.value))
          }
        />
      </div>
      <div>
        <button // knapp för att matcha storleken på över och bottentext
          className="matchTextSizeBtn"
          onClick={() => props.onBottomTextSizeChange(props.topTextSize)}
        >
          Matcha storleken på text (följer toppraden)
        </button>
      </div>
      <button
        onClick={props.onSave}
        style={{
          fontWeight: "900",
          border: "4px solid #694363",
        }}
      >
        Ladda ner bilden
      </button>
    </div>
  );
}
//
