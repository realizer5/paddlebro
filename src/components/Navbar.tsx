import { Link, NavLink } from "react-router";
import { Logo } from "@/components";

export default function Navbar() {
    const navItems = [
        { name: "Home", slug: "/" },
        { name: "Services", slug: "/" },
        { name: "Book Now", slug: "/" },
        { name: "About Us", slug: "/" },
        { name: "Contact", slug: "/" },
    ];
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-primary text-primary-foreground rounded-xl m-2">
            <div>
                <Link to="/" className="flex items-center gap-2">
                    <Logo className="w-10 invert" />
                    <h1 className="font-bold text-2xl">PedalPro</h1>
                </Link>
            </div>
            <ul className="flex gap-4">
                {navItems.map(item => (
                    <li key={item.name}>
                        <NavLink to={item.slug} className={({ isActive }) => `${isActive && "text-blue-200"}`}>{item.name}</NavLink>
                    </li>
                ))}
            </ul>
            <div>
                <Link to={"/login"} >Login</Link>
            </div>
        </nav>
    )
}
