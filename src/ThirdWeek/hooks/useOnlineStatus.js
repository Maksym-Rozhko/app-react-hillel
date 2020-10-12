import {useState,useEffect} from 'react'

export default function useOnlineStatus() {
  let initialStatus = navigator.onLine;
  const [ status,setStatus ] = useState(initialStatus);

  const updateOnlineStatus = () => {
    setStatus(
      navigator.onLine
    )
  }

  useEffect(() => {
    window.addEventListener('online',updateOnlineStatus);
    window.addEventListener('offline',updateOnlineStatus);
    
    return () => {
      window.removeEventListener('online');
      window.removeEventListener('offline');
    }
  }, [initialStatus])

  return status;
}