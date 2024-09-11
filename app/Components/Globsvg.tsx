import type { ComponentProps } from "react";
import React from "react";

export const GlobeSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg
      width="360"
      height="360"
      viewBox="0 0 360 360"
      className="animate-spin-slow"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M180 360C279.411 360 360 279.411 360 180C360 80.5887 279.411 0 180 0C80.5887 0 0 80.5887 0 180C0 279.411 80.5887 360 180 360Z"
        fill="#24D4DE"
        fillOpacity="0.04"
      />
      <path
        d="M180.382 331.398C263.786 331.398 331.398 263.786 331.398 180.382C331.398 96.9778 263.786 29.3656 180.382 29.3656C96.9779 29.3656 29.3657 96.9778 29.3657 180.382C29.3657 263.786 96.9779 331.398 180.382 331.398Z"
        fill="#24D4DE"
        fillOpacity="0.06"
      />
      <path
        d="M180.478 306.574C250.119 306.574 306.575 250.119 306.575 180.478C306.575 110.836 250.119 54.3807 180.478 54.3807C110.836 54.3807 54.3807 110.836 54.3807 180.478C54.3807 250.119 110.836 306.574 180.478 306.574Z"
        fill="#49C0F8"
      />
      <path
        opacity="0.732096"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M95.3311 195.735C118.141 195.735 136.633 214.226 136.633 237.037C136.633 258.078 120.898 275.444 100.554 278.011L100.551 278.013C76.428 258.222 59.7785 229.657 55.4786 197.194L55.48 197.192C58.9565 196.242 62.6159 195.735 66.3937 195.735H95.3311Z"
        fill="#58A700"
      />
      <path
        opacity="0.732096"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M162.59 91.2974C162.59 111.499 148.085 128.314 128.922 131.895L128.341 131.999L128.382 132.296C128.619 134.088 128.742 135.916 128.742 137.773C128.742 160.583 110.25 179.074 87.4401 179.074H58.5027C57.176 179.074 55.8639 179.012 54.5692 178.889L54.5665 178.888C55.274 121.617 94.1611 73.5406 146.951 58.9345L146.953 58.9361C156.48 66.5021 162.59 78.1863 162.59 91.2974Z"
        fill="#58A700"
      />
      <path
        opacity="0.732096"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M249.314 153.118C272.124 153.118 290.615 171.61 290.615 194.42C290.615 201.494 288.837 208.153 285.702 213.974L295.041 215.768C297.111 216.165 299.12 216.745 301.051 217.491L301.055 217.492C294.852 237.723 283.697 255.788 269.005 270.274L249.489 270.271C230.312 270.271 214.739 254.843 214.504 235.722L211.257 235.721C188.446 235.721 169.955 217.23 169.955 194.42C169.955 171.61 188.446 153.118 211.257 153.118H249.314Z"
        fill="#58A700"
      />
      <path
        opacity="0.732096"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M241.033 69.8457C263.696 82.2766 282.123 101.468 293.601 124.706L274.213 124.708C270.958 135.27 261.12 142.946 249.489 142.946H236.511C222.224 142.946 210.642 131.365 210.642 117.078C210.642 103.34 221.352 92.1025 234.879 91.2605C234.856 90.75 234.845 90.2359 234.845 89.7192C234.845 82.3763 237.106 75.5618 240.972 69.9344L241.033 69.8457Z"
        fill="#58A700"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M259.135 253.435C266.273 253.435 272.368 257.9 274.779 264.189C266.999 272.949 258.016 280.617 248.09 286.934L210.029 286.932C200.779 286.932 193.28 279.433 193.28 270.183C193.28 260.933 200.779 253.435 210.029 253.435H259.135Z"
        fill="#BBF3F6"
      />
      <path
        d="M184.774 74.5488H164.781C155.531 74.5488 148.032 82.0475 148.032 91.2975C148.032 100.547 155.531 108.046 164.781 108.046H184.774C194.024 108.046 201.523 100.547 201.523 91.2975C201.523 82.0475 194.024 74.5488 184.774 74.5488Z"
        fill="#BBF3F6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M95.65 87.1767L106.979 87.1784C116.229 87.1784 123.728 94.677 123.728 103.927C123.728 106.194 123.277 108.356 122.461 110.329L127.849 110.328C137.099 110.328 144.598 117.827 144.598 127.077C144.598 136.327 137.099 143.826 127.849 143.826H107.856C98.606 143.826 91.1074 136.327 91.1074 127.077C91.1074 124.81 91.5579 122.648 92.3742 120.675L69.4354 120.675C76.1737 108.189 84.9564 96.9698 95.335 87.4643L95.65 87.1767Z"
        fill="#BBF3F6"
      />
    </svg>
  );
};

export const GlobeIconSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg
      className="animate-spin-slow"
      viewBox="0 0 46 46"
      fill="none"
      {...props}
    >
      <rect
        x="14.3356"
        width="29.533"
        height="29.533"
        rx="14.7665"
        transform="rotate(26.843 14.3356 0)"
        fill="#84D8FF"
      />
      <path
        d="M35.815 27.4202C39.9852 19.1801 36.7117 9.1259 28.5059 4.91498L28.42 4.87151C27.7585 4.53674 27.4936 3.7291 27.8284 3.06759C28.1631 2.40611 28.9707 2.14124 29.6322 2.47595L29.7521 2.53661C39.2561 7.42736 43.0445 19.0807 38.2105 28.6326C35.4596 34.0683 30.5066 37.657 24.9852 38.863V42.1031H27.4216C28.0945 42.1031 28.6399 42.6485 28.6399 43.3214C28.6399 43.9942 28.0945 44.5397 27.4216 44.5397H18.8936C18.2207 44.5397 17.6753 43.9942 17.6753 43.3214C17.6753 42.6485 18.2207 42.1031 18.8936 42.1031H21.3303V39.3058C18.2548 39.3855 15.1166 38.7355 12.1737 37.271L12.0537 37.2108C11.3922 36.8761 11.1273 36.0684 11.4621 35.4069C11.7968 34.7454 12.6045 34.4806 13.266 34.8153C21.5348 39 31.6303 35.6891 35.815 27.4202Z"
        fill="#FF9600"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.939 34.5711C19.3448 34.7666 16.6659 34.279 14.1754 33.0185C12.9784 32.4128 11.8994 31.6662 10.9485 30.8092C10.8494 30.0944 10.9605 29.343 11.313 28.6512C12.2294 26.8527 14.4303 26.1376 16.2288 27.054L20.5708 29.2664C22.3693 30.1828 23.0844 32.3836 22.168 34.1822C22.0988 34.3181 22.0222 34.4478 21.939 34.5711ZM35.367 17.1728C35.9334 20.2408 35.536 23.5124 34.0185 26.5109C33.112 28.3022 31.8902 29.8291 30.4548 31.0583L29.1899 30.4138C25.5928 28.581 24.1626 24.1792 25.9954 20.5822C27.7507 17.1371 31.8625 15.6797 35.367 17.1728ZM24.321 5.48865C26.3883 6.57048 27.2043 9.11783 26.1424 11.202C25.0733 13.3003 22.5056 14.1346 20.4073 13.0655L20.2654 12.9932C20.2119 14.0587 19.938 15.1304 19.4223 16.1425C17.4641 19.9856 12.7613 21.5136 8.91819 19.5555C7.85295 19.0127 6.96557 18.2591 6.28101 17.3713C6.52338 15.9462 6.9808 14.5328 7.66777 13.1754C10.8254 6.93606 17.8073 3.90455 24.321 5.48865Z"
        fill="#58CC02"
      />
    </svg>
  );
};