import React from 'react'
import type { CatalogProps } from "./types";
import styles from './Catalog.module.scss'

export function Catalog(props: CatalogProps) {
    return (
        <div className={styles['Catalog']}>
            {props.children}
        </div>
    )
}