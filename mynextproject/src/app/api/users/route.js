import { NextResponse } from "next/server";
console.log(process.env.TOKEN);
export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return NextResponse.json({ message: 'works !', data: data});
}

export async function POST(request) {
    const data = await request.json();
    console.log(data);
    
    return NextResponse.json({ message: 'creando !'});
}
export function PUT() {
    
    return NextResponse.json({ message: 'actualizando !'});
}
export function DELETE() {
    
    return NextResponse.json({ message: 'eliminando !'});
}