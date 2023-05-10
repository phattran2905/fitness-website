import { match } from "assert";
import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Listen on the resize event
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};
export default useMediaQuery;
