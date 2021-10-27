export const getTodayDate = (): string => {
    const YEAR = new Date().getFullYear();
    const MONTH = String(new Date().getMonth() + 1).padStart(2, '0');
    const DAY = String(new Date().getDate()).padStart(2, '0');

    return `${YEAR}-${MONTH}-${DAY}`
}


export const getDateSubCount = (date: string): number => {
    const START_DATE = new Date();
    const END_DATE = new Date(date);
    const DIFF_COUNT = Math.ceil((END_DATE.getTime()-START_DATE.getTime())/(1000*3600*24));

    return Math.abs(DIFF_COUNT);
}