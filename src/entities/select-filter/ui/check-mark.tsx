import { FC } from "react";

interface CheckMarkProps {
  stroke: string;
}

export const CheckMark: FC<CheckMarkProps> = ({ stroke }) => {
  return (
    <svg
      width="17"
      height="8"
      viewBox="0 0 17 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66663 0.999999L7.88568 6.33061C8.33506 6.7158 8.99819 6.7158 9.44758 6.33061L15.6666 1"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
