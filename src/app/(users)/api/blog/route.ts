import { NextRequest } from "next/server";
import { blogs } from './data';

export const GET = async (): Promise<Response> => {
    return new Response(JSON.stringify( blogs), { status: 200, headers: { 'Content-Type': 'application/json' } });
};
