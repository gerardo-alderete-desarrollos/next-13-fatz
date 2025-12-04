import Link from 'next/link'

export const metadata = {
    title: "tienda oficial"
}

export default function TiendaLayout({ children }) {
    return <>
        <nav>
            <ul>
                <li>
                    <Link href="/tienda/categorias">Categorias</Link>
                </li>
                <li>
                    <Link href="/tienda/categorias/computadoras">Computadoras</Link>

                </li>
            </ul>
        </nav>
        {children}
    </>
}