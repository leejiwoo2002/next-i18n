import { useRouter } from 'next/router';
import { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const supportLocales = ['ko','en','ja'];

  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes('/api/') &&
    request.nextUrl.locale === 'default'

  if (shouldHandleLocale) {
    const url = request.nextUrl.clone()
    url.pathname = `/ko${request.nextUrl.pathname}`
    return NextResponse.redirect(url)
  }

  return undefined
}