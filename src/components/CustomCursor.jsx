import React from 'react';

export default function CustomCursor({ position }) {
  const { x, y } = position;

  return (
    <div
      className="custom-cursor"
      style={{
        left: x,
        top: y,
      }}
    />
  );
}

