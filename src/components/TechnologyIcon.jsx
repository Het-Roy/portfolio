import React from 'react';

export function ReactIcon() {
  return (
    <svg viewBox="0 0 64 64" width="20" height="20" aria-hidden="true">
      <circle cx="32" cy="32" r="5" fill="#61dafb" />
      <g
        fill="none"
        stroke="#61dafb"
        strokeWidth="2"
      >
        <ellipse cx="32" cy="32" rx="18" ry="7" />
        <ellipse cx="32" cy="32" rx="18" ry="7" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="18" ry="7" transform="rotate(120 32 32)" />
      </g>
    </svg>
  );
}

export function NodeIcon() {
  return (
    <svg viewBox="0 0 64 64" width="20" height="20" aria-hidden="true">
      <path
        d="M32 6 11 18v28l21 12 21-12V18L32 6Z"
        fill="#3c873a"
      />
      <path
        d="M32 11.5 16 20.7v22.6L32 52.5l16-9.2V20.7L32 11.5Z"
        fill="#fff"
        fillOpacity="0.08"
      />
    </svg>
  );
}

export function MongoIcon() {
  return (
    <svg viewBox="0 0 64 64" width="20" height="20" aria-hidden="true">
      <path
        d="M32 8s-9 9-9 24c0 11 6.2 18.5 8.5 20.7.3.3.7.3 1 0C34 50.5 41 43 41 32 41 17 32 8 32 8Z"
        fill="#00ed64"
      />
      <path
        d="M32 16c-3 5-5 11-5 17 0 7 2.7 12.2 5 15.3"
        stroke="#fff"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
    </svg>
  );
}

export function JSIcon() {
  return (
    <svg viewBox="0 0 64 64" width="20" height="20" aria-hidden="true">
      <rect width="56" height="56" x="4" y="4" rx="8" fill="#f7df1e" />
      <text
        x="20"
        y="40"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontWeight="700"
        fontSize="22"
        fill="#000"
      >
        JS
      </text>
    </svg>
  );
}

