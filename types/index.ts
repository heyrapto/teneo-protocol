export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: "primary" | "secondary" | "tetiary"
    className?: string;
    icon?: "chevronDown" | "chevronUpRight";
}