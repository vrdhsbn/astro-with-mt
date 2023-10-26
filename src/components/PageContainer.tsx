import { Grid, styled } from 'styled-system/jsx'

const PageContainer = () => {
  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)" gap="24px" mt="16px">
      {pages.items.map((page: PageType) => (
        <styled.a href={`/webpage/${page.id}/`} _hover={{ opacity: '.7' }}>
          {page.assets[0] ? (
            <img src={page.assets[0].url} alt="" />
          ) : (
            <img src="/assets/images/noimage.png" alt="no image" />
          )}
          <styled.p mt="4px" fontSize="18px">
            {page.title}
          </styled.p>
          <p>{page.customFields[0].value}</p>
        </styled.a>
      ))}
    </Grid>
  )
}

export default PageContainer
