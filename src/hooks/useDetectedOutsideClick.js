import { useEffect } from 'react'

const useDetectedOutsideClick = (ref, handler) => {
  const clickOnBackground = (e) => {
    if (!ref.current || ref.current.contains(e.target)) return
    handler(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickOnBackground)

    return () => {
      document.removeEventListener('mousedown', clickOnBackground)
    }
  })
}

export default useDetectedOutsideClick
