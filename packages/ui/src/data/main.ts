
interface Container
{

}

interface Section
{
    text:string,
    href:string
}

export interface Document
{
    main:LinkText;
    sects?:Section[]
}


const doc1:Document =
{
    main:{text:'menu1' ,href:'./' }
}
const doc2:Document =
{
    main:{text:'menu2' , href:"https://naver"}
}

const sect1={text:'sect1',href:'aaa'}

const doc3:Document =
{
    main:{text:'menu3' , href:"https://naver"},
    sects:[sect1]
}


export const docs = [doc1,doc2,doc3]

interface Text
{
    text:string,
    as : string,
    varaint:string
}

interface Paragraph
{
    texts:Text[],
}

interface LinkText
{
    text:string,
    href:string
}

interface LinkImage
{
    src:string,
    art:string,
    url:string,
}

interface Image
{
    art:string,
    src:string,
}

export interface CardImage
{
    image:Image,
    title:string,
    link:LinkText,
    price:string,
    sale:string
}

const c1:CardImage ={ image:{src:'./next.jpg',art:'next.jpg'} 
                    ,title:'오늘출발' 
                    ,link:{ text:"[MADE/기장별,뱃살커버]인생핏 트레이닝 롱일자" ,href:"./"}
                    ,price:"15,900" ,sale:"46%"}

const c2:CardImage ={ image:{src:'./next.jpg',art:'next.jpg'} 
                    ,title:'오늘출발' 
                    ,link:{ text:"[MADE/기장별,뱃살커버]인생핏 트레이닝 롱일자" ,href:"./"}
                    ,price:"15,900" ,sale:"46%"}                    

export const cards=[c1,c2]                    

