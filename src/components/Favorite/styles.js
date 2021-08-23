import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  transition: transform 550ms ease;
  &:hover {
    transition: transform 350ms ease;
    transform: scale(1.2);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
`;

export const LikesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  right: 6px;
  background-color: white;
  padding: 5px 0;
  width: 60px;
  border-radius: 5px;
`;

export const LikesLabel = styled.p`
  font-weight: bold;
  margin-top: -3px;
  margin-left: 5px;
  color: #333;
`;
