import { DefaultTheme } from 'styled-components';

const color = {
    BAEMIN_GREEN_COLOR: '#2ac1bc',
    BORDER_COLOR: '#eaeaea',
}

const theme: DefaultTheme = {
    color,
}

export type Color = typeof color;
export default theme;