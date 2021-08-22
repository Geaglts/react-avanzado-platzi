import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';

export const Article = styled.article`
  min-height: 200px;
`;

export const ImgWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin-top: 10px;
  height: 300px;
  object-fit: cover;
  & img {
    ${fadeIn({ time: '2s' })}
    width: 100%;
  }
`;
