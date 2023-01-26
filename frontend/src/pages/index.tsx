import * as React from 'react'
import { graphql } from 'gatsby'
import type { HeadFC } from 'gatsby'

import Menu from '../components/Menu'
import Background from '../components/Background'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { cleanMenu } from '../utils/cleaner'
import PrintCompatibleContent from '../components/PrintCompatibleContent'

type IndexPageProps = {
  data: {
    sanityMenu: NullableSanityMenu
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) =>
  (
    <main className='text-slate-900'>
      <Seo />
      <Background />
      <div className='px-2 print:px-0 lg:px-16 print:lg:px-0 md:px-8 print:md:px-0'>
        <PrintCompatibleContent
          header={
            <Header className='w-full' />
          }
          footer={
            <Footer className='print:absolute w-full bottom-0' />
          }
        >
          <Menu
            className='w-full print:w-full print:px-8 xl:w-2/3 print:xl:w-full xl:px-12 print:xl:px-8 lg:w-5/6 print:lg:w-full lg:px-6 print:lg:px-8'
            data={cleanMenu(data.sanityMenu)}
          />
        </PrintCompatibleContent>
      </div>
    </main>
  )

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
