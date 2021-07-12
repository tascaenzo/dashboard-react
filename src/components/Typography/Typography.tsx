import styled from 'styled-components'

interface TextProps {
  size?: string,
  color?: string,
  variant?: string,
  uppercase?: boolean,
}

const variantToSize = (variant: string | undefined) => {
  switch (variant) {
    case "h1": return "6rem"
    case "h2": return "5rem"
    case "h3": return "4rem"
    case "h4": return "3rem"
    case "h5": return "2rem"
    case "h6": return "1.5rem"
    default: return "6rem"
  }
}

export const Text = styled.h1<TextProps>`
  font-size: ${(props) => (props.size ? props.size : "0.9rem")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.textColor)};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "lowercase")};
  font-weight: 500;
  margin: 0;
`

export const Subtitle = styled(Text) <TextProps>`
  font-size: ${(props) => (props.size ? props.size : "0.7rem")};
  color: ${(props) => (props.color ? props.color : "#B2BFE1")};
  margin-top: 2px;
`

export const Typography = styled(Text) <TextProps>`
  font-size: ${(props) => (variantToSize(props.variant))};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.textColor)};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "lowercase")};
`