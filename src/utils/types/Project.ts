export type Project = {
    id: string,
    title: {
      br: string,
      us: string,
    },
    images: {
      path: string,
      list: string[],
    },
    description: {
      br: string,
      us: string,
    },
    date: {
      br: string,
      us: string,
    },
    stacks: number[],
    url: string,
    repository?: string,
  }