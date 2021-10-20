import React from 'react';
import styled from 'styled-components';
import { FlexBetween } from 'styles/mixin';

function MoviesInfo() {
  return (
    <>
      <MoviesInfoContainer>
        <MoviesPosterInfo>
          <MoviesBackground />
          <MoviesInfoHeader>
            <MoviesInfoHeaderContainer>
              <MoviesHashtag>#돌비시네마 #빵원티켓+ #굿즈패키지</MoviesHashtag>
              <h3>듄</h3>
              <h4>DUNE</h4>

              <HeaderBtn>
                <HeaderLike>
                  <i className="far fa-heart" />
                  <p>982</p>
                </HeaderLike>

                <HeaderSharedBtn>
                  <i className="fas fa-share-alt" />
                  <p>공유하기</p>
                </HeaderSharedBtn>
              </HeaderBtn>
            </MoviesInfoHeaderContainer>

            <MoviesContentInfo>
              <MoviesImg />
              <button>예매</button>
            </MoviesContentInfo>
          </MoviesInfoHeader>

          <MoviesInfoContents>
            <MoviesScore>
              <p>실관람 평점</p>
              <MoviesCount>
                <i className="fas fa-trophy" />
                <p>8.7</p>
              </MoviesCount>
            </MoviesScore>

            <MoviesScore>
              <p>누적관객수</p>
              <MoviesCount>
                <i className="fas fa-users" />
                <p>66,038</p>
              </MoviesCount>
            </MoviesScore>
          </MoviesInfoContents>
        </MoviesPosterInfo>
      </MoviesInfoContainer>
      <MoviesReview>
        <p>
          듄에 대한 <span>1,543</span>개의 이야기가 있어요!
        </p>
        <ReviewContents>
          <MyReview>
            <span>M</span>
            <p>MEGABOX</p>
          </MyReview>
          <MyStory>
            <p>
              <span>듄</span> 재미있게 보셨나요? 영화의 어떤 점이 좋았는지
              이야기해주세요.
            </p>

            <MyStoryWrite>
              <i className="far fa-edit" />
              <p>관람평쓰기</p>
            </MyStoryWrite>
          </MyStory>
        </ReviewContents>

        <AnotherUser>
          <AnotherUserId>
            <i className="fas fa-user" />
            <p>Jet**</p>
          </AnotherUserId>

          <AnotherUserComment>
            <p>관람평</p>
            <span>10</span>
            <p>연출</p>

            <AnotherUserLine />

            <AnotherUserWrite>
              <p>웅장한 스케일과 스토리에 잼나게 봤어요</p>
              <AnotherUserMenu>
                <AnotherUserLike>
                  <i className="far fa-thumbs-up" />
                  <p>0</p>
                </AnotherUserLike>
                <i className="fas fa-ellipsis-v" />
              </AnotherUserMenu>
            </AnotherUserWrite>
          </AnotherUserComment>
        </AnotherUser>
      </MoviesReview>
    </>
  );
}

const MoviesInfoContainer = styled.div`
  background: black;
`;

const MoviesPosterInfo = styled.div`
  position: relative;
  max-width: 1100px;
  height: 520px;
  margin: 0 auto;
`;

const MoviesBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: url('/images/movies_info_big_poster.jpg') no-repeat;
  background-position: top center;
  background-size: 80% auto;
  filter: blur(5px);
  opacity: 0.4;
`;

const MoviesInfoHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoviesInfoHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 55px 45px 0 45px;
  color: white;

  h3 {
    margin: 15px 0 10px 0;
    font-size: 46px;
  }
`;

const MoviesHashtag = styled.span`
  color: #ccc;
  font-size: 15px;
`;

const HeaderBtn = styled.div`
  display: flex;
  margin-top: 15px;
`;

const HeaderLike = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 15px;
  margin-right: 6px;
  border: 1px solid #706f72;
  border-radius: 4px;
  color: white;
  background: transparent;

  i {
    margin-right: 4px;
  }
`;

const HeaderSharedBtn = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid #706f72;
  border-radius: 4px;
  color: white;
  background: transparent;

  i {
    margin-right: 4px;
  }
`;

const MoviesInfoContents = styled.div`
  display: flex;
  padding: 0 45px;
`;

const MoviesScore = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 35px;

  p {
    color: #ccc;
    font-size: 14px;
    padding-bottom: 15px;
  }

  &:first-child {
    margin-left: 0;
  }

  i {
    color: white;
  }
`;

const MoviesCount = styled.div`
  display: flex;
  i {
    margin-right: 6px;
    font-size: 20px;
  }

  p {
    font-size: 32px;
    color: white;
  }
`;

const MoviesContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 374px;

  button {
    margin-top: 8px;
    padding: 10px;
    font-size: 18px;
    border-radius: 5px;
    border: transparent;
    color: white;
    font-weight: bold;
    background: #329eb1;
  }
`;

const MoviesImg = styled.img.attrs({
  src: 'images/movies_info_small_poster.jpg',
})`
  border-radius: 10px;
`;

const MoviesReview = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 30px;

  p {
    font-size: 22px;
    color: ${props => props.theme.purple};

    span {
      color: #01738b;
    }
  }
`;

const ReviewContents = styled.div`
  display: flex;
  margin-top: 15px;
`;

const MyReview = styled.div`
  display: flex;
  flex-direction: column;
  width: 6%;

  span {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 0 auto 10px auto;
    line-height: 3;
    border-radius: 50%;
    text-align: center;
    font-weight: bold;
    color: white;
    background: rgb(107, 74, 190);
    background: linear-gradient(
      127deg,
      rgba(107, 74, 190, 1) 0%,
      rgba(80, 51, 150, 1) 100%
    );
  }

  p {
    font-size: 14px;
    color: #444;
  }
`;

const MyStory = styled.div`
  ${FlexBetween}
  width: 93%;
  padding: 25px;
  margin-left: 25px;
  border: 1px solid #eaeaea;
  border-radius: 0 10px 10px 10px;

  p {
    color: #666;
    font-size: 15px;
  }
`;

const MyStoryWrite = styled.div`
  display: flex;
  color: #666;

  i {
    margin-right: 5px;
    color: #acabb0;
  }
`;

const AnotherUser = styled.div`
  display: flex;
  margin-top: 20px;
`;

const AnotherUserId = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 6%;

  i {
    margin-bottom: 5px;
    font-size: 30px;
    text-align: center;
    color: #b1b1b1;
  }

  p {
    font-size: 14px;
    color: #444;
    text-align: center;
  }
`;

const AnotherUserComment = styled.div`
  ${FlexBetween};
  width: 95%;
  margin-left: 23px;
  padding: 25px;
  background: #f8f8fa;

  p {
    font-size: 15px;
  }

  span {
    font-size: 36px;
    color: ${props => props.theme.purple};
  }
`;

const AnotherUserLine = styled.span`
  width: 1px;
  height: 50px;
  border-left: 1px solid #d3d3d3;
`;

const AnotherUserWrite = styled.div`
  ${FlexBetween};
  width: 80%;

  p {
    color: #666;
  }
`;

const AnotherUserMenu = styled.div`
  display: flex;
  align-items: center;
  color: #444;
`;

const AnotherUserLike = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 25px;
  color: #aeaeae;

  i {
    font-size: 18px;
    margin-bottom: 5px;
  }
  p {
    color: #666;
  }
`;

export default MoviesInfo;
