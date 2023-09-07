import { useState } from "react"
import useEventListener from "../13-useEventListener/useEventListener"

//one bug
//fist time hovered is set to true is not correct
export default function useHover(ref) {
  const [hovered, setHovered] = useState(false)

  useEventListener("mouseover", () => setHovered(true), ref.current)
  useEventListener("mouseout", () => setHovered(false), ref.current)

  return hovered
}
