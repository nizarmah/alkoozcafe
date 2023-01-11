import { StructureBuilder, StructureResolver } from 'sanity/desk'

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
  .title('Base')
  .items([
    S.listItem()
      .title('Menu')
      .child(
        S.document()
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
