import styled from "styled-components";

const ArrowSVG = styled.svg`
  ${({ direction }) => {
    switch (direction) {
      case "up":
        return `transform: rotate(270deg);`;
      case "left":
        return `transform: rotate(180deg);`;
      case "down":
        return `transform: rotate(90deg);`;
      default:
        return;
    }
  }}
`;

const ArrowButton = ({ direction, size = "24" }) => {
  return (
    <ArrowSVG
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      direction={direction}
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </ArrowSVG>
  );
};

export default ArrowButton;
