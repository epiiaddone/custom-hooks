import { useEffect, useRef } from "react"


//doesn't quite work
//jumps from 1 to 3
export default function useRenderCount() {
  const count = useRef(1)

  useEffect(() =>{
  count.current =  count.current + 1}
  )

  return count.current
}
