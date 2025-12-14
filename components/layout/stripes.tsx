export const Stripes = () => {
    return (
        <div className="absolute inset-0 -z-10 grid h-full w-full grid-cols-8">
            {Array.from({ length: 8 }).map((_, i) => (
                <div
                    key={i}
                    className={[
                        "h-full w-full overflow-hidden",
                        "border-r-[0.5px] border-l-[0.5px] border-(--brand--teal-border)",
                        "bg-(--brand--teal-1)",
                        i === 0 && "border-l-(--neutral--tranparent)",
                    ]
                        .filter(Boolean)
                        .join(" ")}
                />
            ))}
        </div>
    );
};