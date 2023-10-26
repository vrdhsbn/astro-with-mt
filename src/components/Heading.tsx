import { styled } from 'styled-system/jsx'

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <styled.h2 fontSize={'24px'} fontWeight={700}>
      {children}
    </styled.h2>
  )
}

export default Heading
