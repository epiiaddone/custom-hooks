import { useState } from "react"
import copy from "copy-to-clipboard"

//this is console loggin the engtire copy history!!
export default function useCopyToClipboard() {
  const [value, setValue] = useState()
  const [success, setSuccess] = useState()

  const copyToClipboard = (text, options) => {
    const result = copy(text, options)
    if (result) setValue(text)
    setSuccess(result)
  }

  return [copyToClipboard, { value, success }]
}
