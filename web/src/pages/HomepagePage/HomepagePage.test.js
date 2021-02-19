import { render } from '@redwoodjs/testing'

import HomepagePage from './HomepagePage'

describe('HomepagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomepagePage />)
    }).not.toThrow()
  })
})
