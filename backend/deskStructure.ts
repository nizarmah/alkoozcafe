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
      ...S.documentTypeListItems(),
    ])
