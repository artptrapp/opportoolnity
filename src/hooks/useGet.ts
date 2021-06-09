import { useEffect, useState } from "react"

type Props = {
  url: string
}

function useGet<T>({ url }: Props) {
  const [result, setResult] = useState<T | null>(null)
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    const doFetch = async () => {
      setFetching(true)
      const response = await fetch(url)
      const jsonResponse = await response.json()
      setResult(jsonResponse as T)
      setFetching(false)
    }

    doFetch()
  }, [url])

  return {
    result,
    fetching
  }
}

export default useGet
