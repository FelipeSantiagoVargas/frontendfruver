import { NextResponse } from 'next/server'

export function middleware(request) {
    console.log(request)
    if(request.nextUrl.pathname=="/home"){
        return NextResponse.redirect(new URL("/login", request.url))
    }
  }