import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/unknown')) {
    return NextResponse.rewrite(new URL('/_test/0', request.url))
  }
}