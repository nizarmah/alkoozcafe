import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'hg675kdy',
    dataset: 'production'
  },
  graphql: [
    {
      playground: true
    },
  ],
})
