import { useQuery } from "@tanstack/react-query"

import { PostsWithUsersResponse } from "@features/post/model"

import type { UseQueryOptions } from "@tanstack/react-query"
import type { UsersResponse } from "@entities/user/model"
import type { PostsResponse } from "@entities/post/model"

const baseUrl = import.meta.env.PROD ? "https://dummyjson.com" : "/api"

export const fetchApi = (path: string, options?: RequestInit) =>
  fetch(`${baseUrl}${path}`, options).then((res) => res.json())

export const usePostsBySearchQuery = (searchQuery: string, options?: UseQueryOptions<PostsWithUsersResponse>) =>
  useQuery<PostsWithUsersResponse>({
    queryKey: ["searchPosts", searchQuery],
    queryFn: async () => {
      try {
        const response = await fetchApi(`/api/posts/search?q=${searchQuery}`)
        return await response.json()
      } catch (error) {
        throw new Error(`게시물 검색 오류: ${error}`)
      }
    },
    enabled: searchQuery !== "",
    ...options,
  })

export const usePostsByTagQuery = (
  selectedTag: string,
  options?: Omit<UseQueryOptions<Omit<PostsWithUsersResponse, "limit" | "skip">>, "queryKey" | "queryFn">,
) =>
  useQuery({
    queryKey: ["postsByTag", selectedTag],
    queryFn: async () => {
      try {
        const [postsResponse, usersResponse] = await Promise.all([
          fetch(`/api/posts/tag/${selectedTag}`),
          fetch("/api/users?limit=0&select=username,image"),
        ])
        const postsData: PostsResponse = await postsResponse.json()
        const usersData: UsersResponse = await usersResponse.json()

        const postsWithUsers = postsData?.posts?.map((post) => ({
          ...post,
          author: usersData.users.find((user) => user.id === post.userId),
        }))

        return { posts: postsWithUsers, total: postsData.total }
      } catch (error) {
        throw new Error(`태그별 게시물 가져오기 오류: ${error}`)
      }
    },
    enabled: !!selectedTag,
    ...options,
  })
