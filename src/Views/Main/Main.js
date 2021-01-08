import styles from './Main.module.scss'
import Item from '../../Components/Item/Item'
import Popup from '../../Components/Popup/Popup'
import { useState } from 'react'

export const Main = () => {

  const arr = [
    {title: 'Age 40+', children: [], type: 'simple'},
    {title: 'Ehnicity', children: ["Black", "Hispanic"], type: 'advanced'},
    {title: 'Income yearly 45k USD+', children: [], type: 'simple'}
  ]

  const [array,setArray] = useState(arr)
  const [index, setIndex] = useState(null)
  const [nested, setNested] = useState(false)
  const [popupVisibility, setPopupVisibility] = useState(false)

  const handleDelete = (index, subIndex) => {
    let arrCopy = array
    console.log(arrCopy)
    if (subIndex!==null) {
      console.log(index, subIndex)
      arrCopy[index].children.splice(subIndex,1)
    } else {
      arrCopy.splice(index,1)
    }
    setArray([...arrCopy])
  }

  const handleClosePopup = () => {
    setPopupVisibility(false)
  }

  const handleAddPopup = (id, nested) => {
    setNested(nested)
    setIndex(id)
    setPopupVisibility(true)
  }
  const handleAddItem = (title, id, type) => {
    let arrCopy = array
    console.log(arrCopy)
    if (id!==null) {
      arrCopy[index].children.push(title)
    }
    else {
      arrCopy.push({title: title, children: [], type: type})
    }
    setArray([...arrCopy])
    setPopupVisibility(false)
  }

  return (
    <>
        <div className={styles.wrapper}>
        <div className={styles.card}>
            <div className={styles.people}> People </div>
            <div className={styles.tree}>
                {array.map((item, index)=>
                    <Item title={item.title} subitems={item.children} handleAddItem={handleAddItem} type={item.type} index={index} handleAddPopup={handleAddPopup} handleDelete={handleDelete}/>
                )}
            </div>
            <div className={styles.outerButton} onClick={()=> {setIndex(null); setNested(false); setPopupVisibility(true)}}>
            <div className={styles.innerButton}> + </div>
            </div>
        </div>
        </div>
        {popupVisibility ? <Popup id={index} nested={nested} handleAddItem={handleAddItem} handleClosePopup={handleClosePopup}/> : null}
    </>
  );
}

export default Main;
