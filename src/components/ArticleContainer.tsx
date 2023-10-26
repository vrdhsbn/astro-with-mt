import { Grid, styled } from 'styled-system/jsx'

type PostType = {
  assets: Array<any>
  title: string
  date: string
  excerpt: string
} & Record<string, unknown>

type PostsType = {
  items: Array<PostType>
}

const ArticleContainer = ({ posts }: { posts: PostsType }) => {
  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)" gap="24px" mt="16px">
      {posts.items.map((post: PostType) => (
        <styled.a href={`/news/${post.id}/`} _hover={{ opacity: '.7' }}>
          {post.assets[0] ? (
            <img src={post.assets[0].url} alt="" />
          ) : (
            <img src="/assets/images/noimage.png" alt="no image" />
          )}
          <styled.p mt="4px" fontSize="18px">
            {post.title}
          </styled.p>
          <styled.p mt="4px">{post.date.split('T')[0]}</styled.p>
          <styled.p mt="4px">{post.excerpt}</styled.p>
        </styled.a>
      ))}
    </Grid>
  )
}

export default ArticleContainer
