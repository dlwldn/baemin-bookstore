declare type GoodsDType = {
    id: number;
    title: string;
    price: number;
    src: StaticImageData | '';
    salePercent: number;
    date: date;
    upCount: number;
    viewCount: number;
    isGreen: boolean;
}