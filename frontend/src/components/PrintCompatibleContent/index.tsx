import * as React from 'react'

type PrintCompatibleContentProps = {
  header?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
}

const PrintCompatibleContent: React.FC<PrintCompatibleContentProps> = ({ header, children, footer }) =>
  (
    <table className='w-full'>
      <thead><tr><td>
        {header}
      </td></tr></thead>
      <tbody><tr><td>
        {children}
      </td></tr></tbody>
      <tfoot className='print:fixed print:bottom-0 print:left-0 print:right-0'><tr><td>
        {footer}
      </td></tr></tfoot>
    </table>
  )

export default PrintCompatibleContent
