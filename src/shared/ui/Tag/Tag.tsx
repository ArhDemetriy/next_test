import React from 'react'
import type { TagProps } from "./types";
import s from './Tag.module.scss'

const ImageAlt = 'фото товара'

export function Tag(p: TagProps) {
    return (
        <div className={s['Tag']}>
            <img
                className={s['TagImage']}
                src={p.image}
                alt={ImageAlt}
            />
            <div className={s['TagName']}>
                {p.name}
            </div>
            <div className={s['TagBrand']}>
                {p.brand}
            </div>
            {!!p.tag?.length && (
                <div className={s['TagTag']}>
                    {p.tag}
                </div>
            )}
        </div>
    )
}