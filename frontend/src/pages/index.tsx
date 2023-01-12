import * as React from 'react'
import { graphql } from 'gatsby'
import type { HeadFC } from 'gatsby'

import Menu from '../components/Menu'
import Background from '../components/Background'
import Header from '../components/Header'

type IndexPageProps = {
  data: {
    sanityMenu: SanityMenu
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  console.log(data)

  return (
    <main className='text-slate-900'>
      <Background />
      <div className='px-2 lg:px-24 lg:px-16 md:px-8'>
        <Header />
        <Menu
          className='w-full xl:w-2/3 xl:px-12 lg:w-5/6 lg:px-6'
          data={data.sanityMenu}
        />
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Al Kooz Café</title>

export const query = graphql`
{
  sanityMenu(_id: { eq: "menu" }) {
    categoryList {
      name {
        nameArabic
        nameEnglish
      }
      itemList {
        name {
          nameArabic
          nameEnglish
        }
        priceList {
          amount
          currency
        }
      }
    }
  }
}
`
