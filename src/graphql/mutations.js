import { gql } from 'apollo-boost';

export const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      likes
      liked
    }
  }
`;
