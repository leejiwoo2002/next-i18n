import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    console.log(req);
    
    let response = NextResponse.next();
    return response;

}