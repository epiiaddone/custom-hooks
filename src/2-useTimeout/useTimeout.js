import { useCallback, useEffect, useRef } from "react"

export default function useTimeout(callback, delay) {

  //this is a ref because
  //if the function is called multiple times with the same callback
  //no additional setTimeouts are created
  const callbackRef = useRef(callback)

  //this is a ref so that it can be cleared later
  const timeoutRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  //useCallback caches the function definition between re-renders
  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  useEffect(() => {
    set()

    //clean up
    return clear//this is the same as: return ()=>{clear()}
 
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}
