import PropTypes from 'prop-types';

interface Props {
    isTrue?: boolean;
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
    isTrue: PropTypes.bool,
    children: PropTypes.node,
};

RenderIf.defaultProps = {
    isTrue: false,
    children: undefined,
};

export default RenderIf;
