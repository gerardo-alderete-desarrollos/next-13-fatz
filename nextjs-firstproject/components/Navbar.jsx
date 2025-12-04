import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-slate-400 mb-4 flex justify-between items-center px-20 p-3">
            <Link  className="font-bold text-black"href={'/'}>
                Home
            </Link>
            <ul>
                <li>
                <Link className="font-bold text-black" href={'about'}>About</Link>
                </li>
            </ul>
        </nav>
    )
}