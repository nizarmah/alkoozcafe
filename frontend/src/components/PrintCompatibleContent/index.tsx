import * as React from 'react'

type PrintCompatibleContentProps = {
  header?: React.ReactNode
  children: React.ReactNode
}

const PrintCompatibleContent: React.FC<PrintCompatibleContentProps> = ({ header, children }) =>
  (
    <table className='w-full'>
      <thead><tr><td>
        {header}
      </td></tr></thead>
      <tbody><tr><td>
        {children}
      </td></tr></tbody>
    </table>
  )

export default PrintCompatibleContent
