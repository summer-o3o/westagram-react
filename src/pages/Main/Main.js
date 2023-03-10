import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <React.Fragment>
      <nav id="instaNav">
        <div className="inner_nav">
          <h1 className="tit_logo">
            <a href="#none" className="link_logo">
              Westagram
            </a>
          </h1>
          <div className="wrap_search">
            <form method="post" action="#none">
              <fieldset>
                <legend className="screen_out">검색</legend>
                <input
                  type="text"
                  className="inp_search"
                  title="검색어 입력"
                  value="we"
                />
              </fieldset>
            </form>
            <strong className="screen_out">검색된 유저 목록</strong>
            <ul className="list_user">
              <li>
                <a href="#none" className="link_user">
                  <span className="area_thumb">
                    <span
                      className="thumb_user"
                      style={{
                        backgroundImage: 'url(./images/@thumb_960x640.jpg)',
                      }}
                    />
                    {/* 프로필 사진을 클래스 thumb_user의 background-image 인라인 스타일에 넣어주세요. */}
                  </span>
                  <div className="group_info">
                    <strong className="tit_user">
                      <span className="screen_out">유저 아이디 : </span>
                      wecode_bootcamp
                    </strong>
                    <span className="txt_info">
                      <span className="screen_out">유저 설명 : </span>짱~~~~
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="gnb_menu">
            <h2 className="screen_out">위스타그램 메인 메뉴</h2>
            <ul className="list_util">
              <li>
                <a href="#none" className="link_util">
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                    className="img_g"
                    alt="탐색"
                  />
                </a>
              </li>
              <li>
                <a href="#none" className="link_util">
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    className="img_g"
                    alt="알림"
                  />
                </a>
              </li>
              <li>
                <a href="#none" className="link_util">
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                    className="img_g"
                    alt="프로필"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main id="instaContent">
        <h2 className="screen_out">위스타그램 홈</h2>
        <article className="insta_feed">
          <h3 className="screen_out">피드</h3>
          <ul className="list_insta">
            <li>
              <a href="#none" className="link_profile">
                <span className="wrap_thumb">
                  <span
                    className="thumb_profile"
                    style={{
                      backgroundImage: `url(images/@thumb_960x640.jpg)`,
                    }}
                  >
                    {/* 프로필 사진을 클래스 thumb_profile의 background-image 인라인 스타일에 넣어주세요. */}
                  </span>
                </span>
                <strong className="tit_user">
                  <span className="screen_out">작성자 : </span>wecode_bootcamp
                </strong>
                <span className="num_date">
                  <span className="screen_out">작성 일 : </span>2일
                </span>
              </a>
              <span className="wrap_feedimg">
                <span
                  className="thumb_feed"
                  style={{ backgroundImage: `url(images/@thumb_960x640.jpg)` }}
                >
                  {/* 피드 이미지를 클래스 thumb_feed의 background-image 인라인 스타일에 넣어주세요. */}
                </span>
              </span>
              <div className="util_feed">
                <button className="btn_like" type="button">
                  {/* 좋아요가 활성 상태일때 btn_like에 클래스 on 제거 */}
                  <img
                    src="images/ico_like.svg"
                    className="img_g"
                    alt="좋아요"
                  />
                </button>
                <button className="btn_comment" type="button">
                  <img
                    src="images/ico_comment.svg"
                    className="img_g"
                    alt="댓글"
                  />
                </button>
                <button className="btn_share" type="button">
                  <img
                    src="images/ico_share.svg"
                    className="img_g"
                    alt="공유하기"
                  />
                </button>
                <button className="btn_bookmark" type="button">
                  <img
                    src="images/ico_bookmark.svg"
                    className="img_g"
                    alt="즐겨찾기"
                  />
                </button>
              </div>
              <div className="feed_user">
                <a href="#none" className="link_user">
                  <span className="screen_out">작성자: </span>wecode_bootcamp
                </a>
                <p className="desc_feed">
                  <span className="screen_out">작성자 소개 : </span>위워크에서
                  진행한 베이킹 클래스
                </p>
                <button type="button" className="btn_more">
                  {/* 내용이 길어질때 클래스 btn_more 추가 */}
                  <span className="screen_out">내용</span>더보기
                </button>
              </div>
              <div className="group_comment">
                <a href="#none" className="link_comment">
                  댓글 100개 모두 보기
                </a>
                <div className="area_writebox">
                  <form
                    action="#none"
                    method="post"
                    name="formComment"
                    className="form_comment"
                  >
                    <input
                      aria-label="댓글 달기..."
                      className="inp_comment"
                      placeholder="댓글 달기..."
                    />
                    <button type="submit" className="btn_submit">
                      게시
                    </button>
                  </form>
                </div>
              </div>
              <button type="button" className="btn_option">
                <svg
                  aria-label="옵션 더 보기"
                  className="_ab6-"
                  color="#000"
                  fill="#000"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="6" cy="12" r="1.5" />
                  <circle cx="18" cy="12" r="1.5" />
                </svg>
              </button>
            </li>
            <li>
              <a href="#none" className="link_profile">
                <span className="wrap_thumb">
                  <span
                    className="thumb_profile"
                    style={{
                      backgroundImage: `url(images/@thumb_960x640.jpg)`,
                    }}
                  >
                    {/* 프로필 사진을 클래스 thumb_profile의 background-image 인라인 스타일에 넣어주세요. */}
                  </span>
                </span>
                <strong className="tit_user">
                  <span className="screen_out">작성자 : </span>wecode_bootcamp
                </strong>
                <span className="num_date">
                  <span className="screen_out">작성 일 : </span>2일
                </span>
              </a>
              <span className="wrap_feedimg">
                <span
                  className="thumb_feed"
                  style={{ backgroundImage: `url(images/@thumb_960x640.jpg)` }}
                >
                  {/* 피드 이미지를 클래스 thumb_feed의 background-image 인라인 스타일에 넣어주세요. */}
                </span>
              </span>
              <div className="util_feed">
                <button className="btn_like" type="button">
                  {/* 좋아요 선택시, 클래스 on 추가 */}
                  <img
                    src="images/ico_like.svg"
                    className="img_g"
                    alt="좋아요"
                  />
                </button>
                <button className="btn_comment" type="button">
                  <img
                    src="images/ico_comment.svg"
                    className="img_g"
                    alt="댓글"
                  />
                </button>
                <button className="btn_share" type="button">
                  <img
                    src="images/ico_share.svg"
                    className="img_g"
                    alt="공유하기"
                  />
                </button>
                <button className="btn_bookmark" type="button">
                  <img
                    src="images/ico_bookmark.svg"
                    className="img_g"
                    alt="즐겨찾기"
                  />
                </button>
              </div>
              <div className="feed_user">
                <a href="#none" className="link_user">
                  <span className="screen_out">작성자: </span>wecode_bootcamp
                </a>
                <p className="desc_feed">
                  <span className="screen_out">작성자 소개 : </span>위워크에서
                  진행한 베이킹 클래스
                </p>
                <button type="button" className="btn_more">
                  {/* 내용이 길어질때 클래스 btn_more 추가 */}
                  <span className="screen_out">내용</span>더보기
                </button>
              </div>
              <div className="group_comment">
                <a href="#none" className="link_comment">
                  댓글 100개 모두 보기
                </a>
                <div className="area_writebox">
                  <form
                    action="#none"
                    method="post"
                    name="formComment"
                    className="form_comment"
                  >
                    <input
                      aria-label="댓글 달기..."
                      className="inp_comment"
                      placeholder="댓글 달기..."
                    />
                    <button type="submit" className="btn_submit">
                      게시
                    </button>
                  </form>
                </div>
              </div>
              <button type="button" className="btn_option">
                <svg
                  aria-label="옵션 더 보기"
                  className="_ab6-"
                  color="#000"
                  fill="#000"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="6" cy="12" r="1.5" />
                  <circle cx="18" cy="12" r="1.5" />
                </svg>
              </button>
            </li>
          </ul>
        </article>
        <aside className="aside_insta">
          <a href="#none" className="link_user">
            <span className="wrap_thumb">
              <span
                className="thumb_user"
                style={{ backgroundImage: `url(images/@thumb_960x640.jpg)` }}
              >
                {/* 프로필 사진을 클래스 thumb_user의 background-image 인라인 스타일에 넣어주세요. */}
              </span>
            </span>
            <span className="info_user">
              <strong className="tit_user">
                <span className="screen_out">회원님 아이디 : </span>
                wecode_bootcamp
              </strong>
              <span className="txt_info">
                <span className="screen_out">회원님 소개 : </span>Wecode -
                위코드
              </span>
            </span>
          </a>
          <div className="box_info">
            <strong className="tit_info">스토리</strong>
            <ul className="list_info">
              <li>
                <a href="#none" className="link_profile">
                  <span
                    className="thumb_profile"
                    style={{
                      backgroundImage: `url(images/@thumb_960x640.jpg)`,
                    }}
                  >
                    {/* 프로필 사진을 클래스 thumb_profile의 background-image 인라인 스타일에 넣어주세요. */}
                  </span>
                  <span className="info_user">
                    <strong className="tit_user">
                      <span className="screen_out">작성자 : </span>
                      wecode_bootcamp
                    </strong>
                    <span className="num_date">
                      <span className="screen_out">작성 시간 : </span>16분 전
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#none" className="link_profile">
                  <span
                    className="thumb_profile"
                    style={{
                      backgroundImage: `url(images/@thumb_960x640.jpg)`,
                    }}
                  >
                    {/* 프로필 사진을 클래스 thumb_profile의 background-image 인라인 스타일에 넣어주세요. */}
                  </span>
                  <span className="info_user">
                    <strong className="tit_user">
                      <span className="screen_out">작성자 : </span>
                      wecode_bootcamp
                    </strong>
                    <span className="num_date">
                      <span className="screen_out">작성 시간 : </span>16분 전
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#none" className="link_profile">
                  <span
                    className="thumb_profile"
                    style={{
                      backgroundImage: `url(images/@thumb_960x640.jpg)`,
                    }}
                  >
                    {/* 프로필 사진을 클래스 thumb_profile의 background-image 인라인 스타일에 넣어주세요. */}
                  </span>
                  <span className="info_user">
                    <strong className="tit_user">
                      <span className="screen_out">작성자 : </span>
                      wecode_bootcamp
                    </strong>
                    <span className="num_date">
                      <span className="screen_out">작성 시간 : </span>16분 전
                    </span>
                  </span>
                </a>
              </li>
            </ul>
            <a href="#none" className="link_more">
              모두보기
            </a>
          </div>
          <div className="box_info">
            <strong className="tit_info">회원님을 위한 추천</strong>
            <ul className="list_info">
              <li>
                <a href="#none" className="link_profile">
                  <span
                    className="thumb_profile"
                    style={{
                      backgroundImage: `url(images/@thumb_960x640.jpg)`,
                    }}
                  >
                    {/* 프로필 사진을 클래스 thumb_profile의 background-image 인라인 스타일에 넣어주세요. */}
                  </span>
                  <span className="info_user">
                    <strong className="tit_user">
                      <span className="screen_out">추천친구 : </span>
                      wecode_bootcamp
                    </strong>
                    <span className="txt_info">
                      <span className="screen_out">팔로우 상태 : </span>
                      wecode_bootcamp 외 112명이 팔로우 중입니다.
                    </span>
                  </span>
                </a>
                <button className="btn_follow" type="button">
                  팔로우
                </button>
              </li>
              <li>
                <a href="#none" className="link_profile">
                  <span
                    className="thumb_profile"
                    style={{
                      backgroundImage: `url(images/@thumb_960x640.jpg)`,
                    }}
                  >
                    {/* 프로필 사진을 클래스 thumb_profile의 background-image 인라인 스타일에 넣어주세요. */}
                  </span>
                  <span className="info_user">
                    <strong className="tit_user">
                      <span className="screen_out">추천친구 : </span>
                      wecode_bootcamp
                    </strong>
                    <span className="txt_info">
                      <span className="screen_out">팔로우 상태 : </span>
                      일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
                    </span>
                  </span>
                </a>
                <button className="btn_follow" type="button">
                  팔로우
                </button>
              </li>
            </ul>
            <a href="#none" className="link_more">
              모두보기
            </a>
          </div>
          <footer id="instaFooter">
            <strong className="screen_out">위스타그램 서비스 정보</strong>
            <ul className="list_corp">
              <li>
                <a href="#none" className="link_corp">
                  소개
                </a>
              </li>
              <li>
                <a href="#none" className="link_corp">
                  도움말
                </a>
              </li>
              <li>
                <a href="#none" className="link_corp">
                  홍보 센터
                </a>
              </li>
              <li>
                <a href="#none" className="link_corp">
                  채용 정보
                </a>
              </li>
              <li>
                <a href="#none" className="link_corp">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#none" className="link_corp">
                  약관
                </a>
              </li>
              <li>
                <a href="#none" className="link_corp">
                  위치
                </a>
              </li>
              <li>
                <a href="#none" className="link_corp">
                  언어
                </a>
              </li>
            </ul>
            <p className="txt_copy">&#169; 2023 INSTAGRAM FROM META</p>
          </footer>
        </aside>
      </main>
    </React.Fragment>
  );
};
export default Main;
