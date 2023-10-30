export type PagesType = {
  items: Array<PageType>
}

export type PageType = {
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
      tags: Array<string>
      type: string
      updatable: true
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
  createdDate: string
  customFields: [
    {
      basename: string
      value: string
    },
  ]
  date: string
  excerpt: string
  folder: {
    id: number
    label: string
    parent: string
  }
  format: string
  id: number
  keywords: string
  modifiedDate: string
  more: string
  permalink: string
  status: string
  tags: Array<string>
  title: string
  unpublishedDate: string
  updatable: true
}
