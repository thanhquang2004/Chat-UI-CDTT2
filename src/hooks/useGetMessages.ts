import { useQuery } from "@apollo/client";
import { graphql } from "../gql";
import { MessagesQueryVariables } from "../gql/graphql";

export const getMessagesDocument = graphql(`
  query Messages($chatId: String!, $limit: Int!, $skip: Int!) {
    messages(chatId: $chatId, limit: $limit, skip: $skip) {
      ...MessageFragment
    }
  }
`);

const useGetMessages = (variables: MessagesQueryVariables) => {
  return useQuery(getMessagesDocument, { variables });
};

export { useGetMessages };
