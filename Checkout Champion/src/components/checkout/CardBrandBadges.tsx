export function VisaBadge({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="20"
      viewBox="0 0 48 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="48" height="30" rx="3" fill="#1A1F71" />
      <text
        x="24"
        y="20"
        textAnchor="middle"
        fill="white"
        fontFamily="sans-serif"
        fontSize="13"
        fontWeight="700"
        fontStyle="italic"
      >
        VISA
      </text>
    </svg>
  );
}

export function MastercardBadge({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="20"
      viewBox="0 0 48 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="48" height="30" rx="3" fill="#F2F2F2" />
      <circle cx="19" cy="15" r="9" fill="#EB001B" />
      <circle cx="29" cy="15" r="9" fill="#F79E1B" opacity="0.9" />
    </svg>
  );
}

export function HipercardBadge({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="20"
      viewBox="0 0 48 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="48" height="30" rx="3" fill="#C42126" />
      <text
        x="24"
        y="20"
        textAnchor="middle"
        fill="white"
        fontFamily="sans-serif"
        fontSize="10"
        fontWeight="700"
      >
        HIPER
      </text>
    </svg>
  );
}
