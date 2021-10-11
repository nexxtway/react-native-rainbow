import { DefaultTheme } from 'styled-components';
import defaultTheme from '../defaultTheme';
import { ThemeProp } from '../../components/types';

export default function getTheme(props: { theme: ThemeProp } | { theme: DefaultTheme }) {
    return props.theme.rainbow || defaultTheme;
}
