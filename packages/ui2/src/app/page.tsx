import Image from 'next/image'
import styles from './page.module.css'
import {css} from "../../styled-system/css"
export default function Home() {
  return (
    <div className={css({display:"flex", flexDir:"row", gap:6
      ,fontSize:"5" 
    })}>
      <div>a</div>
      <div>a</div>
      <div>a</div>
    </div>
  )
}
   