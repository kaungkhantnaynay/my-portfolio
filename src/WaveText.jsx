import React from 'react';
import './wave.css';

export default function WaveText() {

  const line1 = "I'm Kaung Khant Nay";
  const line2 = "a Full Stack Web Developer";

  const renderWave = (text) =>
    text.split("").map((char, index) => (
      <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <h2 className="text-5xl leading-[1.5] font-extrabold text-green-700 mt-4 wave-text text-center">
      {renderWave(line1)}
      <br />
      {renderWave(line2)}
    </h2>
  );
}

