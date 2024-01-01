'use client'
import { Carousel } from '@ark-ui/react'
import { css } from "../../styled-system/css"
// import { Box, Container, Flex } from '../../styled-system/jsx'
import style from "./base.module.css"
import { Control  , Root} from './app'

export const Basic = () => {
  const images = [
    './top/1.jpg',
    './top/2.jpg',
    './top/3.jpg',
    './top/4.jpg',
    './top/5.jpg',
    './top/3.jpg',
    './top/3.jpg',
    './top/4.jpg',
    './top/5.jpg',
    './top/3.jpg',
    './top/4.jpg',
    './top/5.jpg',
    './top/3.jpg',    
    './top/3.jpg',    
      ]
  return (
    <Carousel.Root
      align="center"
      spacing='10px'
      orientation="horizontal"    
      slidesPerView={2}
      loop={true}
    >
     <div className={style.root}>
      {/* <Carousel.Viewport > */}
        <Carousel.ItemGroup>
          {images.map((image, index) => (
            <Carousel.Item index={index}
              >
              <img src={image} className={style.slide} />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>
      {/* </Carousel.Viewport> */}

      <Control  >
          <Carousel.PrevTrigger className={style.button}>
              〈
          </Carousel.PrevTrigger>
          <Carousel.NextTrigger className={style.button}>
              〉
          </Carousel.NextTrigger>
      </Control>
      </div>          
    </Carousel.Root>

  )
}