import styled, { CSSObject } from "styled-components"

export default (styles: CSSObject) => <Props extends {}>(
  Component: React.ComponentType<Props>,
) => styled(Component)(styles)
