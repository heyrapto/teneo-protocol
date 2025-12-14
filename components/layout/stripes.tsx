interface StripesProps {
    variant?: "light" | "dark";
}

export const Stripes = ({ variant = "light" }: StripesProps) => {
    const borderColor = variant === "light"
        ? "border-gray-400"
        : "border-gray-800";

    const bgColor = variant === "light"
        ? "bg-transparent"
        : "bg-transparent";

    return (
        <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none grid grid-cols-7 mx-auto max-w-[1920px]">
            {Array.from({ length: 7 }).map((_, i) => (
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