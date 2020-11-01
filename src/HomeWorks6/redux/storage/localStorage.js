export const saveLocal = (id,state) => {
  try{
    const serializedState = JSON.stringify(state)
    localStorage.setItem(id,serializedState)
  } catch(err) {
    console.log(err)
  }
}

export const loadLocal = (id) => {
  try{
    const serializedState = localStorage.getItem(id)
    if(serializedState === null) {
      return []
    }
    return JSON.parse(serializedState)
  } catch(err) {
    console.log(err)
  }
}
