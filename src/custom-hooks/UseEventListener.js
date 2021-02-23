import { useEffect, useRef } from 'react'

const useEventListener = (
  eventType = '',
  listener = () => null,
  target = null,
  options = null
) => {
  //缓存监听器
  const savedListener = useRef()
  useEffect(() => {
    savedListener.current = listener
  }, [listener])

  useEffect(() => {
    if (!target?.addEventListener) return
    // 取出listener
    const eventListener = (event) => savedListener.current(event)
    // 添加监听
    target.addEventListener(eventType, eventListener, options)
    return () => {
      // 组件销毁时候 移除监听器
      target.removeEventListener(eventType, eventListener, options)
    }
  }, [target, eventType, options])
}

export default useEventListener
