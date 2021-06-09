import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  checkByFacebook: Scalars['String'];
  sendVerificationEmail: Scalars['String'];
};


export type MutationCheckByFacebookArgs = {
  fbAccessToken: Scalars['String'];
};


export type MutationSendVerificationEmailArgs = {
  input: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  sayHello: Scalars['String'];
};

export type CheckByFacebookMutationVariables = Exact<{
  input: Scalars['String'];
}>;


export type CheckByFacebookMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'checkByFacebook'>
);

export type SendVerificationEmailMutationVariables = Exact<{
  input: Scalars['String'];
}>;


export type SendVerificationEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'sendVerificationEmail'>
);

export type SayHelloQueryVariables = Exact<{ [key: string]: never; }>;


export type SayHelloQuery = (
  { __typename: 'Query' }
  & Pick<Query, 'sayHello'>
);


export const CheckByFacebookDocument = gql`
    mutation CheckByFacebook($input: String!) {
  checkByFacebook(fbAccessToken: $input)
}
    `;
export type CheckByFacebookMutationFn = Apollo.MutationFunction<CheckByFacebookMutation, CheckByFacebookMutationVariables>;

/**
 * __useCheckByFacebookMutation__
 *
 * To run a mutation, you first call `useCheckByFacebookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckByFacebookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkByFacebookMutation, { data, loading, error }] = useCheckByFacebookMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCheckByFacebookMutation(baseOptions?: Apollo.MutationHookOptions<CheckByFacebookMutation, CheckByFacebookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckByFacebookMutation, CheckByFacebookMutationVariables>(CheckByFacebookDocument, options);
      }
export type CheckByFacebookMutationHookResult = ReturnType<typeof useCheckByFacebookMutation>;
export type CheckByFacebookMutationResult = Apollo.MutationResult<CheckByFacebookMutation>;
export type CheckByFacebookMutationOptions = Apollo.BaseMutationOptions<CheckByFacebookMutation, CheckByFacebookMutationVariables>;
export const SendVerificationEmailDocument = gql`
    mutation SendVerificationEmail($input: String!) {
  sendVerificationEmail(input: $input)
}
    `;
export type SendVerificationEmailMutationFn = Apollo.MutationFunction<SendVerificationEmailMutation, SendVerificationEmailMutationVariables>;

/**
 * __useSendVerificationEmailMutation__
 *
 * To run a mutation, you first call `useSendVerificationEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendVerificationEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendVerificationEmailMutation, { data, loading, error }] = useSendVerificationEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendVerificationEmailMutation(baseOptions?: Apollo.MutationHookOptions<SendVerificationEmailMutation, SendVerificationEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendVerificationEmailMutation, SendVerificationEmailMutationVariables>(SendVerificationEmailDocument, options);
      }
export type SendVerificationEmailMutationHookResult = ReturnType<typeof useSendVerificationEmailMutation>;
export type SendVerificationEmailMutationResult = Apollo.MutationResult<SendVerificationEmailMutation>;
export type SendVerificationEmailMutationOptions = Apollo.BaseMutationOptions<SendVerificationEmailMutation, SendVerificationEmailMutationVariables>;
export const SayHelloDocument = gql`
    query SayHello {
  __typename
  sayHello
}
    `;

/**
 * __useSayHelloQuery__
 *
 * To run a query within a React component, call `useSayHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useSayHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSayHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useSayHelloQuery(baseOptions?: Apollo.QueryHookOptions<SayHelloQuery, SayHelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SayHelloQuery, SayHelloQueryVariables>(SayHelloDocument, options);
      }
export function useSayHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SayHelloQuery, SayHelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SayHelloQuery, SayHelloQueryVariables>(SayHelloDocument, options);
        }
export type SayHelloQueryHookResult = ReturnType<typeof useSayHelloQuery>;
export type SayHelloLazyQueryHookResult = ReturnType<typeof useSayHelloLazyQuery>;
export type SayHelloQueryResult = Apollo.QueryResult<SayHelloQuery, SayHelloQueryVariables>;