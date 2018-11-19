import React from 'react';
import {menuStyle,fixedMenuStyle} from '../css/style';
import {Link, NavLink} from 'react-router-dom';
import {
    Container, Dropdown, Image, Menu, Visibility,
  } from 'semantic-ui-react'

class Header extends React.Component{
  state = {
    menuFixed: null,
    overlayFixed: false,
  };

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: null })
render(){
  const { menuFixed } = this.state
    return(
        <div>
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}> 

          <Menu
            borderless
            fixed={menuFixed && 'top'}
            style={menuFixed ? fixedMenuStyle : menuStyle} >
            <Container text>
              <Menu.Item as={Link} to='/'  exact="true"  >
                <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                <Menu.Item header>Kral Filmler </Menu.Item>
              </Menu.Item>
              <Menu.Item as={NavLink} to='/movies' exact >
              Filmler
              </Menu.Item>
              <Menu.Item as={NavLink} to='/movies/new' exact>Yeni Film Ekle</Menu.Item>

              <Menu.Menu position='right'>
                <Dropdown text='Kategoriler' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item>Kovboy</Dropdown.Item>
                    <Dropdown.Item>Komedi</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Bilim Kurgu</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Container>
          </Menu>
          </Visibility>
        </div>
    )
}
}
export default Header;