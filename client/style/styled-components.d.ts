import "styled-components";
import { Color } from 'style/theme';

declare module "styled-components" {
  export interface DefaultTheme {
    color: Color
  }
}