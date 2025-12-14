import { Icons } from "@/components/ui/icons";

export const navItems = [
    {
        title: "Home"
    },
    {
        title: "Learn",
        dropdownItems: [
            {
            icon: Icons.OpenBook,
            title: "Blog"
            },
            {
            icon: Icons.Academy,
            title: "Teneo Academy"
            },
            {
            icon: Icons.Docs,
            title: "Teneo Docs"
            },
            {
            icon: Icons.Info,
            title: "Help Center"
            },
        ]
    },
    {
        title: "Build",
        dropdownItems: [
            {
            icon: Icons.Message,
            title: "Blog"
            },
            {
            icon: Icons.Agent,
            title: "Teneo Academy"
            },
            {
            icon: Icons.SmallGroup,
            title: "Teneo Docs"
            },
        ]
    },
    {
        title: "Join",
        dropdownItems: [
            {
            icon: Icons.Handshake,
            title: "Blog"
            },
            {
            icon: Icons.LoveSymbol,
            title: "Teneo Academy"
            },
            {
            icon: Icons.Media,
            title: "Teneo Docs"
            },
        ],
        hasSocials: true
    },
]