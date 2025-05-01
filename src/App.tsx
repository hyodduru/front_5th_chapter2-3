import { RouterProvider, ReactQueryProvider } from "./app/provider"
import PostsManagerPage from "@pages/PostsManagerPage"

const App = () => {
  return (
    <ReactQueryProvider>
      <RouterProvider>
        <PostsManagerPage />
      </RouterProvider>
    </ReactQueryProvider>
  )
}

export default App
