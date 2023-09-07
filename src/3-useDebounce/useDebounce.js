import { useEffect } from "react"
import useTimeout from "../2-useTimeout/useTimeout"

export default function useDebounce(callback, delay, dependencies) {

  //custom hook 2-useTimeout
  const { reset, clear } = useTimeout(callback, delay)

  
  useEffect(
    reset//this is the same as ()=>{reset()}
    ,
     [...dependencies, reset])


  // no function call until user action
  useEffect(
    clear,
     [])
}
