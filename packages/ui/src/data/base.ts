
export interface Link
{
  href:string
}

export  interface Text
{
  type?:string,
  value:string
}


export  interface Texts  extends Array<Text>{}

export interface input
{
  label:string,
  htmlfor?:string
  value:string
}


export interface Image
{
  src:string,
  width?:string,
  height?:string,
  link?:Link
}

export interface LinkText
{
  link:Link,
  text:Text
}

export  interface LinkImage
{
  link:Link,
  image:Image
}

export  interface LinkTextImage
{
   link:Link,
   image:Image,
   text:Text
}
