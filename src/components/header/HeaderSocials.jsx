import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'

function HeaderSocials() {
  return (
    <div className ="header__socials">
     <a href="https://www.linkedin.com/in/yassineaitbelkouhia/"><BsLinkedin/></a>
     <a href="https://github.com/yassineaitbelkouhia"><BsGithub/></a>
     <a href="https://www.instagram.com/yassinebelkouhia/"><RiInstagramFill/></a>
    </div>
  )
}

export default HeaderSocials