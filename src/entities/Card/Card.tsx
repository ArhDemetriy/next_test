import React from 'react'
import type { CardProps } from "./types";
import s from './Card.module.scss'

const ImageAlt = 'фото товара'

export function Card(p: CardProps) {
    return (
        <div className={s['Card']}>
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
            {!!p.tag?.length && (
                <div className={s['CardTag']}>
                    {p.tag}
                </div>
            )}
        </div>
    )
}