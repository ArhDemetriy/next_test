import React from 'react'
import type { CardProps } from "./types";
import styles from './Card.module.scss'

export function Card(props: CardProps) {
    return (
        <div className={styles['Card']}>
            {props.children}
        </div>
    )
}