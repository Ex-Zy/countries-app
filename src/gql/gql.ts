/* eslint-disable */
import * as types from './graphql';
import {TypedDocumentNode as DocumentNode} from '@graphql-typed-document-node/core';

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
  "\n  query GetCountryDetails($code: ID!) {\n    country(code: $code) {\n      awsRegion\n      name\n      native\n      code\n      capital\n      currency\n      languages {\n        name\n      }\n      continent {\n        name\n      }\n      subdivisions {\n        name\n      }\n      phone\n    }\n  }\n": types.GetCountryDetailsDocument,
  "\n  query GetCountries($filter: CountryFilterInput) {\n    countries(filter: $filter) {\n      name\n      emoji\n      capital\n      code\n      continent {\n        name\n      }\n    }\n  }\n": types.GetCountriesDocument,
  "\n  query GetSearchCountries {\n    countries {\n      name\n      code\n    }\n  }\n": types.GetSearchCountriesDocument,
  "\n  query GetFilterBarContinents {\n    continents {\n      name\n      code\n    }\n  }\n": types.GetFilterBarContinentsDocument,
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
export function gql(source: "\n  query GetCountryDetails($code: ID!) {\n    country(code: $code) {\n      awsRegion\n      name\n      native\n      code\n      capital\n      currency\n      languages {\n        name\n      }\n      continent {\n        name\n      }\n      subdivisions {\n        name\n      }\n      phone\n    }\n  }\n"): (typeof documents)["\n  query GetCountryDetails($code: ID!) {\n    country(code: $code) {\n      awsRegion\n      name\n      native\n      code\n      capital\n      currency\n      languages {\n        name\n      }\n      continent {\n        name\n      }\n      subdivisions {\n        name\n      }\n      phone\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCountries($filter: CountryFilterInput) {\n    countries(filter: $filter) {\n      name\n      emoji\n      capital\n      code\n      continent {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCountries($filter: CountryFilterInput) {\n    countries(filter: $filter) {\n      name\n      emoji\n      capital\n      code\n      continent {\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSearchCountries {\n    countries {\n      name\n      code\n    }\n  }\n"): (typeof documents)["\n  query GetSearchCountries {\n    countries {\n      name\n      code\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetFilterBarContinents {\n    continents {\n      name\n      code\n    }\n  }\n"): (typeof documents)["\n  query GetFilterBarContinents {\n    continents {\n      name\n      code\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
