import { Link } from "react-scroll";

import React from "react";

const ScrollLink = ({ to, name, className, icon, extraProps = {} }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      {...extraProps}
      className={className}
    >
      {name}
      {icon && icon}
    </Link>
  );
};

export default ScrollLink;
