import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

import { structure } from './deskStructure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Al Kooz Cafe',

  projectId: 'hg675kdy',
  dataset: 'production',

  plugins: [
    deskTool({ structure }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
