import React from 'react'
import styles from './Item.module.scss'
import Button from '../Button/Button'

export const Item = ({type, title, handleDelete, index, subitems, handleAddPopup}) => {

    const parentIndex = index

    return (
        <div className={styles.wrapper}>
            <div className={styles.treeText}>And</div>
            <div className={styles.treeNode}></div>
            <div className={styles.card}>
              <div className={styles.cardBar}></div>
              <div className={styles.cardContentWrapper}>
                {
                    type=='simple'
                    ? <>
                        <div className={styles.cardSimpleTitle}> {title} </div>
                        <Button onClick={()=>handleDelete(parentIndex, null)}/>
                    </>
                    : <div className={styles.advancedCardWrapper}>
                        <div className={styles.advancedCardTitleFlex}>
                            <div className={styles.advancedCardTitle}> <span>{title}</span> </div>
                            <Button onClick={()=>handleDelete(parentIndex, null)}/>
                        </div>
                        <div className={styles.itemWrapper}>
                            { subitems.map((subitem, index)=>
                                <div className={styles.item}>
                                        <div className={styles.itemTreeText}>Or</div>
                                        <div className={styles.itemTreeNode}></div>
                                        <div className={styles.itemTitleContainer}>
                                            <div className={styles.subitem}>{subitem}</div>
                                            <Button onClick={()=>handleDelete(parentIndex, index)}/>
                                        </div>
                                </div>
                            )}
                        </div>
                        <div className={styles.addButton} onClick={()=>handleAddPopup(parentIndex, true)}> + </div>
                    </div>
                }
                </div>
            </div>
        </div>
    )
}

export default Item;