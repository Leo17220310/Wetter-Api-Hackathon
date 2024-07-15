import React from 'react';

export function Header() {
  return (
    <>
      <div className="border-4 fixed  top-0 left-0 w-full bg-white z-50 p-4 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-sun-snow"
        >
          <path d="M10 9a3 3 0 1 0 0 6" />
          <path d="M2 12h1" />
          <path d="M14 21V3" />
          <path d="M10 4V3" />
          <path d="M10 21v-1" />
          <path d="m3.64 18.36.7-.7" />
          <path d="m4.34 6.34-.7-.7" />
          <path d="M14 12h8" />
          <path d="m17 4-3 3" />
          <path d="m14 17 3 3" />
          <path d="m21 15-3-3 3-3" />
        </svg>
        <h1 className="text-xl font-bold ml-4">Weather Analytics</h1>
      </div>
    </>
  );
}

export default Header;
