import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const useIntersection = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const { ref, inView } = useInView({
        threshold: 0.2
    });

    useEffect(() => {
        if(inView){
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [inView])

    return {
        ref,
        isVisible
    }
}