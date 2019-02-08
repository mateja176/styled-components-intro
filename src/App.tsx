import * as React from "react"
import withAppStyles from "./withAppStyles"

const App: React.SFC<{ className: any }> = ({ className }) => (
  <div className={className}>
    <p>Hello Styled Components</p>
  </div>
)

export default withAppStyles(App)
