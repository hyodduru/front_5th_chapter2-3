import { useSetAtom } from "jotai"
import { selectedUserIdAtom } from "@entities/user/model"
import { dialogAtomFamily } from "@shared/model"

import type { ReactNode } from "react"

interface OpenUserDialogButtonProps {
  children: ReactNode
  userId: number | undefined
}

export const OpenUserDialogButton = ({ children, userId }: OpenUserDialogButtonProps) => {
  const setSelectedUserId = useSetAtom(selectedUserIdAtom)
  const setUserModal = useSetAtom(dialogAtomFamily("user-detail"))

  const openUserModal = (userId: number) => {
    setSelectedUserId(userId)
    setUserModal(true)
  }

  return (
    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => openUserModal(userId || 0)}>
      {children}
    </div>
  )
}
