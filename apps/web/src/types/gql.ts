export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: number; output: number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

/** PDF Books */
export type Book = Item & {
  __typename?: 'Book';
  chapters: Array<Chapter>;
  cover?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isbn?: Maybe<Scalars['String']['output']>;
  pageCount?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['Date']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Chapter = {
  __typename?: 'Chapter';
  cover?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['Date']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Item is a book, comic or novel */
export type Item = {
  chapters: Array<Chapter>;
  cover?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['Date']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Library for storing items */
export type Library = {
  __typename?: 'Library';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  /** JWT access token */
  access_token: Scalars['String']['output'];
  user: User;
};

/** Mangas / Manhwas / Manhuas / Comics */
export type Manga = Item & {
  __typename?: 'Manga';
  chapters: Array<Chapter>;
  cover?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['Date']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** User login */
  login: LoginResponse;
  /** Register new user */
  register: User;
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

/** Epub/Txt Novels */
export type Novel = Item & {
  __typename?: 'Novel';
  chapters: Array<Chapter>;
  cover?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['Date']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  wordCount?: Maybe<Scalars['Int']['output']>;
};

export type Playlist = {
  __typename?: 'Playlist';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: PlaylistType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum PlaylistType {
  Favorite = 'Favorite',
  History = 'History',
  Normal = 'Normal'
}

export type Query = {
  __typename?: 'Query';
  /** Search item by id */
  item?: Maybe<Item>;
  /** Search library by id */
  library?: Maybe<Library>;
  /** Login user info */
  me: User;
  /** Search playlist by id */
  playlist?: Maybe<Playlist>;
  /** Search user by id */
  user?: Maybe<User>;
  /** Search users */
  users: Array<User>;
};


export type QueryItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLibraryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPlaylistArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** User Information */
export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  role: UserRole;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum UserRole {
  Admin = 'Admin',
  User = 'User'
}

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'User', id: number, name: string, email: string, role: UserRole, avatar?: string | null } } };

export type RegisterMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: number, name: string, email: string, role: UserRole, avatar?: string | null } };

export type UserBasicFragment = { __typename?: 'User', id: number, name: string, email: string, role: UserRole, avatar?: string | null };
