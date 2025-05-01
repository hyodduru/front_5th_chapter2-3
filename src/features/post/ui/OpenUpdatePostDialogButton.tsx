import { useSetAtom } from "jotai"
import { selectedPostAtom } from "@features/post/model"
import { dialogAtomFamily } from "@shared/model"
import { Button } from "@shared/ui"

import type { ReactNode } from "react"
import type { PostType } from "@entities/post/model"

interface OpenUpdatePostDialogButtonProps {
  children: ReactNode
  post: PostType
}

export const OpenUpdatePostDialogButton = ({ children, post }: OpenUpdatePostDialogButtonProps) => {
  const setShowEditDialog = useSetAtom(dialogAtomFamily("edit-post"))
  const setSelectedPost = useSetAtom(selectedPostAtom)

  const openUpdatePostDialog = () => {
    setSelectedPost(post)
    setShowEditDialog(true)
  }

  return (
    <Button variant="ghost" size="sm" onClick={openUpdatePostDialog}>
      {children}
    </Button>
  )
}
