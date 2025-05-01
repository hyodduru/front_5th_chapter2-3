import { atom } from "jotai"
import { NewCommentType } from "../../comments/model/addComment.type.ts"

export const newCommentAtom = atom<NewCommentType>({
  body: "",
  postId: 0,
  userId: 1,
})
