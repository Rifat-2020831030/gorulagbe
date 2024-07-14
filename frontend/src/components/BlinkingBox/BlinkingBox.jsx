import './BlinkingBox.css'; // Import the CSS file

const BlinkingBox = ({ color, data, unit}) => {
  return (
    <span 
      className="des-live-weight blinking-box" 
      style={{ backgroundColor: color }}
    >
      {data} {unit}
    </span>
  );
};

export default BlinkingBox;
