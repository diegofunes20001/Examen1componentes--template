import React from 'react';

type IconSymbolProps = {
  size?: number;
  name: string;
  color?: string;
};

export const IconSymbol: React.FC<IconSymbolProps> = ({ size = 24, name, color = 'black' }) => {
  // Replace this with your actual icon implementation
  return (
    <span style={{ fontSize: size, color }}>
      {name}
    </span>
  );
};