import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { BaseProps } from '../types';

const Love: React.FC<BaseProps> = ({ style }) => {
    return (
        <Svg viewBox="0 0 35 35" fill="none" style={style}>
            <G fill="none" fillRule="evenodd">
                <Path
                    d="M17.5 0C7.834 0 0 7.834 0 17.5S7.834 35 17.5 35 35 27.166 35 17.5 27.166 0 17.5 0z"
                    fill="#FE3D5F"
                />
                <Path
                    d="M21.9 9.832c-3.535 0-4.448 3.493-4.47 3.574-.02-.08-.935-3.574-4.468-3.574-3.576 0-5.703 2.698-5.364 6.256.326 3.411 9.738 10.655 9.833 10.727.093-.072 9.505-7.316 9.83-10.727.341-3.558-1.786-6.256-5.362-6.256"
                    fill="#FFF"
                />
            </G>
        </Svg>
    );
};

export default Love;
