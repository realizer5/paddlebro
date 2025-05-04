import { bike1, bike2, bike3, bike4 } from "@/assets";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { AlarmClock, Bike, CircleDollarSign, Shield, ShieldCheck, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
    const [liveCounter, setLiveCounter] = useState("");

    const plugin = useRef(
        Autoplay({ delay: 2000 })
    );

    const imgs = [bike1, bike2, bike3, bike4];

    const cardItems = [
        { icon: <Wrench size={48} />, text: "Certified Mechanics" },
        { icon: <Bike size={48} />, text: "5,000+ Bikes Serviced" },
        { icon: <AlarmClock size={48} />, text: "Same-Day Service" },
        { icon: <ShieldCheck size={48} />, text: "12-Month Warranty" },
        { icon: <CircleDollarSign size={48} />, text: "Secure Payments" },
    ];

    return (
        <>
            <div className="relative">
                <div className="absolute inset-0 z-[1] flex flex-col items-center justify-center text-center p-2 gap-4 bg-[rgba(0,0,0,0.5)] backdrop-blur-xs">
                    <h1 className="text-4xl font-bold text-white">Expert <span className="text-blue-500">Bike</span> Care at Your <span className="text-green-500">Convenience</span></h1>
                    <p className="text-2xl font-semibold text-white">Book bike repairs or visit our workshop</p>
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="cursor-pointer">Schedule Service</Button>
                        <Button variant={"secondary"} className="cursor-pointer">Become Mechanic</Button>
                    </div>
                </div>
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full overflow-hidden"
                >
                    <CarouselContent>
                        {imgs.map((img) => (
                            <CarouselItem key={img}>
                                <div className="min-h-150 h-[calc(100vh_-_8rem)]">
                                    <img src={img} alt="bike repairing"
                                        className="object-cover object-center w-full h-full" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <div className="curve-container"><div className="curve"></div></div>
            <div className="p-4">
                <h2 className="text-center text-3xl mb-6 font-bold">What We Offer</h2>
                <div className="flex gap-8 justify-center flex-wrap">
                    {cardItems.map(item =>
                        <Card className="flex-none w-70" key={item.text}>
                            <CardContent className="grid place-items-center gap-2">
                                {item.icon}
                                <p>{item.text}</p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
            <div className="p-4">
                <div>{liveCounter}</div>
                <Button className="cursor-pointer">Book Now</Button>
            </div>
            <div className="p-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Basic Tune-Up</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}
