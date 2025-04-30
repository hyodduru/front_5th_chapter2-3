import { User } from "../../user/model/user"

export type Comment = {
  id: string
  postId: string
  body: string
  user: Omit<User, "image">
}
