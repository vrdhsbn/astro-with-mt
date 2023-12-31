import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import type { PostType, PostsType } from '@/types/PostType'

const ArticleList = ({ posts }: { posts: PostsType }) => {
  return (
    <styled.ul mt="16px" ml="16px" listStyleType="disc">
      {posts.items.map((post: PostType) => (
        <styled.li className={css({ '& + li': { marginTop: '8px' } })}>
          <styled.a
            href={`/news/${post.id}/`}
            textDecoration={'underline'}
            _hover={{ opacity: '.7' }}
          >
            {post.title}
          </styled.a>
        </styled.li>
      ))}
    </styled.ul>
  )
}

export default ArticleList
