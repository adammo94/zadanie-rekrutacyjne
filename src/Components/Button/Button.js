import React from 'react'
import styles from './Button.module.scss'

export const Button = ({onClick, modifier, children}) => {
    return (
        <div
        onClick={()=>onClick()}
        className={modifier ? [`${styles.buttonWrapper}`, `${styles[modifier]}`].join(' ') : `${styles.buttonWrapper}`}>
            {
                children
                ? <div>{children}</div>
                : <div className={styles.delete}></div>
            }
        </div>
    )
}

export default Button;