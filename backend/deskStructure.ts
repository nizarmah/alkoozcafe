import { DocumentActionsResolver } from 'sanity'
import { StructureBuilder, StructureResolver } from 'sanity/desk'

export const deskAction: DocumentActionsResolver = (prev, context) => {
  if (context.schemaType === 'menu') {
    return prev.filter(({ action }) =>
      action === 'publish'
    )
  }

  return prev
}

export const deskStructure: StructureResolver = (S: StructureBuilder) =>
  S.list()
  .title('Content')
  .items([
    S.listItem()
      .title('Menu')
      .child(
        S.editor()
          .id('menu')
          .schemaType('menu')
          .documentId('menu')),
          ...S.documentTypeListItems().filter(listItem => { 
            const listItemId = listItem.getId()
            if (!listItemId) {
              return false
            }

            return !['menu'].includes(listItemId)
          })
  ])
