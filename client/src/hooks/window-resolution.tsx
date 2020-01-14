import { useState, useEffect } from 'react';

/**
 * react hook for getting window resolution
 */
function useWindowResolution () {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize, true);
        };
    }, [width, height]);

    return {
        width,
        height
    };
}

export default useWindowResolution;