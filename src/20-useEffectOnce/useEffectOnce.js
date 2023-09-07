import { useEffect } from "react"

//aparently this is a quality of life wrapper
export default function useEffectOnce(cb) {
  useEffect(cb, [])
}
