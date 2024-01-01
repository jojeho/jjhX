'use client'
import Link from "next/link"
import Menu from "../primitive/menu"
import { css } from "../../styled-system/css"
import { HStack } from "../../styled-system/jsx"
import { useState } from "react"
function Root({ children }:{children:React.ReactNode}) {
    return <ul ><HStack backgroundColor='red'>{children}</HStack></ul>
}
import  {type Document} from "../data/main"

function ItemHover({ doc, index }:{doc:Document,index:number}) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <li key={index}>
            <Menu.Root open={isOpen} >
                <Menu.Trigger onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}
                    asChild>
                    <a href={doc.main.href}>{doc.main.text}</a>
                </Menu.Trigger>
                <Menu.Content  onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    {
                        doc.sects?.map((sect, index) =>
                        (
                            <Menu.Item id={sect.text} ><a href={sect.text}>{sect.href}</a></Menu.Item>
                        ))
                    }
                </Menu.Content>
            </Menu.Root>
        </li>
    )
}

export function Basic({ docs }:{docs:Document[]}) {
    return (
        <Root>
            {docs.map((doc, index) => (
                <ItemHover doc={doc} index={index}></ItemHover>
            ))}
        </Root>
    )
}

