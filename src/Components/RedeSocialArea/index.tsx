import React from "react";

import { RedeSocial, IconeSocial,LinkRedeS } from "./styled";

type Props = {
  classIcon : string,
  LinkRede : string
} 



export const RedeSocialArea = ({classIcon, LinkRede} : Props) =>{
  const handleClick = () =>{
    window.open(LinkRede, '_blank');
  }
  return(
  <RedeSocial onClick={handleClick}><IconeSocial className={classIcon}/><LinkRedeS/></RedeSocial>
  )
}


export default RedeSocialArea