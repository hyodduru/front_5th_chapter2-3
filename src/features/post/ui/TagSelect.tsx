import { useEffect } from "react"
import { useAtom } from "jotai"
import { selectedTagAtom } from "@features/post/model"
import { tagsAtom } from "@entities/tag/model"
import { useTagsQuery } from "@entities/tag/api"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui"

export const TagSelect = () => {
  const [tags, setTags] = useAtom(tagsAtom)
  const [selectedTag, setSelectedTag] = useAtom(selectedTagAtom)

  const { data, isLoading } = useTagsQuery()

  useEffect(() => {
    if (!isLoading && data) {
      setTags(data)
    }
  }, [data, isLoading])

  return (
    <Select value={selectedTag} onValueChange={(value) => setSelectedTag(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="태그 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">모든 태그</SelectItem>
        {tags.map((tag) => (
          <SelectItem key={tag.url} value={tag.slug}>
            {tag.slug}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
