/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment UserBasic on User {\n  id\n  name\n  email\n  role\n  avatar\n}": types.UserBasicFragmentDoc,
    "mutation Login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    user {\n      ...UserBasic\n    }\n    access_token\n  }\n}": types.LoginDocument,
    "mutation Register($name: String!, $email: String!, $password: String!) {\n  register(name: $name, email: $email, password: $password) {\n    ...UserBasic\n  }\n}": types.RegisterDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment UserBasic on User {\n  id\n  name\n  email\n  role\n  avatar\n}"): (typeof documents)["fragment UserBasic on User {\n  id\n  name\n  email\n  role\n  avatar\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    user {\n      ...UserBasic\n    }\n    access_token\n  }\n}"): (typeof documents)["mutation Login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    user {\n      ...UserBasic\n    }\n    access_token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($name: String!, $email: String!, $password: String!) {\n  register(name: $name, email: $email, password: $password) {\n    ...UserBasic\n  }\n}"): (typeof documents)["mutation Register($name: String!, $email: String!, $password: String!) {\n  register(name: $name, email: $email, password: $password) {\n    ...UserBasic\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;