export const streamsQuery = `
  query Streams($searchQuery: String) {
    streams(limit: 9, query: $searchQuery) {
      items {
        name
        id
        commits {
          totalCount
        }
      }
    }
  }
`
