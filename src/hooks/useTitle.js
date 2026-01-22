import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} / yesh's Cinemate`;
    });

  return null;
}
