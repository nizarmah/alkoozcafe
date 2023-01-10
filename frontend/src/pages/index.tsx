import * as React from 'react'
import { graphql } from 'gatsby'
import type { HeadFC } from 'gatsby'

import Menu from '../components/Menu'
import Background from '../components/Background'
import Header from '../components/Header'

type IndexPageProps = {
  data: {
    allSanityItem: AllSanityItem
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const allSanityItem: AllSanityItem = data.allSanityItem

  return (
    <main className='text-slate-900'>
      <Background />
      <div className='px-2 lg:px-24 lg:px-16 md:px-8'>
        <Header />
        <Menu
          className='w-full xl:w-2/3 xl:px-12 lg:w-5/6 lg:px-6'
          data={allSanityItem}
        />
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Al Kooz Café</title>

export const query = graphql`
{
  allSanityItem {
    group(field: {category: {name: {nameEnglish: SELECT}}}) {
      fieldValue
      nodes {
        name {
          nameEnglish
          nameArabic
        }
        priceList {
          amount
          currency
        }
        category {
          name {
            nameEnglish
            nameArabic
          }
          priority
        }
      }
    }
  }
}
`
