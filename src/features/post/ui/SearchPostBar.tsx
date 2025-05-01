import { useSetSearchParam } from "@features/post/lib"

import { SortOrderSelect, SortSelect, TagSelect, SearchInput } from "@features/post/ui"

export const SearchPostBar = () => {
  useSetSearchParam()

  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <SearchInput />
      </div>
      <TagSelect />
      <SortSelect />
      <SortOrderSelect />
    </div>
  )
}
