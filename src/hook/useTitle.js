import { useEffect } from "react";

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Qoutes`
    }, [title])
    return null;
}
 
export default UseTitle;