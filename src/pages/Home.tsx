import { bike1, bike2, bike3, bike4 } from "@/assets";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Bike, Shield, Wrench } from "lucide-react";

export default function Home() {
    const plugin = useRef(
        Autoplay({ delay: 2000 })
    )

    const imgs = [bike1, bike2, bike3, bike4];

    return (
        <>
            <div className="relative">
                <div className="absolute inset-0 z-[1] flex flex-col items-center justify-center text-center p-2 gap-4 bg-[rgba(0,0,0,0.5)] backdrop-blur-xs">
                    <h1 className="text-4xl font-bold text-white">Expert Bike Care at Your Convenience</h1>
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
                                <div className="min-h-150 h-[calc(100vh_-_15rem)]">
                                    <img src={img} alt="bike repairing"
                                        className="object-cover object-center w-full h-full" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <div className="mt-6 p-4 ">
                <h2 className="text-center text-xl mb-4">What We Offer</h2>
                <div className="flex gap-8 justify-center">
                    <Card className="w-70">
                        <CardContent className="grid place-items-center gap-2">
                            <Wrench size={48} />
                            Certified Mechanic
                        </CardContent>
                    </Card>
                    <Card className="w-70">
                        <CardContent className="grid place-items-center gap-2">
                            <Bike size={48} />
                            5,000+ Bikes Serviced
                        </CardContent>
                    </Card>
                    <Card className="w-70">
                        <CardContent className="grid place-items-center gap-2">
                            <Shield size={48} />
                            5,000+ Bikes Serviced
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
