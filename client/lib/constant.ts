import { getTodayDate } from './util/util';
import Pic1 from 'asset/images/pic1.jpg';
import Pic2 from 'asset/images/pic2.jpg';
import Pic3 from 'asset/images/pic3.jpg';
import Pic4 from 'asset/images/pic4.jpg';
import Pic5 from 'asset/images/pic5.jpg';
import Pic6 from 'asset/images/pic6.jpg';
import Pic7 from 'asset/images/pic7.jpg';
import Pic8 from 'asset/images/pic8.jpg';
import Pic9 from 'asset/images/pic9.jpg';
import Pic10 from 'asset/images/pic10.jpg';
import Pic11 from 'asset/images/pic11.jpg';
import Pic12 from 'asset/images/pic12.jpg';
import Pic13 from 'asset/images/pic13.jpg';
import Pic14 from 'asset/images/pic14.jpg';
import Pic15 from 'asset/images/pic15.jpg';
import Pic16 from 'asset/images/pic16.png';
import Pic17 from 'asset/images/pic17.png';
import Pic18 from 'asset/images/pic18.png';
import Pic19 from 'asset/images/pic19.png';

export const BEST_LIST: GoodsDType[] = [
    {
        id: 0,
        title: '때수건. 다 때가 있다.',
        price: 2000,
        src: Pic1,
        salePercent: 0,
        date: '2021-02-07',
        upCount: 0,
        viewCount: 1200,
        isGreen: false,
    },
    {
        id: 1,
        title: '작은 쇼핑백. 축복',
        price: 1800,
        src: Pic2,
        salePercent: 0,
        date: '2021-02-07',
        upCount: 0,
        viewCount: 1107,
        isGreen: false,
    },
    {
        id: 2,
        title: '커피찌꺼기를 재활용해 손으로 만든 연필',
        price: 3000,
        src: Pic3,
        salePercent: 0,
        date: getTodayDate(),
        upCount: 0,
        viewCount: 3328,
        isGreen: true,
    },
    {
        id: 3,
        title: '효자손. 혼자서도 잘해요',
        price: 12900,
        src: Pic4,
        salePercent: 0,
        date: '2021-02-07',
        upCount: 0,
        viewCount: 4428,
        isGreen: false,
    },
]


export const NEW_LIST: GoodsDType[] = [
    {
        id: 220,
        title: '글꼴. 배달의민족 을지로오래오래체',
        price: 0,
        src: Pic5,
        salePercent: 0,
        date: getTodayDate(),
        upCount: 0,
        viewCount: 99,
        isGreen: false,
    },
    {
        id: 221,
        title: '매거진f No.17 Icecream',
        price: 13500,
        src: Pic6,
        salePercent: 10,
        date: getTodayDate(),
        upCount: 0,
        viewCount: 1107,
        isGreen: false,
    },
    {
        id: 222,
        title: '버추얼굿즈. 당신을 위한 의자',
        price: 0,
        src: Pic7,
        salePercent: 0,
        date: getTodayDate(),
        upCount: 0,
        viewCount: 99,
        isGreen: false,
    },
    {
        id: 223,
        title: '플리츠마마X배달의민족. 텀블러백',
        price: 29000,
        src: Pic8,
        salePercent: 40,
        date: getTodayDate(),
        upCount: 0,
        viewCount: 8,
        isGreen: true,
    },
    {
        id: 224,
        title: '업사이클링 스탠드그립 세트. 맥주',
        price: 18900,
        src: Pic9,
        salePercent: 0,
        date: getTodayDate(),
        upCount: 0,
        viewCount: 8,
        isGreen: true,
    },
    {
        id: 225,
        title: '업사이클링 명함케이스. 맥주짠',
        price: 16900,
        src: Pic10,
        salePercent: 0,
        date: getTodayDate(),
        upCount: 0,
        viewCount: 8,
        isGreen: true,
    },
    {
        id: 226,
        title: '유해물질이 나오지 않는 지우개',
        price: 1500,
        src: Pic11,
        salePercent: 0,
        date: getTodayDate(),
        upCount: 0,
        viewCount: 8,
        isGreen: true,
    },
    {
        id: 227,
        title: '재생지에 콩기름으로 인쇄한 일기장',
        price: 3500,
        src: Pic12,
        salePercent: 0,
        date: getTodayDate(),
        upCount: 0,
        viewCount: 8,
        isGreen: true,
    },
]

export const SALE_LIST: GoodsDType[] = [
    {
        id: 320,
        title: '매거진F No.17 Icecream',
        price: 15000,
        src: Pic6,
        salePercent: 10,
        date: '2021-08-21',
        upCount: 0,
        viewCount: 99,
        isGreen: false,
    },
    {
        id: 321,
        title: '매거진F No.16 Namul',
        price: 15000,
        src: Pic13,
        salePercent: 10,
        date: '2021-08-21',
        upCount: 0,
        viewCount: 99,
        isGreen: false,
    },
    {
        id: 322,
        title: '스웨거X배민. 룸 스프레이 집중',
        price: 19000,
        src: Pic14,
        salePercent: 20,
        date: '2021-08-21',
        upCount: 0,
        viewCount: 99,
        isGreen: false,
    },
    {
        id: 323,
        title: '떡볶이 키트.떡볶이가 필요해',
        price: 30000,
        src: Pic15,
        salePercent: 63,
        date: '2021-08-21',
        upCount: 0,
        viewCount: 99,
        isGreen: false,
    },
    {
        id: 324,
        title: '왼발오른발 양말 세트',
        price: 27500,
        src: Pic16,
        salePercent: 5,
        date: '2021-08-21',
        upCount: 0,
        viewCount: 99,
        isGreen: false,
    },
    {
        id: 325,
        title: 'ㅋㅋ안 보이는 양말 세트',
        price: 20000,
        src: Pic17,
        salePercent: 5,
        date: '2021-08-21',
        upCount: 0,
        viewCount: 99,
        isGreen: false,
    },
    {
        id: 326,
        title: 'ㅋㅋ골고루 양말 셍트',
        price: 27500,
        src: Pic18,
        salePercent: 5,
        date: '2021-08-21',
        upCount: 0,
        viewCount: 99,
        isGreen: false,
    },
    {
        id: 327,
        title: '미니갑티슈 세트. 티었슈?',
        price: 8800,
        src: Pic19,
        salePercent: 9,
        date: '2021-08-21',
        upCount: 0,
        viewCount: 99,
        isGreen: false,
    },
] 