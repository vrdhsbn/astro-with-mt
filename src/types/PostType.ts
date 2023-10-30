export type PostsType = {
  items: Array<PostType>
}

export type PostType = {
  allowComments: boolean
  allowTrackbacks: boolean
  assets: [
    {
      blog: {
        id: number
      }
      class: string
      createdBy: {
        displayName: string
        id: number
        userpicUrl: string
      }
      createdDate: string
      customFields: [
        {
          basename: string
          value: string
        },
      ]
      description: string
      fileExtension: string
      filePath: string
      filename: string
      id: number
      label: string
      meta: {
        fileSize: number
        height: number
        width: number
      }
      mimeType: string
      modifiedBy: {
        displayName: string
        id: number
        userpicUrl: string
      }
      modifiedDate: string
      parent: {
        id: number
      }
      tags: [string]
      type: string
      updatable: boolean
      url: string
    },
  ]
  author: {
    displayName: string
    id: number
    userpicUrl: string
  }
  basename: string
  blog: {
    id: number
  }
  body: string
  categories: [
    {
      id: number
      label: string
      parent: string
    },
  ]
  class: string
  commentCount: number
  comments: [
    {
      author: {
        displayName: string
        id: number
        userpicUrl: string
      }
      blog: {
        id: number
      }
      body: string
      createdBy: {
        displayName: string
        id: number
        userpicUrl: string
      }
      createdDate: string
      customFields: [
        {
          basename: string
          value: string
        },
      ]
      date: string
      entry: {
        id: number
      }
      id: number
      link: string
      modifiedBy: {
        displayName: string
        id: number
        userpicUrl: string
      }
      modifiedDate: string
      parent: number
      status: string
      updatable: true
    },
  ]
  createdDate: string
  customFields: [
    {
      basename: string
      value: string
    },
  ]
  date: string
  excerpt: string
  format: string
  id: number
  keywords: string
  modifiedDate: string
  more: string
  permalink: string
  pingsSentUrl: [string]
  status: string
  tags: [string]
  title: string
  trackbackCount: number
  trackbacks: [
    {
      blog: {
        id: number
      }
      blogName: string
      createdBy: {
        displayName: string
        id: number
        userpicUrl: string
      }
      createdDate: string
      customFields: [
        {
          basename: string
          value: string
        },
      ]
      date: string
      entry: string
      excerpt: string
      id: number
      ip: string
      modifiedBy: {
        displayName: string
        id: number
        userpicUrl: string
      }
      modifiedDate: string
      status: string
      title: string
      updatable: boolean
      url: string
    },
  ]
  unpublishedDate: string
  updatable: true
}
