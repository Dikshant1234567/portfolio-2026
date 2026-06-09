import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../context/ActiveSectionContext";

interface SectionWrapperProps {
    id: string;
    children: React.ReactNode;
}

export const SectionWrapper = ({
    id,
    children,
}: SectionWrapperProps) => {
    const { setActiveSection } = useActiveSection();
    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            setActiveSection(id);
        }
    }, [inView, id, setActiveSection]);

    return <div ref={ref} id={id}>{children}</div>;
};