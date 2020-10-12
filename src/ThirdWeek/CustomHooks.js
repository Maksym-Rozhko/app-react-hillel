import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import useDocumentTitle from './hooks/useDocumentTitle';
import useOnlineStatus from './hooks/useOnlineStatus'
import { Input } from 'semantic-ui-react';
import s from './CustomHooks.module.css';

export default function CustomHooks() {
  const [ name, setName ] = useLocalStorage('name','');
  const [ title, setTitle ] = useDocumentTitle(document.title);
  const online = useOnlineStatus();


  console.log(`User is online: ${online}`)

  return (
    <div className={s.formField}>
      <Input className={s.formInput} type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)}></Input>
      <Input type="text" placeholder="Enter your title" value={title} onChange={e => setTitle(e.target.value)}></Input>
    </div>
  )
}