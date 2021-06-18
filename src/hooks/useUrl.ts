import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function useUrl() {
    const history = useHistory()
    const [url, setUrl] = useState<string | null>(null)

    useEffect(() => {
        setUrl(window.location.href)
        const unlisten = history.listen((location) => {
            setUrl(location.pathname)
        })

        return () => {
            unlisten()
        }
    })

    return url
}