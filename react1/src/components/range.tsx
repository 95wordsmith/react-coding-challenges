import React from 'react';

interface RangeProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  min: number;
  max: number;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Range: React.FC<RangeProps> = ({ type, min, max ,...props }) => {
  return (
    <input className='bg-black cursor-pointer w-full border-3 ' type={type} min={min} max={max} {...props} />
  );
}

export default Range;
