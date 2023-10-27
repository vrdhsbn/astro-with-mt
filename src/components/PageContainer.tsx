import { Box, Grid, styled } from 'styled-system/jsx'

// 型の書き方がわからない。urlやvalueで型エラーが出ている
type PageType = {
  assets: Array<string>
} & Record<string, string>

type PagesType = {
  items: Array<PageType>
}

const PageContainer = ({ pages }: { pages: PagesType }) => {
  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)" gap="24px" mt="16px">
      {pages.items.map((page: PageType) => (
        <styled.a href={`/webpage/${page.id}/`} _hover={{ opacity: '.7' }}>
          {page.assets[0] ? (
            <img src={page.assets[0].url} alt="" />
          ) : (
            <img src="/assets/images/noimage_page.png" alt="no image" />
          )}
          <Box
            w={'95%'}
            p={'16px'}
            bg={'#fff'}
            m={'-10px auto 0'}
            pos={'relative'}
            boxShadow={'2px 2px 8px 0 rgba(0, 0, 0, .2)'}
          >
            <styled.p mt="4px" fontSize="18px">
              {page.title}
            </styled.p>
            <styled.p mt="8px" fontSize="14px">
              {page.customFields[0].value}
            </styled.p>
          </Box>
        </styled.a>
      ))}
    </Grid>
  )
}

export default PageContainer
