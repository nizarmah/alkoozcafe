import { useStaticQuery, graphql } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'

type ImageDataType = {
  images: {
    fallback: {
      src: string
    }
  }
  width: number
  height: number
}

export type SeoProps = {
  /**
   * Meta description. If not given, the one from the gatsby-config will be used.
   */
  description?: string
  /**
   * Page title. If not given, the one from the gatsby-config will be used.
   */
  title?: string
  /**
   * Meta keywords, will only be used if given.
   */
  keywords?: string
  /**
   * Featured image, the data type should match the return type of `gatsbyImageData`.
   * If not given, the default image will be used.
   */
  featuredImage?: ImageDataType
}

const Seo: React.FC<SeoProps> = (props: SeoProps) => {
  // first get our default data from gatsby config and default featured image
  const { site, featuredImage } =
    useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
            og {
              siteName
            }
          }
        }
        featuredImage: file(
          absolutePath: { glob: "**/src/images/featured-image.png" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 1200)
          }
        }
      }
    `)

  // determine the featured image from props
  const ogImage =
    props.featuredImage ?? featuredImage.childImageSharp.gatsbyImageData

  // determine title and description
  const title = props.title ?? site.siteMetadata.title
  const description = props.description ?? site.siteMetadata.description

  const keywords = props.keywords ?? site.siteMetadata.keywords

  // Use the location hook to get current page URL
  const location = useLocation()

  // construct the meta array for passing into react helmet.
  const metas = [
    // basic seo
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content: keywords
    },
    {
      name: 'og:image',
      content: ogImage.images.fallback.src,
    },
    {
      name: 'og:image:width',
      content: `${ogImage.width}`,
    },
    {
      name: 'og:image:height',
      content: `${ogImage.height}`,
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:title',
      content: title,
    },
    {
      name: 'og:description',
      content: description,
    },
    {
      name: 'og:site_name',
      content: site!.siteMetadata!.og!.siteName,
    },
    {
      name: 'og:url',
      content: `${site?.siteMetadata?.siteUrl}${location.pathname}`,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:image',
      content: ogImage.images.fallback.src,
    }
  ]

  return (
    <Helmet>
      <html lang='en' />
      <meta charSet='utf-8' />
      <title>{title}</title>
      {metas.map(meta => (
        <meta key={meta.name} name={meta.name} content={meta.content} />
      ))}
    </Helmet>
  )
}

export default Seo
