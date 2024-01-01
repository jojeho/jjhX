import * as base from "../base"

export interface Header
{
   caption: base.LinkText
}

export interface HeaderDBProps
{
    link:string,
    title:string
    
}

namespace Navbar1{

    interface Items  extends Array<Header>{} 

    interface menu
    {
        items:Items;
    }
}

export namespace Navbar2{

    interface items 
    {
        links:base.LinkText[],
        image:base.LinkImage
    } 
}