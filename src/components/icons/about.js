export default function AboutLogo(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 96 96" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      >
        <g transform="translate(27.358 8)" className="prefix__path">
          <circle cx={20} cy={20} r={20} stroke="none" />
          <circle cx={20} cy={20} r={17} />
        </g>
        <path d="M22.088 58.943c5.354.1 43.124.018 49.726 0s11.337 26.282-24.9 26.054-30.179-26.153-24.826-26.054z" />
      </g>
    </svg>
  );
}
