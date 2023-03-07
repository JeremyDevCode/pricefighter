import { useEffect } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref component
 * @param {ReactComponent} ref Component which listens for clicks outside itself
 * @param {Function} doOnClickOutside Function executed on click outside of ref component
 */
export function useOutsideClickListener(ref, doOnClickOutside) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        doOnClickOutside()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, doOnClickOutside])
}
