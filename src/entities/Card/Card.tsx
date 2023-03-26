import React from 'react'
import type { CardProps } from "./types";
import s from './Card.module.scss'
import { Tag } from '@/src/shared/ui/Tag';

const ImageAlt = 'фото товара'

export function Card(p: CardProps) {
    return (
        <div className={s['Card']}>
            {p.tag && <Tag tag={p.tag} className={s['CardTag']} />}
            <img
                className={s['CardImage']}
                src={p.image}
                alt={ImageAlt}
            />
            <div className={s['CardName']}>
                {p.name}
            </div>
            <div className={s['CardBrand']}>
                {p.brand}
            </div>
        </div>
    )
}