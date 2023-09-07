import { useRef, useState } from "react"
import useClickOutside from "./useClickOutside"

export default function ClickOutsideComponent() {
  const [open, setOpen] = useState(false)
  const modalRef = useRef()

  useClickOutside(modalRef, () => {
    console.log('21 - closing modal');
    if (open) setOpen(false)
  })

  return (
    <>
      <button onClick={(e) => {
        setOpen(true)
        //button is not inside the modal
        e.stopPropagation();
      }}
      >Open</button>
      <div
        ref={modalRef}
        style={{
          display: open ? "block" : "none",
          backgroundColor: "blue",
          color: "white",
          width: "100px",
          height: "100px",
        }}
      >
        <span>Modal</span>
      </div>
    </>
  )
}
