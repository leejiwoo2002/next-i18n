import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const supportLanguage = ['ko', 'en'];
  const response = NextResponse.next();

  if (!supportLanguage.includes(request.nextUrl.locale)) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return response;
}
