import { useEffect } from 'react'
import Router from 'next/router'
import nProgress from 'nprogress'

export function useNProogress() {
  useEffect(() => {
    Router.events.on('routeChangeStart', nProgress.start)
    Router.events.on('routeChangeError', nProgress.done)
    Router.events.on('rouChangeComplete', nProgress.done)

    return () => {
      Router.events.off('routeChangeStart', nProgress.start)
      Router.events.off('routeChangeError', nProgress.done)
      Router.events.off('routeChangeComplete', nProgress.done)
    }
  }, [])
}
