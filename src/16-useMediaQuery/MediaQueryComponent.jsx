import useMediaQuery from "./useMediaQuery"

export default function MediaQueryComponent() {
  const isLarge = useMediaQuery("(min-width: 800px)")

  return <div>window width at least 800px: {isLarge.toString()}</div>
}
