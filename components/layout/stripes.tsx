interface StripesProps {
    variant?: "light" | "dark";
}

export const Stripes = ({ variant = "light" }: StripesProps) => {
    const borderColor = variant === "light"
        ? "border-gray-400/50"
        : "border-gray-800";

    const bgColor = variant === "light"
        ? "bg-transparent"
        : "bg-transparent";
        
    return (
        <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none grid grid-cols-6 container mx-auto px-8 lg:px-16">
            {Array.from({ length: 6 }).map((_, i) => (
                <div
                    key={i}
                    className={[
                        "h-full w-full overflow-hidden",
                        "border-r-[0.5px] border-l-[0.5px]",
                        borderColor,
                        bgColor,
                        i === 0 && (variant === "light" ? "border-l-gray-500" : "border-l-gray-800"),
                    ]
                        .filter(Boolean)
                        .join(" ")}
                />
            ))}
        </div>
    );
};