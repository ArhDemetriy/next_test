import React from 'react'
import type { TagProps } from "./types";
import s from './Tag.module.scss'
import { Tags } from './Const';

export function Tag(p: TagProps) {
    if (p.tag == null) return null

    const className = [
        s['Tag'],
        s[`Tag-${p.tag}`],
        p.className,
    ].join(' ')

    return (
        <div className={className}>
            {Tags[p.tag]}
        </div>
    )
}