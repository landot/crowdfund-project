import { useState } from 'react';
import './Button.css';

interface ButtonProps {
  /**
   * What background color to use
   */
  color?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What hover color to use
   */
    hoverColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export function Button({
  color,
  backgroundColor,
  label,
  hoverColor,
  ...props
}: ButtonProps) {
  const [isHover, setIsHover] = useState(false);


  return (
    <button
      type="button"
      className={'button'}
      style={{ 
        color,
        backgroundColor: isHover && hoverColor ? hoverColor : backgroundColor
      }}
      {...props}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {label}
    </button>
  );
}
