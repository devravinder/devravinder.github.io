// icon:tag | Bootstrap https://icons.getbootstrap.com/ | Bootstrap
import * as React from "react";

function IconTag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M6 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1 0a.5.5 0 10-1 0 .5.5 0 001 0z" />
      <path d="M2 1h4.586a1 1 0 01.707.293l7 7a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0l-7-7A1 1 0 011 6.586V2a1 1 0 011-1zm0 5.586l7 7L13.586 9l-7-7H2v4.586z" />
    </svg>
  );
}

export default IconTag;
