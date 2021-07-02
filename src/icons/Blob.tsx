import * as React from "react";

function SvgBlob(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <linearGradient id="blob_svg__a" x1={0} x2={1} y1={1} y2={0}>
          <stop stopColor="rgba(36.606, 34.213, 33.08, 1)" offset="0%" />
          <stop stopColor="rgba(25.814, 189.496, 198.258, 1)" offset="100%" />
        </linearGradient>
      </defs>
      <path
        fill="url(#blob_svg__a)"
        d="M23.2-26.7c6 4.1 9.3 12.2 11.9 21.3 2.6 9.1 4.4 19.2.4 25.7-4 6.6-13.7 9.7-22.3 10.4-8.5.6-15.9-1.3-22.7-4-6.8-2.8-13.2-6.4-17.6-12-4.4-5.7-7-13.4-5.8-20.6 1.1-7.2 5.9-13.9 12-18S-7.4-29.6.6-30.3c8-.7 16.6-.6 22.6 3.6z"
        transform="translate(50 50)"
        style={{
          transition: "all .3s ease 0s",
        }}
      />
    </svg>
  );
}

export default SvgBlob;
