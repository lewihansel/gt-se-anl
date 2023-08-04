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
    "\n   query GetAnimDetail($id: Int) {\n    Media(id: $id) {\n      id\n      title {\n        userPreferred\n      }\n      coverImage {\n        medium\n        large\n        color\n      }\n      status\n      genres\n      description\n      seasonYear\n    }\n  }\n": types.GetAnimDetailDocument,
    "\n   query GetAnimList($page: Int, $perPage: Int) {\n    Page(page: $page, perPage: $perPage) {\n      media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {\n        id\n        title {\n          userPreferred\n        }\n        coverImage {\n          medium\n          color\n        }\n      }\n    }\n  }\n": types.GetAnimListDocument,
    "\n   query GetAnimDetailByIds($ids: [Int]) {\n    Page(page: 0, perPage: 50) {\n      media(id_in: $ids) {\n        id\n        title {\n          userPreferred\n        }\n        coverImage {\n          medium\n          color\n        }\n      }\n    }\n  }\n": types.GetAnimDetailByIdsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   query GetAnimDetail($id: Int) {\n    Media(id: $id) {\n      id\n      title {\n        userPreferred\n      }\n      coverImage {\n        medium\n        large\n        color\n      }\n      status\n      genres\n      description\n      seasonYear\n    }\n  }\n"): (typeof documents)["\n   query GetAnimDetail($id: Int) {\n    Media(id: $id) {\n      id\n      title {\n        userPreferred\n      }\n      coverImage {\n        medium\n        large\n        color\n      }\n      status\n      genres\n      description\n      seasonYear\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   query GetAnimList($page: Int, $perPage: Int) {\n    Page(page: $page, perPage: $perPage) {\n      media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {\n        id\n        title {\n          userPreferred\n        }\n        coverImage {\n          medium\n          color\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n   query GetAnimList($page: Int, $perPage: Int) {\n    Page(page: $page, perPage: $perPage) {\n      media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {\n        id\n        title {\n          userPreferred\n        }\n        coverImage {\n          medium\n          color\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   query GetAnimDetailByIds($ids: [Int]) {\n    Page(page: 0, perPage: 50) {\n      media(id_in: $ids) {\n        id\n        title {\n          userPreferred\n        }\n        coverImage {\n          medium\n          color\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n   query GetAnimDetailByIds($ids: [Int]) {\n    Page(page: 0, perPage: 50) {\n      media(id_in: $ids) {\n        id\n        title {\n          userPreferred\n        }\n        coverImage {\n          medium\n          color\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;