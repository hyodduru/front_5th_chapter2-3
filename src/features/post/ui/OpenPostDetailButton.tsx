import { useSetAtom } from "jotai"
import { Button } from "@shared/ui"
import { dialogAtomFamily } from "@shared/model"

import type { ReactNode } from "react"
import type { PostType } from "@entities/post/model"
import { selectedPostAtom } from "@features/post//model"

interface OpenPostDetailButtonProps {
  children: ReactNode
  post: PostType
}

export const OpenPostDetailButton = ({ children, post }: OpenPostDetailButtonProps) => {
  const setShowDetailDialog = useSetAtom(dialogAtomFamily("post-detail"))
  const setSelectedPost = useSetAtom(selectedPostAtom)

  const openPostDetail = (post: PostType) => {
    setSelectedPost(post)
    setShowDetailDialog(true)
  }

  return (
    <Button variant="ghost" size="sm" onClick={() => openPostDetail(post)}>
      {children}
    </Button>
  )
}
