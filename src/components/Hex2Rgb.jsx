import { useState } from "react";

function hexToRgb(hex) {
  const m = /^#?([a-fA-F\d]{2})([a-fA-F\d]{2})([a-fA-F\d]{2})$/.exec(hex);
  if (!m) return null;
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}

export default function Hex2Rgb() {
  const [value, setValue] = useState("#");
  const [bg, setBg] = useState("#ffffff");
  const [output, setOutput] = useState("");

  const onChange = (e) => {
    const v = e.target.value.toUpperCase();
    setValue(v);

    if (v.length === 7) {
      const valid = /^#[0-9A-F]{6}$/.test(v);
      if (valid) {
        const rgb = hexToRgb(v);
        const rgbText = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        setOutput(rgbText);
        setBg(v);
      } else {
        setOutput("Ошибка!");
        setBg("#FF4D4F");
      }
    } else {
      setOutput("");
      setBg("#ffffff");
    }
  };

  const pageStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bg,
    transition: "background-color 0.2s ease",
    margin: 0,
  };

  const cardStyle = {
    width: 320,
    padding: 16,
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    background: "#fff",
    borderRadius: 8,
  };

  const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
    padding: "10px 12px",
    fontSize: 16,
    borderRadius: 6,
    border: "1px solid #d9d9d9",
    outline: "none",
  };

  const outputStyle = {
    marginTop: 12,
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="#RRGGBB"
          maxLength={7}
          style={inputStyle}
        />
        <div style={outputStyle}>{output}</div>
      </div>
    </div>
  );
}
