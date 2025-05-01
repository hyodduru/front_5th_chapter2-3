import { atom } from "jotai"
import { PostsResponse } from "@entities/post/model"
import { PostWithUsers } from "./postsWithUsers.type"

export const postsWithUsersAtom = atom<PostWithUsers[]>([])

export const postsTotalAtom = atom<PostsResponse["total"]>(0)
