import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'
const AboutPage = () => {
  return (
    <BlogLayout>
      <h1>AboutPage</h1>
      <p>
        Find me in <code>./web/src/pages/AboutPage/AboutPage.js</code>
      </p>
      <p>
        My default route is named <code>about</code>, link to me with `
        <Link to={routes.about()}>About</Link>`
      </p>
    </BlogLayout>
  )
}

export default AboutPage
