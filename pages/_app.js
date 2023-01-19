import { Provider } from 'react-redux'
import Navbar from '../layouts/Navbar'
import Loader from '../layouts/Loader'
import Footer from '../layouts/Footer'
import reduxStore from '../middlewares/reduxStore/ReduxStore'
import '../styles/Globals.css'
import '../styles/BankDetailSearchForm.css'
// import '../styles/Fonts.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={reduxStore}>
        <Loader />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  )
}
