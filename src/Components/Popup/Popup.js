import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons'

import styles from './Popup.module.scss'
import Button from '../Button/Button'

export const Popup = ({handleAddItem, id, nested, handleClosePopup}) => {

    const [title, setTitle] = useState('')
    const [type, setType] = useState('simple')
    const [error, setError] = useState(false)

    const handleChange = (e)=> {
        setTitle(e.target.value)
    }

    const addItem = (title, id) => {
        if (title.length === 0) {
            setError('This field cannot be empty')
        }
        else if (title.length>30){
            setError('max 30 characters')
        }
        else {
            setError(false)
            handleAddItem(title, id, type)
        }
    }

    const handleChangeRadio = (e) => {
        if (e.target.checked) setType(e.target.value)
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.popupContainer}>
                <div className={styles.title}>
                    Add new field
                </div>
                {
                    error
                    ? <div className={styles.error}>{error}</div>
                    : null
                }
                <input type='text' className={styles.input} value={title} onChange={(e)=>handleChange(e)}/>
                {
                    !nested
                    ? <div className={styles.radioButtons}>
                        <span>
                            <input type='radio' id='simple' value='simple' checked={type === 'simple'} onClick={handleChangeRadio}/>
                            <label for='simple'>simple</label>
                        </span>
                        <span>
                            <input type='radio' id='advanced'  value='advanced' checked={type === 'advanced'} onClick={handleChangeRadio}/>
                            <label for='advanced'>advanced</label>
                        </span>
                    </div>
                    : null
                }
                <div className={styles.popupButtons}>
                    <Button modifier={'accept'} onClick={()=>addItem(title, id)}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </Button>
                    <Button modifier={'decline'} onClick={()=>handleClosePopup()}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Popup