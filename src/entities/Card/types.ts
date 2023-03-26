import type { TagProps } from "@/src/shared/ui/Tag"

export interface CardProps extends Partial<TagProps> {
    className?: string
    image: string
    name: string
    brand: string
    link: string
    id: number
}