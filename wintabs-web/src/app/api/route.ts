import { NextResponse } from "next/server"

export async function GET(request: Request) : Promise<NextResponse> {
    let strig = '';

    request.headers.forEach((val) => {
        strig += val + '\n';
    });

    const Url = new URL(request.url);

    strig += Url.searchParams.get('test');

    return new NextResponse(strig, {
        status: 200
    });
}