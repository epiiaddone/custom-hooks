import { useState } from "react"
import useEffectOnce from "./useEffectOnce"

export default function EffectOnceComponent() {
  const [count, setCount] = useState(0)
  const [rand, setRand] = useState(0);

  useEffectOnce(() => setRand(Math.random()))

  return (
    <>
      <div>random number:{rand}</div>
      <div>count:{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </>
  )
}
