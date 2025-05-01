import { useAtom, useAtomValue } from "jotai"
import { searchQueryAtom, selectedPostAtom } from "@features/post/model"
import { CommentsList } from "@features/comments/ui"
import { highlightText } from "@shared/lib"
import { dialogAtomFamily } from "@shared/model"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@shared/ui"

export const PostDetailDialog = () => {
  const [showPostDetailDialog, setShowPostDetailDialog] = useAtom(dialogAtomFamily("post-detail"))
  const searchQuery = useAtomValue(searchQueryAtom)
  const selectedPost = useAtomValue(selectedPostAtom)

  return (
    <Dialog open={showPostDetailDialog} onOpenChange={setShowPostDetailDialog}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{highlightText(selectedPost?.title, searchQuery)}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>{highlightText(selectedPost?.body, searchQuery)}</p>
          <CommentsList />
        </div>
      </DialogContent>
    </Dialog>
  )
}
