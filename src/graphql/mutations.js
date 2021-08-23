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

export const SIGN_UP = gql`
  mutation ($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const LOGIN = gql`
  mutation ($input: UserCredentials!) {
    login(input: $input)
  }
`;
