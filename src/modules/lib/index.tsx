import React, { useEffect, useState } from 'react'
const srcPass: string = '/portfolio/img/';

type Image = {
  srcName: string; 
  ext: "jpg" | "png" | "svg"; 
  alt: string;
}

export function bgPath
  (
    name: string, 
    ext: "jpg" | "png" | "svg", 
  ) {
  return srcPass + name + "." + ext;
}

export const ShowImage: React.FC<Image> = (p) => {
  return <img src={srcPass + p.srcName + "." + p.ext} alt={p.alt} />;
};

export const mediaQuery = {
  sp: 'width < 752px',
  tablet: '752px <= width < 1122px',
  pc: '1122px <= width',
}

export const useMediaQuery = (query: string) => {
  const formattedQuery = `(${query})`
  const [match, setMatch] = useState(matchMedia(formattedQuery).matches)

  useEffect(() => {
    const mql = matchMedia(formattedQuery)

    if (mql.media === 'not all' || mql.media === 'invalid') {
      console.error(`useMediaQuery Error: Invalid media query`)
    }

    mql.onchange = (e) => {
      setMatch(e.matches)
    }

    return () => {
      mql.onchange = null
    }
  }, [formattedQuery, setMatch])

  return match
}