import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'
const HomepagePage = () => {
  return (
    <BlogLayout>
      <BlogPostsCell/>
    </BlogLayout>
  )
}

export default HomepagePage
