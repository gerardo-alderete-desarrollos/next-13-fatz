import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';

export async function GET() {
    try {
        // const tasks = await prisma.task.findMany();
    
        // console.log('tasks', tasks);
    
        return NextResponse.json('Obteniendo Tareas');
        
    } catch (error) {
        console.log('ERROR-----', error);
    }
}

export function POST() {
    return NextResponse.json('Creando Tareas');
}