import PropTypes from 'prop-types';

interface Props {
    isTrue?: any;
    children?: any;
}

const RenderIf: React.FC<Props> = props => {
    const { isTrue, children } = props;
    if (isTrue) {
        return children;
    }
    return null;
};

RenderIf.propTypes = {
    isTrue: PropTypes.any,
    children: PropTypes.node,
};

RenderIf.defaultProps = {
    isTrue: false,
    children: undefined,
};

export default RenderIf;
