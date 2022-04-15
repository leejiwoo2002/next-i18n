import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes('/api/') &&
    request.nextUrl.locale === 'default';

  if (shouldHandleLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/ko${request.nextUrl.pathname}`;
    return NextResponse.redirect(url);
  }

  // XXX.ico, XXX.png 등, 파일 형태의 경우 shouldHandleLocale에 해당하지 않아서 locale 지정하지 않고 pass!
  return undefined;
}
