import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { setLoadingState } from '../middlewares/reduxStore/ToggleStateSlice'
import { useDispatch, useSelector } from 'react-redux';

function Loader() {
  const isLoading = useSelector(state => state.toggleState.isLoading)
  const router = useRouter();
  const dispatch = useDispatch();

  function startLoading() {
    dispatch(setLoadingState(true));
  }

  function stopLoading() {
    dispatch(setLoadingState(false));
  }

  useEffect(() => {
    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', stopLoading);
    router.events.on('routeChangeError', stopLoading);

    return () => {
      router.events.off('routeChangeStart', startLoading);
      router.events.off('routeChangeComplete', stopLoading);
      router.events.off('routeChangeError', stopLoading);
    };
  }, [router])

  return (
    <>
      {isLoading && <div id="loaderContainer">
        <div className="loadingio-spinner-dual-ball-rz6gcm629e">
          <div className="ldio-a3qz12lvrk9"><div>
          </div>
            <div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default Loader
