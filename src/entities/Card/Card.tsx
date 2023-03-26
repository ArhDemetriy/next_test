import React from 'react'
import type { CardProps } from "./types";
import s from './Card.module.scss'
import Image from 'next/image';

const ImageAlt = 'фото товара'

export function Card(p: CardProps) {
    return (
        <div className={s['Card']}>
            <Image src={p.image} alt={ImageAlt} className={s['CardImage']} />
        </div>
    )
}