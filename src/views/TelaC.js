/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default props => {
    const route = props.route && props.route.params || {params: {numero: 0}}
    return (
        <TextoCentral corFundo= '#9932cd'>
            TelaC - {route.params.numero}
        </TextoCentral>
    )
}