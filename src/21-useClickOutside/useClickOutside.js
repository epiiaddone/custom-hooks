import useEventListener from "../13-useEventListener/useEventListener"

export default function useClickOutside(ref, cb) {
  //this event listener is permanently on the document
  //regardless of wether the modal has been opened or not
  useEventListener(
    "click",
    e => {
      if (ref.current == null || ref.current.contains(e.target)) return
      cb(e)
    },
    document
  )
}
