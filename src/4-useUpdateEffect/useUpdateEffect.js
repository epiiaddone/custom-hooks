import { useEffect, useRef } from "react"

//simple wrapper around useEffect
//just doesn't run on component mount
//only on dependency update
export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true)

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      console.log('useUpdateEffect side effect')
      return ()=>{
        console.log('useUpdateEffect clean up for first render')//no cleanup
      }
    }else{
      return ()=>{
        callback();//the call back is called in the clean up
        console.log('useUpdateEffect clean up callback')
      }
    }
  }, dependencies)
}

//useEffect:
// MOUNTED
// This is my side effect - skipped because firstRenderRef.current===true

// RE-RENDER 1:
// This is my clean up
// This is my side effect

// RE-RENDER 2:
// This is my clean up
// This is my side effect

// UN-MOUNT:
// This is my clean up