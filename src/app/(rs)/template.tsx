import React, { ReactNode } from "react";

const RSLayout = ({ children }: { children: ReactNode }) => {
  return <div className="animate-appear">{children}</div>;
};

export default RSLayout;
