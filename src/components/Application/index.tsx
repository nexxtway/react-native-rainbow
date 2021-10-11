import React, { useState, useEffect, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components/native';
import normalizeTheme from '../../styles/helpers/normalizeTheme';
import { ThemeProp } from '../types';

interface Props {
    children?: ReactNode;
    theme?: ThemeProp;
}

const Application = (props: Props) => {
    const { children, theme = {} } = props;
    const [normalizedTheme, setTheme] = useState(() => normalizeTheme(theme));

    useEffect(() => {
        setTheme(normalizeTheme(theme));
    }, [theme]);

    return <ThemeProvider theme={normalizedTheme}>{children}</ThemeProvider>;
};

Application.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    theme: PropTypes.shape({
        rainbow: PropTypes.shape({
            palette: PropTypes.shape({
                brand: PropTypes.string,
                success: PropTypes.string,
                error: PropTypes.string,
                warning: PropTypes.string,
                mainBackground: PropTypes.string,
            }),
        }),
    }),
};

Application.defaultProps = {
    children: undefined,
    theme: {},
};

export default Application;
