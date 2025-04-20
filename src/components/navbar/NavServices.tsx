import { Wrench, Cog, ShieldAlert, HandCoins } from "lucide-react";
import {
    NavigationMenuContent,
    NavigationMenuLink,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Link, NavLink } from "react-router";

export default function NavServices() {
    return (
        <>
            <NavLink to={"/services"} className={({ isActive }) => `${isActive ? "bg-accent" : "bg-background"} block rounded-md text-accent-foreground`}>
                <NavigationMenuTrigger className="cursor-pointer bg-transparent">
                    Services
                </NavigationMenuTrigger>
            </NavLink>
            <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[300px] ">
                    <li>
                        <NavigationMenuLink asChild>
                            <Link to={"/services/tune-ups"}>
                                <div className="p-1 flex gap-2 items-center text-sm font-medium leading-none">
                                    <Wrench />
                                    <span>Tune Ups</span>
                                </div>
                            </Link>
                        </NavigationMenuLink>
                    </li>
                    <li>
                        <NavigationMenuLink asChild>
                            <Link to={"/services/repaiers"}>
                                <div className="p-1 flex gap-2 items-center text-sm font-medium leading-none">
                                    <Cog />
                                    <span>Repairs</span>
                                </div>
                            </Link>
                        </NavigationMenuLink>
                    </li>
                    <li>
                        <NavigationMenuLink asChild>
                            <Link to={"/services/emergency"}>
                                <div className="p-1 flex gap-2 items-center text-sm font-medium leading-none">
                                    <ShieldAlert />
                                    <span>Emergency</span>
                                </div>
                            </Link>
                        </NavigationMenuLink>
                    </li>
                    <li>
                        <NavigationMenuLink asChild>
                            <Link to={"/services/pricing"}>
                                <div className="p-1 flex gap-2 items-center text-sm font-medium leading-none">
                                    <HandCoins />
                                    <span>Pricing</span>
                                </div>
                            </Link>
                        </NavigationMenuLink>
                    </li>
                </ul>
            </NavigationMenuContent>
            <NavigationMenuViewport asChild />
        </>
    )
}
