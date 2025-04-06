import { LogoImg } from "../assets";

export default function Logo({ className = "" }: { className: string }) {
    return (
        <img src={LogoImg} alt="Logo" className={`object-center ${className}`} />
    )
}

