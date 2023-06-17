import { RoutesMain } from './routes/RoutesMain'
import { GlobalStyles } from './styles/globalStyles'
import { ResetCss } from './styles/reset'

export const App = () => {
  return (
    <>
      <ResetCss />
      <GlobalStyles />
      <RoutesMain />
    </>
  )
}
