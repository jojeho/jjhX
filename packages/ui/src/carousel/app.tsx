import { Carousel } from '@ark-ui/react'
import style from "./base.module.css"
import { forwardRef, type ReactNode } from 'react'
import { type CarouselControlProps ,type CarouselProps} from "@ark-ui/react/carousel"

// export const Carousel = forwardRef<HTMLDivElement, CarouselProps>((props, ref) => {
    
// }

export const Control = forwardRef<HTMLDivElement, CarouselControlProps>((props, ref) => (
   <Carousel.Control {...props} className={style.control} ref={ref}></Carousel.Control>
))

export const Root = forwardRef<HTMLDivElement, CarouselProps>((props, ref) => (
    <Carousel.Root {...props}  ref={ref}></Carousel.Root>
))
 
