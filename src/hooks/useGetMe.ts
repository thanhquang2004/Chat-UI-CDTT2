import { gql, useQuery } from "@apollo/client";

const getMeDocument = gql`
  query Me {
    me {
        _id
        email
    }
  }
`;

const useGetMe = () => {
    return useQuery(getMeDocument);
}

export { useGetMe };
