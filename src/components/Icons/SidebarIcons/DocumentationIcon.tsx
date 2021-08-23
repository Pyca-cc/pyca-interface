function DocumentationIcon(props: any) {
  return (
    <svg
      className={props.className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99998 11.6667H7.49998C7.03998 11.6667 6.66664 11.2933 6.66664 10.8333C6.66664 10.3733 7.03998 10 7.49998 10H9.99998C10.46 10 10.8333 10.3733 10.8333 10.8333C10.8333 11.2933 10.46 11.6667 9.99998 11.6667ZM6.66664 14.1667C6.66664 13.7067 7.03998 13.3333 7.49998 13.3333H12.5C12.9608 13.3333 13.3333 13.7067 13.3333 14.1667C13.3333 14.6267 12.9608 15 12.5 15H7.49998C7.03998 15 6.66664 14.6267 6.66664 14.1667ZM14.5369 16.6667H5.46272C5.20772 16.6667 5.00022 16.48 5.00022 16.25V3.75C5.00022 3.52 5.20772 3.33333 5.46272 3.33333H10.0002V5.95833C10.0002 7.26833 11.0144 8.33333 12.2619 8.33333H15.0002V16.25C15.0002 16.48 14.7927 16.6667 14.5369 16.6667ZM11.6669 4.14833L13.9519 6.66666H12.2619C11.9336 6.66666 11.6669 6.34916 11.6669 5.95833V4.14833ZM16.4502 6.94L11.9136 1.94C11.7552 1.76583 11.5319 1.66667 11.2961 1.66667H5.46272C4.28856 1.66667 3.33356 2.60167 3.33356 3.75V16.25C3.33356 17.3983 4.28856 18.3333 5.46272 18.3333H14.5369C15.7111 18.3333 16.6669 17.3983 16.6669 16.25V7.5C16.6669 7.2925 16.5894 7.09334 16.4502 6.94Z"
      />
      <mask
        id="documentation"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="3"
        y="1"
        width="14"
        height="18"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99998 11.6667H7.49998C7.03998 11.6667 6.66664 11.2933 6.66664 10.8333C6.66664 10.3733 7.03998 10 7.49998 10H9.99998C10.46 10 10.8333 10.3733 10.8333 10.8333C10.8333 11.2933 10.46 11.6667 9.99998 11.6667ZM6.66664 14.1667C6.66664 13.7067 7.03998 13.3333 7.49998 13.3333H12.5C12.9608 13.3333 13.3333 13.7067 13.3333 14.1667C13.3333 14.6267 12.9608 15 12.5 15H7.49998C7.03998 15 6.66664 14.6267 6.66664 14.1667ZM14.5369 16.6667H5.46272C5.20772 16.6667 5.00022 16.48 5.00022 16.25V3.75C5.00022 3.52 5.20772 3.33333 5.46272 3.33333H10.0002V5.95833C10.0002 7.26833 11.0144 8.33333 12.2619 8.33333H15.0002V16.25C15.0002 16.48 14.7927 16.6667 14.5369 16.6667ZM11.6669 4.14833L13.9519 6.66666H12.2619C11.9336 6.66666 11.6669 6.34916 11.6669 5.95833V4.14833ZM16.4502 6.94L11.9136 1.94C11.7552 1.76583 11.5319 1.66667 11.2961 1.66667H5.46272C4.28856 1.66667 3.33356 2.60167 3.33356 3.75V16.25C3.33356 17.3983 4.28856 18.3333 5.46272 18.3333H14.5369C15.7111 18.3333 16.6669 17.3983 16.6669 16.25V7.5C16.6669 7.2925 16.5894 7.09334 16.4502 6.94Z"
        />
      </mask>
      <g mask="url(#documentation)">
        <rect width="20" height="20" />
      </g>
    </svg>
  );
}

export default DocumentationIcon;
