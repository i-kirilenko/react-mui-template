import { useEffect, useState } from 'react'
import debounce from 'lodash/debounce'

type WindowDimensions = {
  height: number | null
  width: number | null
}

export const useWindowDimensions = () => {
  const hasWindow = typeof window !== 'undefined'

  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    height: null,
    width: null,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        height: hasWindow ? window.innerHeight : null,
        width: hasWindow ? window.innerWidth : null,
      })
    }

    handleResize()
    const debouncedHandleResize = debounce(handleResize, 300)
    window.addEventListener('resize', debouncedHandleResize)
    return () => window.removeEventListener('resize', debouncedHandleResize)
  }, [hasWindow])

  return windowDimensions
}
