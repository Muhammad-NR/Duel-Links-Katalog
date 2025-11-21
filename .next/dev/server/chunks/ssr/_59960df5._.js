module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Navigation() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Pastikan nama file icon di folder public sesuai ya
    const navItems = [
        {
            href: "/",
            icon: "/home.png",
            label: "Home"
        },
        {
            href: "/cards",
            icon: "/cards.png",
            label: "Cards"
        },
        {
            href: "/decks",
            icon: "/deck.png",
            label: "Decks"
        },
        {
            href: "/about",
            icon: "/about.png",
            label: "About"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 bg-black/90 border-t border-white/10 z-50 backdrop-blur-md pb-safe",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto flex items-center justify-around",
            children: navItems.map((item)=>{
                const isActive = pathname === item.href || item.href !== "/" && pathname.startsWith(item.href);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center gap-1 py-3 px-4 text-xs font-medium transition-all duration-200 group", // Logic Text: Putih terang kalo aktif, abu-abu kalo diem, putih kalo hover
                    isActive ? "text-white" : "text-muted-foreground group-hover:text-white"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-6 relative flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.icon,
                                alt: item.label,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full h-full object-contain transition-all duration-300", // --- LOGIC WARNA ICON ---
                                isActive ? "filter-none scale-110" // Kalo AKTIF: Warna Asli (Default)
                                 : "brightness-0 invert opacity-70 group-hover:filter-none group-hover:opacity-100 group-hover:scale-110")
                            }, void 0, false, {
                                fileName: "[project]/components/navigation.tsx",
                                lineNumber: 36,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 35,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 51,
                            columnNumber: 15
                        }, this)
                    ]
                }, item.href, true, {
                    fileName: "[project]/components/navigation.tsx",
                    lineNumber: 25,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/navigation.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/navigation.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CARDS_DATA",
    ()=>CARDS_DATA,
    "DECKS_DATA",
    ()=>DECKS_DATA
]);
const MONSTER_CARDS = [
    {
        id: "1",
        name: "Blue-Eyes White Dragon",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Dragon / Normal ]</b>
    This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.`,
        atk: 3000,
        def: 2500,
        level: 8,
        attribute: "Light",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/monsters/Blue-Eyes White Dragon.webp"
    },
    {
        id: "2",
        name: "Blue-Eyes Chaos Dragon",
        type: "Monster",
        rarity: "Super Rare",
        description: `<b>[ Dragon / Ritual / Effect ]</b>
    You can Ritual Summon this card with "Chaos Form". 
    \nMust be Ritual Summoned. 
    \nYour opponent cannot target this card with card effects, 
    also it cannot be destroyed by your opponent's card effects. 
    \nIf this card was Ritual Summoned using "Blue-Eyes White Dragon", when it declares an attack: You can change the battle positions of as many monsters your opponent controls as possible, and if you do, the ATK/DEF of those changed monsters become 0, also, this turn, if this card attacks a Defense Position monster, inflict piercing battle damage.`,
        atk: 3000,
        def: 0,
        level: 8,
        attribute: "Dark",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/monsters/Blue-Eyes Chaos Dragon.webp"
    },
    {
        id: "3",
        name: "Blue-Eyes Alternative White Dragon",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Dragon / Effect ]</b>
    This card cannot be Normal Summoned or Set.
    \nYou can Special Summon this card (from your hand) by revealing "Blue-Eyes White Dragon" in your hand. 
    \nYou can only Special Summon "Blue-Eyes Alternative White Dragon" once per turn this way. 
    \nThis card's name becomes "Blue-Eyes White Dragon" while it is on the field or in the GY. 
    \nOnce per turn: You can target 1 monster your opponent controls; destroy that target.`,
        atk: 3000,
        def: 2500,
        level: 8,
        attribute: "Light",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/monsters/Blue-Eyes Alternative White Dragon.webp"
    },
    {
        id: "4",
        name: "Kaibaman the Legend",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Warrior / Tuner / Effect ]</b>
    \nIf this card is Normal or Special Summoned: You can show 3 "Blue-Eyes White Dragon" in your hand, Deck, face-up field, and/or GY, then Special Summon 1 "Blue-Eyes White Dragon" from your hand, Deck, or GY.
    \nIf you Special Summoned "Blue-Eyes White Dragon" while this card is in your GY (except during the Damage Step): You can banish this card; add 1 "Blue-Eyes" monster from your Deck to your hand.
    \nYou can only use each effect of "Kaibaman the Legend" once per turn.`,
        atk: 200,
        def: 700,
        level: 1,
        attribute: "Light",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/monsters/Kaibaman the Legend.webp"
    },
    {
        id: "5",
        name: "Blue-Eyes Jet Dragon",
        type: "Monster",
        rarity: "Super Rare",
        description: `<b>[ Dragon / Effect ]</b>
    Other cards you control cannot be destroyed by your opponent's card effects.
    \nYou can only use each of the following effects of "Blue-Eyes Jet Dragon" once per turn, and can only activate them while "Blue-Eyes White Dragon" is on your field or in your GY.
    \nIf a card(s) on the field is destroyed by battle or card effect: You can Special Summon this card from the GY (if it was there when the card was destroyed) or hand (even if not).
    \nAt the start of the Damage Step, if this card battles: You can target 1 card your opponent controls; return it to the hand.`,
        atk: 3000,
        def: 0,
        level: 8,
        attribute: "Light",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/monsters/Blue-Eyes Jet Dragon.webp"
    },
    {
        id: "6",
        name: "Grandtusk Dragon",
        type: "Monster",
        rarity: "Super Rare",
        description: `<b>[ Dragon / Effect ]</b>
    If this card is Normal or Special Summoned: You can target up to 2 other cards on the field; destroy them, and if you do, this card gains 600 ATK for each card destroyed.
    \nYou can only use this effect of "Grandtusk Dragon" once per turn.`,
        atk: 1400,
        def: 2400,
        level: 8,
        attribute: "Earth",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/monsters/Grandtusk Dragon.webp"
    },
    {
        id: "7",
        name: "Skull Meister",
        type: "Monster",
        rarity: "Super Rare",
        description: `<b>[ Fiend / Effect ]</b>
    When a card effect is activated in your opponent's GY (Quick Effect): You can send this card from your hand to the GY; negate that effect.`,
        atk: 1700,
        def: 400,
        level: 4,
        attribute: "Dark",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/monsters/Skull Meister.webp"
    },
    {
        id: "8",
        name: "Blue-Eyes Tyrant Dragon",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Dragon / Fusion / Effect ]</b>
    "Blue-Eyes White Dragon" + 1 Dragon monster
    \nMust first be either Fusion Summoned, or Special Summoned from your Extra Deck by Tributing 1 "Blue-Eyes White Dragon" equipped with a Fusion Monster.
    \nUnaffected by Trap Cards or effects.
    \nThis card can attack all monsters your opponent controls, once each.
    \nOnce per turn, at the end of the Damage Step, if this card battled: You can target 1 Trap in your GY; Set it to your Spell & Trap Zone.`,
        atk: 3400,
        def: 2900,
        level: 8,
        attribute: "Light",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/extra_deck/Blue-Eyes Tyrant Dragon.webp"
    },
    {
        id: "9",
        name: "Blue-Eyes Spirit Dragon",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Dragon / Synchro / Effect ]</b>
   1 Tuner + 1 or more non-Tuner monsters "Blue-Eyes" monsters
   \nNeither player can Special Summon 2 or more monsters at the same time.
   \nOnce per turn, during either player's turn, when an effect of a card in the Graveyard is activated: You can negate the activation.
   \nDuring either player's turn: You can Tribute this Synchro Summoned card; Special Summon 1 LIGHT Dragon-Type Synchro Monster from your Extra Deck in Defense Position, except "Blue-Eyes Spirit Dragon", but destroy it during the End Phase of this turn.`,
        atk: 2500,
        def: 3000,
        level: 9,
        attribute: "Light",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/extra_deck/Blue-Eyes Spirit Dragon.webp"
    },
    {
        id: "10",
        name: "Azure-Eyes Silver Dragon",
        type: "Monster",
        rarity: "Super Rare",
        description: `<b>[ Dragon / Synchro / Effect ]</b>
    1 Tuner + 1+ non-Tuner Normal Monsters
    \nIf this card is Special Summoned: Until the end of the next turn, neither player can target Dragon monsters you currently control with card effects, also they cannot be destroyed by card effects.
    \nOnce per turn, during your Standby Phase: You can target 1 Normal Monster in your GY; Special Summon it.`,
        atk: 2500,
        def: 3000,
        level: 9,
        attribute: "Light",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/extra_deck/Azure-Eyes Silver Dragon.webp"
    },
    {
        id: "11",
        name: "Black Rose Moonlight Dragon",
        type: "Monster",
        rarity: "Super Rare",
        description: `<b>[ Dragon / Synchro / Effect ]</b>
    1 Tuner + 1 or more non-Tuner monsters
    \nIf this card is Special Summoned, or a Level 5 or higher monster(s) is Special Summoned to your opponent's side of the field: Target 1 Special Summoned monster your opponent controls; return that target to the hand.
    \nYou can only use this effect of "Black Rose Moonlight Dragon" once per turn.`,
        atk: 2400,
        def: 1800,
        level: 7,
        attribute: "Light",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/extra_deck/Black Rose Moonlight Dragon.webp"
    },
    {
        id: "12",
        name: "Lightstorm Dragon",
        type: "Monster",
        rarity: "Rare",
        description: `<b>[ Dragon / Synchro / Effect ]</b>
    1 Tuner + 1+ non-Tuner monsters
   \nIf this card is Special Summoned: You can target Spells/Traps on the field up to the number of Normal Monsters in your GY +1; destroy them.
   \nIf this card is destroyed by battle or card effect: You can target 1 Spell/Trap in your GY; Set it, but it cannot be activated unless you control a Normal Monster.
   \nYou can only use each effect of "Lightstorm Dragon" once per turn.`,
        atk: 2700,
        def: 3000,
        level: 9,
        attribute: "Light",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/extra_deck/Lightstorm Dragon.webp"
    },
    {
        id: "13",
        name: "Divine Dragon Knight Felgrand",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Warrior / Xyz / Effect ]</b>
    2 Level 8 monsters
    \nOnce per turn, during either player's turn: You can detach 1 Xyz Material from this card, then target 1 face-up monster on the field; this turn, its effects are negated, but it is unaffected by other card effects.`,
        atk: 2800,
        def: 1800,
        level: 8,
        attribute: "Light",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/extra_deck/Divine Dragon Knight Felgrand.webp"
    },
    {
        id: "14",
        name: "Dingirsu, the Orcust of the Evening Star",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Machine / Xyz / Effect ]</b>
    2 Level 8 monsters
    \nYou can only Special Summon "Dingirsu, the Orcust of the Evening Star(s)" once per turn.
    \nYou can also Xyz Summon this card by using an "Orcust" Link Monster you control as material.
    \nIf a card(s) you control would be destroyed by battle or card effect, you can detach 1 material from this card instead.
    \nIf this card is Special Summoned: You can activate 1 of these effects;
    \n● Send 1 card your opponent controls to the GY.
    \n● Attach 1 of your banished Machine monsters to this card as material.`,
        atk: 2600,
        def: 2100,
        level: 8,
        attribute: "Dark",
        deckTypes: [
            "Blue-Eyes",
            "Despia"
        ],
        image: "/cards/extra_deck/Dingirsu, the Orcust of the Evening Star.webp"
    },
    {
        id: "15",
        name: "Hieratic Seal of the Heavenly Spheres",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Dragon / Link / Effect ]</b>
    2 Dragon monsters
    \nOnce per opponent's turn, if this card is in the Extra Monster Zone (Quick Effect): You can Tribute 1 monster from your hand or field; return 1 face-up card on the field to the hand.
    \nIf this card is Tributed: Special Summon 1 Dragon monster from your hand or Deck, but make its ATK/DEF 0.
    \nYou can only use this effect of "Hieratic Seal of the Heavenly Spheres" once per turn.`,
        atk: 0,
        LINK: 2,
        attribute: "Light",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/extra_deck/Hieratic Seal of the Heavenly Spheres.webp"
    },
    {
        id: "16",
        name: "Salamangreat Almiraj",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Cyberse / Link / Effect ]</b>
    1 Normal Summoned monster with 1000 or less ATK
    \n(Quick Effect): You can Tribute this card, then target 1 monster you control; it cannot be destroyed by your opponent's card effects this turn.
    \nWhen a Normal Summoned monster you control is destroyed by battle, while this card is in your GY: You can Special Summon this card.
    \nYou can only use this effect of "Salamangreat Almiraj" once per turn.`,
        atk: 0,
        LINK: 1,
        attribute: "Fire",
        deckTypes: [
            "Blue-Eyes",
            "Salamangreat"
        ],
        image: "/cards/extra_deck/Salamangreat Almiraj.webp"
    },
    {
        id: "17",
        name: "Aluber the Jester of Despia",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Fairy / Effect ]</b>
    If this card is Normal or Special Summoned: You can add 1 "Branded" Spell/Trap from your Deck to your hand.
    \nIf a face-up Fusion Monster(s) you control is destroyed by battle, or leaves the field because of an opponent's card effect, while this card is in your GY: You can target 1 Effect Monster your opponent controls; Special Summon this card, and if you do, negate the targeted monster's effects until the end of this turn.
    \nYou can only use 1 "Aluber the Jester of Despia" effect per turn, and only once that turn.`,
        atk: 1800,
        def: 0,
        level: 4,
        attribute: "Dark",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/monsters/Aluber the Jester of Despia.webp"
    },
    {
        id: "18",
        name: "Dramaturge of Despia",
        type: "Monster",
        rarity: "Super Rare",
        description: `<b>[ Fairy / Effect ]</b>
    If a Fusion, Synchro, Xyz, or Link Monster is Special Summoned (except during the Damage Step): You can target 1 Effect Monster on the field; negate its effects until the end of this turn.
    \nIf this card in your hand or field is used as Fusion Material, and sent to the GY or banished: You can Special Summon this card.
    \nYou can only use each effect of "Dramaturge of Despia" once per turn.`,
        atk: 3000,
        def: 1500,
        level: 8,
        attribute: "Dark",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/monsters/Dramaturge of Despia.webp"
    },
    {
        id: "19",
        name: "Darklord Morningstar",
        type: "Monster",
        rarity: "Rare",
        description: `<b>[ Fairy / Effect ]</b>
    Cannot be Special Summoned.
    \nIf this card is Tribute Summoned: You can Special Summon "Darklord" monsters from your hand and/or Deck, up to the number of Effect Monsters your opponent controls.
    \nWhile you control another "Darklord" monster, your opponent cannot target this card with card effects.
    \nOnce per turn: You can send cards from the top of your Deck to the Graveyard, equal to the number of "Darklord" monsters on the field, and if you do, gain 500 LP for each "Darklord" card sent to the Graveyard by this effect.`,
        atk: 3000,
        def: 3000,
        level: 11,
        attribute: "Dark",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/monsters/Darklord Morningstar.webp"
    },
    {
        id: "20",
        name: "Ad Libitum of Despia",
        type: "Monster",
        rarity: "Rare",
        description: `<b>[ Fairy / Effect ]</b>
    During your Main Phase: You can make all face-up monsters currently on the field gain ATK equal to their Level x 100, until the end of your opponent's turn.
    \nIf this card is used as material for a Fusion Summon from the hand or field, and sent to the GY or banished: You can target 1 of your "Despia" monsters or 1 of your Level 8 or higher Fusion Monsters that is banished or in your GY, except "Ad Libitum of Despia"; Special Summon it.
    \nYou can only use each effect of "Ad Libitum of Despia" once per turn.`,
        atk: 1500,
        def: 2000,
        level: 8,
        attribute: "Dark",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/monsters/Ad Libitum of Despia.webp"
    },
    {
        id: "21",
        name: "Despian Comedy",
        type: "Monster",
        rarity: "Normal",
        description: `<b>[ Fairy / Effect ]</b>
    When your opponent activates a card or effect that targets a face-up "Despia" card(s) you control (Quick Effect): You can discard this card; negate that effect.
    \nIf this card is in your GY (Quick Effect): You can Tribute 1 Fusion Monster; Special Summon this card.
    \nYou can only use 1 "Despian Comedy" effect per turn, and only once that turn.`,
        atk: 0,
        def: 2000,
        level: 1,
        attribute: "Dark",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/monsters/Despian Comedy.webp"
    },
    {
        id: "22",
        name: "Despian Tragedy",
        type: "Monster",
        rarity: "Normal",
        description: `<b>[ Fairy / Effect ]</b>
    If this card is sent to the GY, or banished, by a card effect: You can add 1 "Despia" monster from your Deck to your hand, except "Despian Tragedy".
    \nYou can banish this card from your GY, then target 1 "Branded" Spell/Trap in your GY; Set it to your field.
    \nYou can only use 1 "Despian Tragedy" effect per turn, and only once that turn.`,
        atk: 400,
        def: 400,
        level: 1,
        attribute: "Dark",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/monsters/Despian Tragedy.webp"
    },
    {
        id: "23",
        name: "Masquerade the Blazing Dragon",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Dragon / Fusion / Effect ]</b>
    1 "Despia" monster + 1 LIGHT or DARK monster
    \nWhile you control this Fusion Summoned card, your opponent must pay 600 LP to activate cards or effects.
    \nIf your opponent controls a Ritual, Fusion, Synchro, Xyz, or Link Monster, while this card is in your GY (Quick Effect): You can Special Summon this card, but banish it when it leaves the field.
    \nYou can only use this effect of "Masquerade the Blazing Dragon" once per turn.`,
        atk: 2500,
        def: 2000,
        level: 8,
        attribute: "Dark",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/extra_deck/Masquerade the Blazing Dragon.webp"
    },
    {
        id: "24",
        name: "Starving Venom Fusion Dragon",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Dragon / Fusion / Effect ]</b>
    2 DARK monsters on the field, except Tokens
    \nIf this card is Fusion Summoned: You can make this card gain ATK equal to 1 opponent's Special Summoned monster, until the end of this turn.
    \nOnce per turn: You can target 1 Level 5 or higher monster your opponent controls; until the End Phase, this card's name becomes that monster's original name, and replace this effect with that monster's original effects.
    \nIf this Fusion Summoned card is destroyed: You can destroy all your opponent's Special Summoned monsters.`,
        atk: 2800,
        def: 2000,
        level: 8,
        attribute: "Dark",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/extra_deck/Starving Venom Fusion Dragon.webp"
    },
    {
        id: "25",
        name: "The First Darklord",
        type: "Monster",
        rarity: "Super Rare",
        description: `<b>[ Fairy / Fusion / Effect ]</b>
    3 DARK Fairy monsters
    \nYour opponent cannot target Fairy monsters you control with card effects.
    \nYou can only use 1 of the following effects of "The First Darklord" per turn, and only once that turn.
    \n● If this card is Fusion Summoned using "Darklord Morningstar" as material: You can destroy all cards your opponent controls.
    \n● During the Main Phase (Quick Effect): You can pay 1000 LP; Special Summon 1 Fairy monster from your hand or GY in Defense Position.`,
        atk: 4000,
        def: 4000,
        level: 12,
        attribute: "Dark",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/extra_deck/The First Darklord.webp"
    },
    {
        id: "26",
        name: "Despian Quaeritis",
        type: "Monster",
        rarity: "Super Rare",
        description: `<b>[ Fairy / Fusion / Effect ]</b>
    1 "Despia" monster + 1 LIGHT or DARK monster
    \nDuring the Main Phase (Quick Effect): You can change the ATK of all monsters currently on the field to 0 until the end of this turn, except Level 8 or higher Fusion Monsters.
    \nIf this face-up card in its owner's control leaves the field because of an opponent's card effect: You can add to your hand, or Special Summon, 1 "Fallen of Albaz" or 1 "Despia" monster, from your Deck.
    \nYou can only use each effect of "Despian Quaeritis" once per turn.`,
        atk: 2500,
        def: 2500,
        level: 8,
        attribute: "Light",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/extra_deck/Despian Quaeritis.webp"
    },
    {
        id: "27",
        name: "Despian Proskenion",
        type: "Monster",
        rarity: "Normal",
        description: `<b>[ Fiend / Fusion / Effect ]</b>
    1 "Despia" monster + 1 LIGHT monster + 1 DARK monster
    \nDuring the Main Phase (Quick Effect): You can target 1 Fusion, Synchro, Xyz, or Link Monster in your opponent's GY; banish it, or Special Summon it to your field.
    \nWhen this card destroys an opponent's monster by battle: You can inflict damage to your opponent equal to half that monster's original ATK or DEF (whichever is higher).
    \nYou can only use each effect of "Despian Proskenion" once per turn.`,
        atk: 3200,
        def: 3200,
        level: 11,
        attribute: "Light",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/extra_deck/Despian Proskenion.webp"
    },
    {
        id: "28",
        name: "Condemned Darklord",
        type: "Monster",
        rarity: "Super Rare",
        description: `<b>[ Fairy / Link / Effect ]</b>
    2 Fairy monsters
    \nYou can Tribute Summon Fairy monsters that require 2 Tributes by banishing 2 monsters from your GY instead of Tributing (it is still treated as a Tribute Summon).
    \nYou can discard 1 card; take 1 "Darklord" monster from your Deck, and either add it to your hand or send it to the GY.
    \nYou can only use this effect of "Condemned Darklord" once per turn.
    \nOnce per turn, during your End Phase: Gain 500 LP for each Fairy monster on the field.`,
        atk: 1600,
        LINK: 2,
        attribute: "Dark",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/extra_deck/Condemned Darklord.webp"
    }
];
const SPELL_CARDS = [
    {
        id: "61",
        name: "Vision with Eyes of Blue",
        type: "Spell",
        rarity: "Ultra Rare",
        description: `When you activate this card: You can reveal 1 "Blue-Eyes White Dragon" in your hand; Special Summon 1 monster from your hand.
    \nOnce per turn: You can target 1 face-up monster you control; return that face-up monster to the hand, then you can apply the following effect, based on the original name of the card returned to the hand.
    \n● "Blue-Eyes White Dragon": Special Summon 1 monster from your hand.
    \n● Other: Special Summon 1 "Blue-Eyes" monster from your hand.
    \nYou can only activate 1 "Vision with Eyes of Blue" per turn.`,
        attribute: "Continuous Spell",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/spells/Vision with Eyes of Blue.webp"
    },
    {
        id: "62",
        name: "Ultimate Fusion",
        type: "Spell",
        rarity: "Super Rare",
        description: `During the Main Phase: Fusion Summon 1 Fusion Monster from your Extra Deck that mentions "Blue-Eyes White Dragon" or "Blue-Eyes Ultimate Dragon" as material, by shuffling the Fusion Materials listed on it from your hand, field, and/or GY into the Deck, then, you can destroy face-up cards your opponent controls, up to the number of "Blue-Eyes White Dragon" and "Blue-Eyes Ultimate Dragon" used from the field as material.
    \nYou can only activate 1 "Ultimate Fusion" per turn.`,
        attribute: "Quick-Play Spell",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/spells/Ultimate Fusion.webp"
    },
    {
        id: "63",
        name: "Forbidden Droplet",
        type: "Spell",
        rarity: "Ultra Rare",
        description: `Send any number of other cards from your hand and/or field to the GY; choose that many Effect Monsters your opponent controls, and until the end of this turn, their ATK is halved, also their effects are negated.
    \nIn response to this card's activation, your opponent cannot activate cards, or the effects of cards, with the same original type (Monster/Spell/Trap) as the cards sent to the GY to activate this card.
    \nYou can only activate 1 "Forbidden Droplet" per turn.`,
        attribute: "Quick-Play Spell",
        deckTypes: [
            "Blue-Eyes",
            "Despia"
        ],
        image: "/cards/spells/Forbidden Droplet.webp"
    },
    {
        id: "64",
        name: "The Melody of Awakening Dragon",
        type: "Spell",
        rarity: "Super Rare",
        description: `Discard 1 card; add up to 2 "Blue-Eyes" monsters with 3000 or more ATK from your Deck to your hand.`,
        attribute: "Normal Spell",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/spells/The Melody of Awakening Dragon.webp"
    },
    {
        id: "65",
        name: "Bingo Machine, Go!!!",
        type: "Spell",
        rarity: "Rare",
        description: `Reveal 3 cards from your Deck that each meets at least 1 of the criteria listed below, your opponent randomly picks 1 for you to add to your hand, and you shuffle the rest into your Deck.
    \nYou can only activate 1 "Bingo Machine, Go!!!" per turn.
    \n● "Blue-Eyes" monster
    \n● Spell/Trap that specifically lists the card "Blue-Eyes White Dragon" or "Blue-Eyes Ultimate Dragon", except "Bingo Machine, Go!!!"`,
        attribute: "Spell Card",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/spells/Bingo Machine, Go!!!.webp"
    },
    {
        id: "66",
        name: "Mystical Space Typhoon",
        type: "Spell",
        rarity: "Ultra Rare",
        description: "Target 1 Spell/Trap on the field; destroy that target.",
        attribute: "Quick-Play Spell",
        image: "/cards/spells/Mystical Space Typhoon.webp",
        deckTypes: [
            "Blue-Eyes",
            "Despia"
        ]
    },
    {
        id: "67",
        name: "Super Polymerization",
        type: "Spell",
        rarity: "Ultra Rare",
        description: `Discard 1 card; Fusion Summon 1 Fusion Monster from your Extra Deck, using monsters from either field as Fusion Material.
    \nNeither player can activate cards or effects in response to this card's activation.`,
        attribute: "Quick-Play Spell",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/spells/Super Polymerization.webp"
    },
    {
        id: "68",
        name: "Banishment of the Darklords",
        type: "Spell",
        rarity: "Ultra Rare",
        description: `Add 1 "Darklord" card from your Deck to your hand, except "Banishment of the Darklords".
    \nYou can only activate 1 "Banishment of the Darklords" per turn.`,
        attribute: "Normal Spell",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/spells/Banishment of the Darklords.webp"
    },
    {
        id: "69",
        name: "Branded in Red",
        type: "Spell",
        rarity: "Super Rare",
        description: `Target 1 "Despia" monster or "Fallen of Albaz" in your GY; add it to your hand, then you can apply the following effect.
    \n● Fusion Summon 1 Level 8 or higher Fusion Monster from your Extra Deck, by banishing Fusion Materials listed on it from your hand or field, but it cannot attack directly this turn.
    \nYou can only activate 1 "Branded in Red" per turn.`,
        attribute: "Normal Spell",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/spells/Branded in Red.webp"
    },
    {
        id: "70",
        name: "Branded Opening",
        type: "Spell",
        rarity: "Rare",
        description: `Discard 1 card, then take 1 "Despia" monster from your Deck, and either add it to your hand or Special Summon it in Defense Position, also for the rest of this turn after this card resolves, you cannot Special Summon monsters from the Extra Deck, except Fusion Monsters.
    \nIf a Fusion Monster(s) you control would be destroyed by card effect, you can banish this card from your GY instead.
    \nYou can only use each effect of "Branded Opening" once per turn.`,
        attribute: "Quick-Play Spell",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/spells/Branded Opening.webp"
    },
    {
        id: "71",
        name: "Despia, Theater of the Branded",
        type: "Spell",
        rarity: "Normal",
        description: `During your Main Phase: You can Fusion Summon 1 Level 8 or higher Fusion Monster from your Extra Deck, using monsters from your hand or field as Fusion Material.
    \nIf a face-up non-Fusion Fairy monster you control leaves the field by an opponent's card effect, or is destroyed by battle: You can target 1 Level 8 or higher Fusion Monster in your GY; Special Summon it.
    \nYou can only use each effect of "Despia, Theater of the Branded" once per turn.`,
        attribute: "Field Spell",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/spells/Despia, Theater of the Branded.webp"
    }
];
const TRAP_CARDS = [
    {
        id: "121",
        name: "True Light",
        type: "Trap",
        rarity: "Rare",
        description: `Your opponent cannot target "Blue-Eyes White Dragon" in your Monster Zone with card effects.
    \nIf this face-up card is sent from the Spell & Trap Zone to the GY: Destroy all monsters you control.
    \nYou can only use the following effect of "True Light" once per turn.
    \nYou can activate 1 of these effects;
    \n● Special Summon 1 "Blue-Eyes White Dragon" from your hand or GY.
    \n● Set 1 Spell/Trap directly from your Deck, that specifically lists "Blue-Eyes White Dragon" in its text, with a different name from the cards you control and in your GY.`,
        attribute: "Continuous Trap",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/traps/True Light.webp"
    },
    {
        id: "122",
        name: "Majesty of the White Dragons",
        type: "Trap",
        rarity: "Normal",
        description: `Show up to 3 of the "Blue-Eyes White Dragon" in your hand, face-up Monster Zone, and/or GY, then destroy an equal number of cards your opponent controls.
    \nYou can banish this card from your GY; Ritual Summon 1 Ritual Monster from your hand, by Tributing "Blue-Eyes White Dragon(s)" from your hand or field whose total Levels equal its Level.
    \nYou can only use each effect of "Majesty of the White Dragons" once per turn.`,
        attribute: "Normal Trap",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/traps/Majesty of the White Dragons.webp"
    },
    {
        id: "123",
        name: "Judgment of the Branded",
        type: "Trap",
        rarity: "Normal",
        description: `Target 1 Level 8 or higher Fusion Monster you control; destroy all monsters your opponent controls with an equal or higher ATK than that monster.
    \nDuring the End Phase, if this card is in the GY because it was sent there to activate the effect of "Fallen of Albaz" this turn: You can Set this card.
    \nYou can only use this effect of "Judgment of the Branded" once per turn.`,
        attribute: "Normal Trap",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/traps/Judgment of the Branded.webp"
    }
];
const CARDS_DATA = [
    ...MONSTER_CARDS,
    ...SPELL_CARDS,
    ...TRAP_CARDS
];
const DECKS_DATA = [
    {
        id: "1",
        name: "Blue-Eyes",
        tier: "S",
        description: "Highly consistent engine with easy access to negates and spot removal for now.",
        skill: "Master of Blue-Eyes",
        winRate: 61,
        usage: 24,
        difficulty: 8,
        popularity: 5,
        mainCards: [
            "Blue-Eyes Chaos Dragon",
            "Blue-Eyes Alternative White Dragon",
            "Blue-Eyes Alternative White Dragon",
            "Kaibaman the Legend",
            "Kaibaman the Legend",
            "Kaibaman the Legend",
            "Blue-Eyes Jet Dragon",
            "Blue-Eyes Jet Dragon",
            "Grandtusk Dragon",
            "Skull Meister",
            "Skull Meister",
            "Blue-Eyes White Dragon",
            "Blue-Eyes White Dragon",
            "Blue-Eyes White Dragon",
            "Vision with Eyes of Blue",
            "Forbidden Droplet",
            "Forbidden Droplet",
            "Forbidden Droplet",
            "Ultimate Fusion",
            "The Melody of Awakening Dragon",
            "The Melody of Awakening Dragon",
            "The Melody of Awakening Dragon",
            "Bingo Machine, Go!!!",
            "True Light",
            "Majesty of the White Dragons"
        ],
        extraCards: [
            "Blue-Eyes Tyrant Dragon",
            "Blue-Eyes Spirit Dragon",
            "Azure-Eyes Silver Dragon",
            "Black Rose Moonlight Dragon",
            "Lightstorm Dragon",
            "Divine Dragon Knight Felgrand",
            "Dingirsu, the Orcust of the Evening Star",
            "Hieratic Seal of the Heavenly Spheres",
            "Salamangreat Almiraj"
        ],
        strategy: "Use Tuner monsters to perform Synchro Summons and maintain field advantage with Swordsoul monsters. Control the pace of the game."
    },
    {
        id: "2",
        name: "Despia",
        tier: "A",
        description: "Insane consistency that sets up a heavy LP tax on every activation, backed by an instant board wipe.",
        winRate: 56,
        usage: 18,
        difficulty: 7,
        popularity: 4,
        mainCards: [
            "Aluber the Jester of Despia",
            "Aluber the Jester of Despia",
            "Dramaturge of Despia",
            "Dramaturge of Despia",
            "Dramaturge of Despia",
            "Ad Libitum of Despia",
            "Ad Libitum of Despia",
            "Despian Comedy",
            "Despian Comedy",
            "Despian Tragedy",
            "Despian Tragedy",
            "Despian Tragedy",
            "Darklord Morningstar",
            "Darklord Morningstar",
            "Forbidden Droplet",
            "Forbidden Droplet",
            "Super Polymerization",
            "Banishment of the Darklords",
            "Banishment of the Darklords",
            "Branded in Red",
            "Branded in Red",
            "Branded Opening",
            "Branded Opening",
            "Branded Opening",
            "Despia, Theater of the Branded",
            "Despia, Theater of the Branded",
            "Mystical Space Typhoon",
            "Mystical Space Typhoon",
            "Judgment of the Branded",
            "Judgment of the Branded"
        ],
        extraCards: [
            "Masquerade the Blazing Dragon",
            "Starving Venom Fusion Dragon",
            "The First Darklord",
            "The First Darklord",
            "Despian Quaeritis",
            "Despian Quaeritis",
            "Despian Proskenion",
            "Condemned Darklord",
            "Dingirsu, the Orcust of the Evening Star"
        ],
        strategy: "Mill cards to setup Tearlament effects, use Fusion Summons to extend combos and control the board."
    }
];
}),
"[project]/app/cards/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CardsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/filter.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
// UBAH JADI 9 (Supaya tampilan grid 3x3 pas)
const CARDS_PER_PAGE = 9;
function CardsPage() {
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [typeFilter, setTypeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const filteredCards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARDS_DATA"].filter((card)=>{
            const matchesSearch = card.name.toLowerCase().includes(search.toLowerCase()) || card.description.toLowerCase().includes(search.toLowerCase());
            const matchesType = typeFilter === "all" || card.type === typeFilter;
            return matchesSearch && matchesType;
        });
    }, [
        search,
        typeFilter
    ]);
    const totalPages = Math.ceil(filteredCards.length / CARDS_PER_PAGE);
    const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const paginatedCards = filteredCards.slice(startIndex, startIndex + CARDS_PER_PAGE);
    const cardTypes = [
        "all",
        ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARDS_DATA"].map((c)=>c.type))
    ];
    const handlePageChange = (newPage)=>{
        setCurrentPage(Math.max(1, Math.min(newPage, totalPages)));
    };
    const handleFilterChange = (filter)=>{
        setTypeFilter(filter);
        setCurrentPage(1);
    };
    const handleSearchChange = (value)=>{
        setSearch(value);
        setCurrentPage(1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background pb-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto p-4 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold",
                                children: "Card Catalog"
                            }, void 0, false, {
                                fileName: "[project]/app/cards/page.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-3 w-5 h-5 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Search cards...",
                                        value: search,
                                        onChange: (e)=>handleSearchChange(e.target.value),
                                        className: "pl-10"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cards/page.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-sm font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cards/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Filter by Type"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cards/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: cardTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: typeFilter === type ? "default" : "outline",
                                                size: "sm",
                                                onClick: ()=>handleFilterChange(type),
                                                className: "capitalize",
                                                children: type
                                            }, type, false, {
                                                fileName: "[project]/app/cards/page.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cards/page.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cards/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Showing ",
                                    filteredCards.length,
                                    " card",
                                    filteredCards.length !== 1 ? "s" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cards/page.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Page ",
                                    currentPage,
                                    " of ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cards/page.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cards/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
                        children: paginatedCards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/cards/${card.id}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-card border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all cursor-pointer h-full flex flex-col group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-[813/1185] bg-black flex items-center justify-center overflow-hidden relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gray-900/30 animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cards/page.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: card.image || `/.jpg?height=1185&width=813&query=${encodeURIComponent(card.name) || "/placeholder.svg"} yugioh card art`,
                                                    alt: card.name,
                                                    loading: "lazy",
                                                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cards/page.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cards/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 space-y-3 flex flex-col flex-grow bg-secondary/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-lg truncate group-hover:text-primary transition-colors",
                                                    children: card.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cards/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs bg-primary/20 text-primary px-2 py-1 rounded font-medium",
                                                            children: card.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cards/page.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs bg-accent/20 text-accent px-2 py-1 rounded font-medium",
                                                            children: card.rarity
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cards/page.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cards/page.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-muted-foreground line-clamp-3 mt-auto pt-2",
                                                    dangerouslySetInnerHTML: {
                                                        __html: card.description
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cards/page.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cards/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cards/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this)
                            }, card.id, false, {
                                fileName: "[project]/app/cards/page.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/cards/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    paginatedCards.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-lg",
                            children: "No cards found matching your search"
                        }, void 0, false, {
                            fileName: "[project]/app/cards/page.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cards/page.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this),
                    totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-4 mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: ()=>handlePageChange(currentPage - 1),
                                disabled: currentPage === 1,
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    "Previous"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cards/page.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: Array.from({
                                    length: Math.min(5, totalPages)
                                }).map((_, i)=>{
                                    let pageNum;
                                    if (totalPages <= 5) {
                                        pageNum = i + 1;
                                    } else if (currentPage <= 3) {
                                        pageNum = i + 1;
                                    } else if (currentPage >= totalPages - 2) {
                                        pageNum = totalPages - 4 + i;
                                    } else {
                                        pageNum = currentPage - 2 + i;
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: currentPage === pageNum ? "default" : "outline",
                                        onClick: ()=>handlePageChange(pageNum),
                                        className: "w-10 h-10 p-0",
                                        children: pageNum
                                    }, pageNum, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/cards/page.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: ()=>handlePageChange(currentPage + 1),
                                disabled: currentPage === totalPages,
                                className: "flex items-center gap-2",
                                children: [
                                    "Next",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cards/page.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cards/page.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cards/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navigation"], {}, void 0, false, {
                fileName: "[project]/app/cards/page.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cards/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_59960df5._.js.map