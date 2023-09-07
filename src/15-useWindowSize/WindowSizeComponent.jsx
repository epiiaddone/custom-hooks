import useWindowSize from "./useWindowSize"

export default function WindowSizeComponent() {
  const { width, height } = useWindowSize()

  return (
    <div>
      window size: {width} x {height}
    </div>
  )
}
