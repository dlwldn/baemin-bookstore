import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import Logo from '../../asset/images/footer-logo.png';

/* Constants =========================================================== */
const FOOTER_LIST: string[] = [
    '공지사항',
    '1:1문의',
    '이용약관',
    '개인정보처리방침',
    '판매처 안내',
];
/* Prop =========================================================== */
type Prop = {};
/* <Footer/> =========================================================== */
const FooterWrap = styled.footer`
    width: 100%;
    height: 250px;
    padding-top: 30px;
    padding-bottom: 60px;
    background: #f6f6f6;
    display: flex;
    justify-content: center;

    > div:nth-of-type(1) {
        text-align: center;
        width: 290px;
    }
    > div:nth-of-type(2) {
        > ul {
            display: flex;
            margin-bottom: 30px;

            > li {
                margin-right: 50px;
            }
        }

        > div {
            font-size: 12px;
            color: #777;

            > dl {
                display: flex;
                margin-bottom: 5px;
            }
        }

        > p {
            font-size: 12px;
            color: #777;
        }
    }
`;


export default function Footer() {
    const renderListItem = () =>
        FOOTER_LIST.map((item, idx) => {
            return <li key={idx}>{item}</li>;
        });

    return (
        <FooterWrap>
            <div>
                <Image src={Logo} width={100} height={76}/>
            </div>
            <div>
                <ul>{renderListItem()}</ul>
                <div>
                    <dl>
                        <dt>구성원 :</dt>
                        <dt>이지우 (프론트엔드 개발자 1인)</dt>
                    </dl>
                    <dl>
                        <dt>제작 동기 :</dt>
                        <dt>만들고싶어서</dt>
                    </dl>
                    <dl>
                        <dt>설명 :</dt>
                        <dt>판매용 아닙니다!!</dt>
                    </dl>
                </div>
                <p>© Jiwoo Brothers Corp. All right Reserved</p>
            </div>
        </FooterWrap>
    );
}
Footer.defaultProps = {};
