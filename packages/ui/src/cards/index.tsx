import {type CardImage} from "../data/main"
import {Flex, HStack, VStack ,Box,Container} from "../../styled-system/jsx"
import {Text} from "../text"
import {css} from "../../styled-system/css"
import { LinkBox } from "../link"


function Root({children}:{children:React.ReactNode})
{
    return (<Flex direction="row" gap="2"  >{children}</Flex>)
}

function Card({card,maxWidth}:{card:CardImage,maxWidth:number})
{
 return (
 <VStack  >
    <Box maxWidth={maxWidth}>
      <img src={card.image.src} className={css({borderRadius:'2xl'})} ></img>
      <Text >{card.title}</Text>
      <LinkBox href={card.link.href} variant="solid" ><Text 
        className={css({overflow:"hidden",whiteSpace:"nowrap" , textOverflow:"ellipsis" , wordBreak:"break-all"
        , fontSize:'sm' })}
      >{card.link.text}</Text></LinkBox>
      <HStack gap={2}>
          <Text as="span" variant="accent">{card.sale}</Text>
          <Text as="span">{card.price}</Text>
      </HStack>
    </Box>
</VStack> )

}

export const Basic= ({ cards,maxWidth=200}:{cards:CardImage[] ,maxWidth:number}) => {
    return (
                <Root>
            {cards.map((card, index) => (
                <div key={index}>
                    <Card card={card} maxWidth={maxWidth}></Card>
                </div>
            ))}
        </Root>
    )
}
