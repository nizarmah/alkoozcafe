import * as React from 'react'

type NameProps = {
  className: string
  data: SanityName
}

const Name: React.FC<NameProps> = ({ className, data }) => {
  const arabicName: string = data.nameArabic
  const englishName: string = data.nameEnglish
  
  return (
    <div className={className}>
      <div className='flex justify-between'>
        <h4>{englishName}</h4>
        <h4>{arabicName}</h4>
      </div>
    </div>
  )
}

export default Name
