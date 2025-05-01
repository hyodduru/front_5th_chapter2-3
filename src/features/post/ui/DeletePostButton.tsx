import { useSetAtom } from "jotai"
import { postsWithUsersAtom } from "@features/post/model"
import { Button } from "@shared/ui"

import type { ReactNode } from "react"
import { useDeletePostMutation } from "../api"

interface DeletePostButtonProps {
  children: ReactNode
  postId: number
}

export const DeletePostButton = ({ children, postId }: DeletePostButtonProps) => {
  const setPosts = useSetAtom(postsWithUsersAtom)

  const deletePostMutation = useDeletePostMutation({
    onSuccess: (postId) => {
      setPosts((prev) => prev?.filter((post) => post.id !== postId))
    },
  })

  return (
    <Button variant="ghost" size="sm" onClick={() => deletePostMutation.mutate(postId)}>
      {children}
    </Button>
  )
}
