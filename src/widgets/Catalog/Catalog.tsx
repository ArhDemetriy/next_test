import React from 'react'
import type { CatalogProps } from "./types";
import s from './Catalog.module.scss'
import { Card } from '@/src/entities/Card';

export function CatalogWidget(p: CatalogProps) {
    return (
        <div className={s['Catalog']}>
            {p.products.map(product => (
                <Card
                    {...product}
                    key={product.id}
                />))}
        </div>
    )
}