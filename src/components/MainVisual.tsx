import { styled } from 'styled-system/jsx'

const MainVisual = ({ assets }: { assets: string }) => {
  return <styled.img src={assets} alt="mv" w={'100%'} h={'240px'} objectFit={'cover'} />
}

export default MainVisual
