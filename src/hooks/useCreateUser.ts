import { gql, useMutation } from "@apollo/client";

const createUserDocument = gql`
    mutation CreateUser($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
            _id
            email
        }
    }
`

const useCreateUser = () => {
    return useMutation(createUserDocument);
}

export { useCreateUser };