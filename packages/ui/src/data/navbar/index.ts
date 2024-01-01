
import {Header, HeaderDBProps, Navbar1} from "./types"


const h1:Header ={ caption:{link:{href:'./'},
                            text:{value:'menu1'}
                            }}

const h2:Header ={ caption:{link:{href:'./'},
                   text:{value:'menu2'}}}

const menu1:Navbar1 =[h1,h2]

h1.caption.link.href='111'
h2.caption.text.value='aaa'



let res:HeaderDBProps = {link:h1.caption.link.href,
    title:h1.caption.text.value}                        

res.













  

  

		