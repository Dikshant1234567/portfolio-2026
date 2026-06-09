import React from "react";
import { cn } from "../utils";

interface ChildContainerProps {
  id: string;
  classname?: string;
  children: React.ReactNode;
}

function ChildContainer({ id, classname, children }: ChildContainerProps) {
  return (
    <section
      id={id}
      className={cn("min-h-screen pt-36 px-8 space-y-8", classname)}
    >
      {children}
    </section>
  );
}

export default ChildContainer;
