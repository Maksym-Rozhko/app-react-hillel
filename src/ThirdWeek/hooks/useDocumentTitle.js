import { useState } from 'react'

export default function useDocumentTitle() {
  const [ title, setTitle ] = useState('Занятия | Hillel LMS');
  
  const setValue = value => {
    setTitle(document.title = value);
  }

  return [ title, setValue ];
}
