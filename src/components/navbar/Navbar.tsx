import { Link, NavLink } from "react-router";
import { Logo } from "@/components";
import { Button } from "../ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import NavServices from "./NavServices";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const navItems = [
        { name: "Home", slug: "/" },
        { name: "Service", code: <NavServices /> },
        { name: "Book Now", slug: "/book-now" },
        { name: "About Us", slug: "/about-us" },
        { name: "Contact", slug: "/contact" },
    ];
    return (
        <NavigationMenu className="max-w-full justify-between px-6 py-4 border shadow"
            viewport={false}>
            <div>
                <Link to="/" className="flex items-center gap-2">
                    <Logo className="w-10 dark:invert" />
                    <h1 className="font-bold text-2xl">PedalPro</h1>
                </Link>
            </div>
            <NavigationMenuList>
                {navItems.map(item => (
                    <NavigationMenuItem key={item.name}>
                        {item.code ? item.code :
                            <button className="h-9">
                                <NavLink to={item.slug} className={({ isActive }) => `${isActive ? "bg-accent" : "bg-background"} text-accent-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}>
                                    {item?.name}
                                </NavLink>
                            </button>
                        }
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
            <div className="space-x-4 flex items-center">
                <Link to={"/login"}>
                    <Button variant={"outline"} className="cursor-pointer">
                        Login
                    </Button>
                </Link>
                <ThemeToggle />
            </div>
        </NavigationMenu >
    )
}
