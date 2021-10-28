declare type GoodsDType = {
    id: number;
    title: string;
    price: number;
    src: StaticImageData | '';
    salePercent: number;
    date: string;
    upCount: number;
    viewCount: number;
    isGreen: boolean;
}