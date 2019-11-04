import React, {useEffect, useRef} from 'react'

const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  // @ts-ignore
  useEffect(() => {
    function tick() {
      // @ts-ignore
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
export default useInterval
