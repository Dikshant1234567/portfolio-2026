import type { ReactNode } from "react";
import { cn } from "../utils";

interface ContainerProps extends React.ComponentProps<"div"> {
    children: ReactNode;
}

function Container({ children, className, ...restProps }: ContainerProps) {
    return (
        <section
            className={cn("max-w-5xl mx-auto md:px-0 px-4", className)}
            {...restProps}
        >
            {children}
        </section>
    );
}

export default Container;