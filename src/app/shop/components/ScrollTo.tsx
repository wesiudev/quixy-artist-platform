"use client";
import * as Scroll from "react-scroll";

import { FaLink } from "react-icons/fa";

export default function ScrollTo({
  destination,
  title,
  className,
}: {
  destination: string;
  title: string;
  className?: string;
}) {
  let ScrollTo = Scroll.Link;

  return (
    <ScrollTo
      to={destination}
      smooth={true}
      duration={750}
      className={className}
    >
      {title}
    </ScrollTo>
  );
}
