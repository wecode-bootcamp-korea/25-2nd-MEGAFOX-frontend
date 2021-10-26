import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NAV_DATA from './NavData';
import TopMenu from './TopMenu/TopMenu';
import SubMenu from './SubMenu/SubMenu';
import QuickMenu from './QuickMenu/QuickMenu';
import styled from 'styled-components';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      hoveredMenuId: null,
      isMouseOver: false,
    };
  }

  setHoverMenu = id => {
    this.setState({
      hoveredMenuId: id,
    });
  };

  isHoverMenu = () => {
    const { isMouseOver } = this.state;
    this.setState({
      isMouseOver: !isMouseOver,
    });
  };

  render() {
    const { hoveredMenuId, isMouseOver } = this.state;

    return (
      <>
        <GnbWrap>
          <TopMenu />
          <QuickMenu />
          <NavList
            onMouseEnter={this.isHoverMenu}
            onMouseLeave={this.isHoverMenu}
          >
            {NAV_DATA.map(({ id, name, link, menu }) => {
              return (
                <React.Fragment key={id}>
                  <List onMouseEnter={() => this.setHoverMenu(id)}>
                    <NavLink to={link}>{name}</NavLink>
                  </List>
                  {id === hoveredMenuId && isMouseOver === true ? (
                    <SubMenu menu={menu} />
                  ) : null}
                </React.Fragment>
              );
            })}
          </NavList>
        </GnbWrap>
        {isMouseOver && <SubNavBg />}
      </>
    );
  }
}
const GnbWrap = styled.div`
  position: relative;
`;

const NavList = styled.ul`
  position: absolute;
  display: flex;
  width: 800px;
  left: 50%;
  transform: translate(-50%, 35px);
`;

const List = styled.li`
  padding: 0;

  &:nth-of-type(3) {
    margin-right: 200px;
  }
  &:hover + ul {
    display: block;
  }
`;

const NavLink = styled(Link)`
  display: inline-block;
  padding-bottom: 25px;
  width: 100px;
  text-align: center;
  font-size: 20px;
  color: #ddd;
  font-weight: 400;
  text-decoration: none;
`;

const SubNavBg = styled.div`
  width: 100%;
  height: 45px;
  margin-top: 80px;
  background: rgba(0, 0, 0, 0.9);
`;

export default Nav;
