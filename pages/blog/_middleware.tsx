import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const supportLanguage = ['ko', 'en'];
  const response = NextResponse.next();

  //접근 불가한 페이지 라우팅 block
  if (!supportLanguage.includes(request.nextUrl.locale)) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return response;
}
