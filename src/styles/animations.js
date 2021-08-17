import { css, keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
    from {
        transform: blur(5px);
        opacity: 0;
    }
    to {
        transform: blur(0);
        opacity: 1;
    }
`;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${fadeInKeyframes} ${time} ${type};
  `;
