import {
  AddPostButton,
  PostsWithUsersTable,
  SearchPostBar,
  Pagination,
  AddPostDialog,
  UpdatePostDialog,
  PostDetailDialog,
} from "@features/post/ui"

import { AddCommentDialog, UpdateCommentDialog } from "@features/comments/ui"
import { UserDialog } from "@entities/user/ui"
import { Card, CardContent, CardHeader, CardTitle } from "@shared/ui"

export const PostsManagerWidget = () => {
  return (
    <>
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>게시물 관리자</span>
            <AddPostButton />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <SearchPostBar />
            <PostsWithUsersTable />
            <Pagination />
          </div>
        </CardContent>
      </Card>
      <AddPostDialog />
      <UpdatePostDialog />
      <PostDetailDialog />
      <AddCommentDialog />
      <UpdateCommentDialog />
      <UserDialog />
    </>
  )
}
