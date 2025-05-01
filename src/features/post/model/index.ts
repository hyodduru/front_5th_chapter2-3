// 게시물 추가 관련 상태
export { newPostAtom } from "./addPost.atom.ts"
export type { NewPostType } from "./addPost.type.ts"

// 게시물 상세 보기 관련 상태
export { selectedPostAtom } from "./postDetail.atom.ts"

// 게시물 목록 및 총 개수 상태
export { postsWithUsersAtom, postsTotalAtom } from "./postsWithUsers.atom.ts"
export type { PostWithUsers, PostsWithUsersResponse, PostsWithUsersQueryResponse } from "./postsWithUsers.type.ts"

// 검색 및 페이징 관련 상태
export {
  skipAtom,
  limitAtom,
  searchQueryAtom,
  sortByAtom,
  sortOrderAtom,
  selectedTagAtom,
} from "./searchParams.atom.ts"
