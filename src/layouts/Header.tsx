import { HStack, styled } from 'styled-system/jsx'

const Header = () => {
  return (
    <HStack w={'100%'} bg={'#dedede'} py={'16px'} justifyContent={'center'} alignItems={'center'}>
      <styled.h1 fontSize={'20px'} fontWeight={'700'}>
        <a href="/">Astro + MT demo</a>
      </styled.h1>
    </HStack>
  )
}

export default Header
