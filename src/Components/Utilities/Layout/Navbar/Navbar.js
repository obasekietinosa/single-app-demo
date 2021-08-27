import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Overlay from 'Components/Utilities/Overlay/Overlay'
import Flex from 'Components/Utilities/Layout/Containers/Flex'

export default function Navbar() {

  const [ openDrawer, setOpenDrawer ] = useState(false)

  const NavLinks = () => (
    <ul>
      <li><Link onClick={ () => {setOpenDrawer(false)} } to="/">Home</Link></li>
      <li><Link onClick={ () => {setOpenDrawer(false)} } to="/posts">All Posts</Link></li>
      <li><Link onClick={ () => {setOpenDrawer(false)} } to="/categories/music">Music</Link></li>
      <li><Link onClick={ () => {setOpenDrawer(false)} } to="/categories/insights">Insights</Link></li>
      <li><Link onClick={ () => {setOpenDrawer(false)} } to="/categories/conversations">Conversations</Link></li>
      <li><Link onClick={ () => {setOpenDrawer(false)} } to="/categories/community">Community</Link></li>
      <li>
        <a className="mr-3" href="https://facebook.com/wetalksound"><i className="fab fa-facebook"></i></a>&nbsp;
        <a className="mr-3" href="https://twitter.com/wetalksound"><i className="fab fa-twitter"></i></a>&nbsp;
        <a className="mr-3" href="https://instagram.com/wetalksound"><i className="fab fa-instagram"></i></a>
      </li>
    </ul>
  )

  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="Navleft"> 
            <Link className="logo" to="/">
              <img src="https://services.etin.space/wts/wp-content/uploads/2020/06/logo.png" alt="WTS Blog" class="img-fluid" />
            </Link>
          </div>
          <div className="Navright">
            <div className="NavLinks d-sm-block d-none">
              <NavLinks />
            </div>
            <div className="collapse-menu d-block d-sm-none">
              <i onClick={ () => { setOpenDrawer(true) } } className="fas fa-bars"></i>
            </div>
            <div className="search-btn d-block d-sm-none">
              <i className="fas fa-search"></i>
            </div>
          </div>
          <div className="Drawer">
            {
              openDrawer ?
                <Overlay close={ () => {setOpenDrawer(false)} }>
                  <Flex 
                    alignItems="center"
                    justifyContent="center"
                  >
                    <NavLinks />
                  </Flex>
                </Overlay>
                :
                ''
            }
          </div>
        </div>
      </div>
    </>
  )
}
