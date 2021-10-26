import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import SiteMap from './../SiteMap/SiteMap';
import Search from '../Search/Search';
import UserInfo from '../UserInfo/UserInfo';

class QuickMenu extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: {
        isSiteMapOpen: false,
        isSearchOpen: false,
        isUserOpen: false,
      },
    };
  }

  isClickedButton = name => {
    this.setState(prevState => ({
      isClicked: {
        [name]: !prevState.isClicked[name],
      },
    }));
  };

  goToTheater = () => {
    const { history } = this.props;
    history.push('/theater/list');
  };

  render() {
    const { isClicked } = this.state;
    return (
      <>
        <QuickMenuWrap>
          <QuickMenuList>
            <LeftLinks>
              <QuickMenuButton
                onClick={() => this.isClickedButton('isSiteMapOpen')}
              >
                <i
                  className={`fas ${
                    isClicked.isSiteMapOpen ? 'fa-times-circle' : 'fas fa-bars'
                  }`}
                />
                사이트 맵
              </QuickMenuButton>

              <QuickMenuButton
                onClick={() => this.isClickedButton('isSearchOpen')}
              >
                <i
                  className={`fas ${
                    isClicked.isSearchOpen ? 'fa-times-circle' : 'fas fa-search'
                  }`}
                />
                검색
              </QuickMenuButton>
            </LeftLinks>

            <RightLinks className="linkArea">
              <QuickMenuButton to="/theater/list" onClick={this.goToTheater}>
                <i className="far fa-calendar-alt" />
                상영시간표 바로가기
              </QuickMenuButton>
              <QuickMenuButton
                onClick={() => this.isClickedButton('isUserOpen')}
              >
                <i
                  className={`${
                    isClicked.isUserOpen ? 'fas fa-times-circle' : 'far fa-user'
                  }`}
                />
                내 정보
              </QuickMenuButton>
            </RightLinks>
          </QuickMenuList>
        </QuickMenuWrap>
        {isClicked.isSiteMapOpen && <SiteMap />}
        {isClicked.isSearchOpen && <Search />}
        {isClicked.isUserOpen && <UserInfo />}
      </>
    );
  }
}

const QuickMenuWrap = styled.div`
  position: absolute;
  width: 100%;
  transform: translateY(30px);
`;

const QuickMenuList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1100px;
  margin: 0 auto;
`;

const LeftLinks = styled.div`
  float: left;

  button {
    margin-right: 5px;
    text-align: left;
  }
`;

const RightLinks = styled.div`
  float: right;

  button {
    margin-left: 5px;
    text-align: right;
  }
`;

const QuickMenuButton = styled.button`
  position: relative;
  padding: 0;
  width: 30px;
  height: 30px;
  text-align: left;
  font-size: 0;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  i {
    font-size: 22px;
    color: #ccc;
  }
`;

export default withRouter(QuickMenu);
