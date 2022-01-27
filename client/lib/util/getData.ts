import { PICTURE_LIST, PRICE_LIST, TITLE_LIST } from 'lib/constant';

export const getTodayDate = (): string => {
    const YEAR = new Date().getFullYear();
    const MONTH = String(new Date().getMonth() + 1).padStart(2, '0');
    const DAY = String(new Date().getDate()).padStart(2, '0');

    return `${YEAR}-${MONTH}-${DAY}`;
};

export const getDateSubCount = (date: string): number => {
    const START_DATE = new Date();
    const END_DATE = new Date(date);
    const DIFF_COUNT = Math.ceil(
        (END_DATE.getTime() - START_DATE.getTime()) / (1000 * 3600 * 24)
    );

    return Math.abs(DIFF_COUNT);
};

export const getSalePrice = (price: number, salePercent: number): number => {
    return Math.floor(price * ((100 - salePercent) * 0.01));
};

const getRandomTitle = () => {
    return TITLE_LIST[getRandomNumber(TITLE_LIST.length)];
};
const getRandomPrice = () => {
    return PRICE_LIST[getRandomNumber(PRICE_LIST.length)];
};
const getRandomPicture = () => {
    return PICTURE_LIST[getRandomNumber(PICTURE_LIST.length)];
};
const getRandomDate = () => {
    const monthFirstNumber = getRandomNumber(2);
    const monthTwiceNumber =
        monthFirstNumber === 0 ? getRandomNumber(9) + 1 : getRandomNumber(2);

    const dayFirstNumber = getRandomNumber(4);
    const dayTwiceNumber =
        dayFirstNumber === 3
            ? getRandomNumber(2)
            : dayFirstNumber === 0
            ? getRandomNumber(9) + 1
            : getRandomNumber(10);

    return `${getRandomNumber(10)}${getRandomNumber(10)}${getRandomNumber(
        10
    )}${getRandomNumber(
        10
    )}-${monthFirstNumber}${monthTwiceNumber}-${dayFirstNumber}${dayTwiceNumber}`;
};
const getRandomNumber = (range: number = 10) => {
    return Math.floor(Math.random() * range);
};

export const generateRandomData = (length: number): Array<GoodsDType> => {
    return Array.from({ length }, (_, idx) => {
        return {
            id: idx,
            title: getRandomTitle(),
            price: getRandomPrice(),
            src: getRandomPicture(),
            salePercent: getRandomNumber(100),
            date: getRandomDate(),
            upCount: getRandomNumber(10000),
            viewCount: getRandomNumber(10000),
            isGreen: getRandomNumber(2) ? true : false,
        };
    });
};
