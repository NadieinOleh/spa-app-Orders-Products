export function UitRightIndent(props) {

  const svgStyles = {
    cursor: 'pointer',
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      style={svgStyles}
    >
      <path
        fill="currentColor"
        // eslint-disable-next-line max-len
        d="M18.555 14a.5.5 0 0 0 .816.387l2.445-2a.5.5 0 0 0 0-.773l-2.445-2a.5.5 0 0 0-.633.773L20.71 12l-1.972 1.613a.5.5 0 0 0-.183.386zM2.5 6.5h19a.5.5 0 0 0 0-1h-19a.5.5 0 0 0 0 1zm0 4h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1zm0 4h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1zm19 3h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1z"
      ></path>
    </svg>
  );
}