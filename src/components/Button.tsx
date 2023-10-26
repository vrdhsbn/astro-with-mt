import { styled } from 'styled-system/jsx'

const Button = ({ label, href }: { label: string; href: string }) => {
  return (
    <styled.a
      href={href}
      bg={'#004b9a'}
      color={'#fff'}
      p={'6px 24px'}
      borderRadius={'8px'}
      fontWeight={700}
    >
      {label}
    </styled.a>
  )
}

export default Button
