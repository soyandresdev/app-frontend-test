import React from "react";

export default function Logout({ fill = "#ffffff", ...restProps }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...restProps}>
      <rect width="24" height="24" fill="none" rx="0" ry="0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2H16V7.8V9H14.8H13H12H11.8V6.2H6.2V17.8H11.8V15H12H13H14.8H16V16.2V22H2V2ZM14.8 16.2H13V19H5V5H13V7.8H14.8V3.2H3.2V20.8H14.8V16.2ZM17 14V17L22 12L17 7V10H7V14H17ZM18.2 9.9L20.3 12L18.2 14.1V12.8H8.2V11.2H18.2V9.9Z"
        fill={fill}
      />
    </svg>
  );
}
