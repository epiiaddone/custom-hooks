import { useState } from "react"
import useCopyToClipboard from "./useCopyToClipboard"

export default function CopyToClipboardComponent() {
  const [copyToClipboard, { success }] = useCopyToClipboard()
  const [textInput, setTextInput] = useState('');

  return (
    <>
      <button onClick={() => copyToClipboard(textInput)}>
        {success ? "Copied" : "Copy Text"}
      </button>
      <input
      type="text"
      value={textInput}
      onChange={(e)=>setTextInput(e.target.value)}
      />
    </>
  )
}
