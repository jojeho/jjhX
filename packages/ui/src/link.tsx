import * as React from 'react';
import Link from 'next/link'
import {css,cva} from "../styled-system/css"
// import styles from './BoxLink.module.css';
// import { classNames } from '@lib/classNames';

const cssBoxkLink=cva(
  {
    base:{
      bg:'blue.100'

    },
    variants:{
      visual:{
        solid:{
          bg:'yellow'
        }
      }
    }
  }
)


export  function LinkBox({href,variant,children}:{href:string,variant:string,children:React.ReactNode})
{
  const shref= href == undefined ? './':href
  return (<Link href={shref} className={cssBoxkLink({visual:"solid"})}>{children}</Link>)
}

export function LinkImage({href,imgUrl,variant,children}:{href:string,imgUrl:string,variant:string,children:React.ReactNode})
{
  // href= href ? undefined:'./'
  const shref='./'
  return (<Link href={shref} ><img src={imgUrl}></img>{children}</Link>)
}
