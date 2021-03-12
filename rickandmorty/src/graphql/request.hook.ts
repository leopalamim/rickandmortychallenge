import { useCallback, useState } from 'react'
import { client } from './client'

export const useRequest = <Response>(queryOrMutation: string) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Response>(undefined)
  const [error, setError] = useState(undefined)

  const fetch = useCallback(
    async (variables?: unknown) => {
      setLoading(true)
      try {
        const result = await client.request<Response>(queryOrMutation, variables)
        setData(result)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    },
    [queryOrMutation]
  )

  return { loading, data, error, fetch }
}