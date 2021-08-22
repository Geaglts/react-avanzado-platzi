import { css, keyframes } from 'styled-components';

const rotateKeyFrame = keyframes`
    from, to{transform-origin: bottom right;}
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
`;

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

const downKeyframes = ({ scale }) => {
  return keyframes`
    from {
      transform: translateY(-100px) scale(${scale});
    }
    to {
      transform: translateY(0px) scale(${scale});
    }
  `;
};

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${fadeInKeyframes} ${time} ${type};
  `;

export const down = ({ time = '1s', type = 'ease', scale = 1 } = {}) => css`
  animation: ${downKeyframes({ scale })} ${time} ${type} forwards;
`;

export const rotate = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${rotateKeyFrame} ${time} ${type} infinite;
`;
