import * as React from 'react'
import type { HeadFC } from 'gatsby'

import Seo from '../components/Seo'

type IndexPageProps = {}

const IndexPage: React.FC<IndexPageProps> = ({}) =>
  (
    <main className='text-slate-900'>
      <Seo />

      <object className='w-screen h-screen' data="/Al%20Kooz%20Cafe%20—%20Menu.pdf" type="application/pdf">
        <p>Looks like your browser can't display the menu — <a href="/Al%20Kooz%20Cafe%20—%20Menu.pdf">Click here to download it.</a></p>
      </object>
    </main>
  )

export default IndexPage

export const Head: HeadFC = () => <title>Al Kooz Café</title>
