import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function Loader() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();
  function startLoading() {
    setIsLoading(true)
  }
  function stopLoading() {
    setIsLoading(false)
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
