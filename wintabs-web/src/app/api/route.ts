import { redirect } from "next/navigation";
import { NextResponse } from "next/server"

export async function GET(request: Request) : Promise<NextResponse> {
    let strig = '';

    request.headers.forEach((val) => {
        strig += val + '\n';
    });

    return new NextResponse(strig, {
        status: 200
    });
}