import { useRef } from 'react'
import ReactDOM from 'react-dom'
import { useEventListener } from '../custom-hooks'

const Dialog = ({ show = false, onClose = () => null }) => {
  const dialogRef = useRef()

  // Event listener to close dialog on click outside element
  useEventListener(
    'mousedown',
    (event) => {
      if (event.defaultPrevented) {
        return // Do nothing if the event was already processed
      }
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        console.log('Click outside detected -> closing dialog...')
        onClose()
      }
    },
    window
  )

  return show
    ? ReactDOM.createPortal(
        <div className='color:red'>
          <div
            ref={dialogRef}
          >
            <p className='text-center font-semibold text-4xl'>
              What's up{' '}
              <span className='text-white bg-red-500 py-1 px-3 rounded-md mr-1'>
                YouTube
              </span>
              ?
            </p>
          </div>
        </div>,
        document.body
      )
    : null
}

export default Dialog
