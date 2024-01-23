import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Author = Metadata & {
  __typename?: 'Author';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** PDF Books */
export type Book = Item & {
  __typename?: 'Book';
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isbn?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['Date']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

/** Item is a book, comic or novel */
export type Item = {
  authors: Array<Author>;
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['Date']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

/** Library for storing items */
export type Library = {
  __typename?: 'Library';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Mangas / Manhwas / Manhuas / Comics */
export type Manga = Item & {
  __typename?: 'Manga';
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['Date']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type Metadata = {
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
};

/** Epub/Txt Novels */
export type Novel = Item & {
  __typename?: 'Novel';
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['Date']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Login user info */
  currentUser: User;
  /** Search item by id */
  item?: Maybe<Item>;
  /** Search items */
  items: Array<Item>;
  /** Search libraries */
  libraries: Array<Library>;
  /** Search library by id */
  library?: Maybe<Library>;
  /** Search user by id */
  user?: Maybe<User>;
  /** Search users */
  users: Array<User>;
};


export type QueryItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLibrariesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLibraryArgs = {
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
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  role: UserRole;
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  Item: ( Book ) | ( Manga ) | ( Novel );
  Metadata: ( Author );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Author: ResolverTypeWrapper<Author>;
  Book: ResolverTypeWrapper<Book>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Item: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Item']>;
  Library: ResolverTypeWrapper<Library>;
  Manga: ResolverTypeWrapper<Manga>;
  Metadata: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Metadata']>;
  Novel: ResolverTypeWrapper<Novel>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserRole: UserRole;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Author: Author;
  Book: Book;
  Boolean: Scalars['Boolean']['output'];
  Date: Scalars['Date']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Item: ResolversInterfaceTypes<ResolversParentTypes>['Item'];
  Library: Library;
  Manga: Manga;
  Metadata: ResolversInterfaceTypes<ResolversParentTypes>['Metadata'];
  Novel: Novel;
  Query: {};
  String: Scalars['String']['output'];
  User: User;
};

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isbn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  __resolveType: TypeResolveFn<'Book' | 'Manga' | 'Novel', ParentType, ContextType>;
  authors?: Resolver<Array<ResolversTypes['Author']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
};

export type LibraryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Library'] = ResolversParentTypes['Library']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MangaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Manga'] = ResolversParentTypes['Manga']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['Metadata'] = ResolversParentTypes['Metadata']> = {
  __resolveType: TypeResolveFn<'Author', ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type NovelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Novel'] = ResolversParentTypes['Novel']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  currentUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<QueryItemArgs, 'id'>>;
  items?: Resolver<Array<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<QueryItemsArgs, 'limit' | 'offset'>>;
  libraries?: Resolver<Array<ResolversTypes['Library']>, ParentType, ContextType, RequireFields<QueryLibrariesArgs, 'limit' | 'offset'>>;
  library?: Resolver<Maybe<ResolversTypes['Library']>, ParentType, ContextType, RequireFields<QueryLibraryArgs, 'id'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'limit' | 'offset'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Author?: AuthorResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Item?: ItemResolvers<ContextType>;
  Library?: LibraryResolvers<ContextType>;
  Manga?: MangaResolvers<ContextType>;
  Metadata?: MetadataResolvers<ContextType>;
  Novel?: NovelResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

