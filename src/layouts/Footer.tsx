import { HStack, styled } from 'styled-system/jsx'

const Footer = () => {
  return (
    <HStack w={'100%'} bg={'#dedede'} py={'8px'} justifyContent={'center'} alignItems={'center'}>
      <styled.p fontSize={'14px'}>&copy; Astro + MT demo</styled.p>
    </HStack>
  )
}

export default Footer
