(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Navigation() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
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
            href: "/skill",
            icon: "/Skill.png",
            label: "Skills"
        },
        {
            href: "/about",
            icon: "/about.png",
            label: "About"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 bg-black/90 border-t border-white/10 z-50 backdrop-blur-md pb-safe",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto flex items-center justify-around",
            children: navItems.map((item)=>{
                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center gap-1 py-3 px-2 text-[10px] sm:text-xs font-medium transition-all duration-200 group min-w-[60px]", isActive ? "text-white" : "text-muted-foreground group-hover:text-white"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-6 relative flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.icon,
                                alt: item.label,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-full object-contain transition-all duration-300", isActive ? "filter-none scale-110" : "brightness-0 invert opacity-70 group-hover:filter-none group-hover:opacity-100 group-hover:scale-110")
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 47,
                            columnNumber: 15
                        }, this)
                    ]
                }, item.href, true, {
                    fileName: "[project]/components/navigation.tsx",
                    lineNumber: 27,
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
_s(Navigation, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CARDS_DATA",
    ()=>CARDS_DATA,
    "DECKS_DATA",
    ()=>DECKS_DATA,
    "SKILLS_DATA",
    ()=>SKILLS_DATA
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
    },
    {
        id: "29",
        name: "Fallen of Albaz",
        type: "Monster",
        rarity: "Super Rare",
        description: `<b>[ Dragon / Effect ]</b>
    If this card is Normal or Special Summoned (except during the Damage Step): You can discard 1 card; Fusion Summon 1 Fusion Monster from your Extra Deck, using monsters on either field as Fusion Material, including this card, but you cannot use other monsters you control as Fusion Material.
    \nYou can only use this effect of "Fallen of Albaz" once per turn.`,
        atk: 1800,
        def: 0,
        level: 4,
        attribute: "Dark",
        deckTypes: [
            "Despia"
        ],
        image: "/cards/monsters/Fallen of Albaz.webp"
    },
    {
        id: "30",
        name: "Blue-Eyes Ultimate Dragon",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Dragon / Fusion ]</b>
    "Blue-Eyes White Dragon" + "Blue-Eyes White Dragon" + "Blue-Eyes White Dragon"`,
        atk: 4500,
        def: 3800,
        level: 12,
        attribute: "Light",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/extra_deck/Blue-Eyes Ultimate Dragon.webp"
    },
    {
        id: "31",
        name: "Black Luster Soldier",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Warrior / Ritual ]</b>
    You can Ritual Summon this card with "Black Luster Ritual".`,
        atk: 3000,
        def: 2500,
        level: 8,
        attribute: "Earth",
        deckTypes: [
            "Blue-Eyes"
        ],
        image: "/cards/monsters/Black Luster Soldier.webp"
    },
    {
        id: "32",
        name: "Elemental HERO Neos",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Warrior / Normal ]</b>
    "A new Elemental HERO has arrived from Neo-Space! When he initiates a Contact Fusion with a Neo-Spacian his unknown powers are unleashed."`,
        atk: 2500,
        def: 2000,
        level: 7,
        attribute: "Light",
        deckTypes: [
            "HERO"
        ],
        image: "/cards/monsters/Elemental HERO Neos.webp"
    },
    {
        id: "33",
        name: "Rainbow Dragon",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Dragon / Effect ]</b>
    (This card is always treated as an "Ultimate Crystal" card.)
    \nCannot be Normal Summoned/Set.
    \nMust be Special Summoned (from your hand) by having 7 "Crystal Beast" cards with different names on your field and/or GY.
    \nThis card cannot activate the following effects the turn it is Special Summoned.
    \n(Quick Effect): You can send all face-up "Crystal Beast" monsters you control to the GY; this card gains 1000 ATK for each monster sent to the GY.
    \nYou can banish all "Crystal Beast" monsters from your GY; shuffle all cards on the field into the Deck.`,
        atk: 4000,
        def: 0,
        level: 10,
        attribute: "Light",
        deckTypes: [
            "Crystal Beast",
            "HERO"
        ],
        image: "/cards/monsters/Rainbow Dragon.webp"
    },
    {
        id: "34",
        name: "Armed Dragon Thunder LV10",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Dragon / Effect ]</b>
    If this card was Special Summoned by the effect of an "Armed Dragon" monster, it gains effects based on its own ATK.
    \n● 1+: This card's name becomes "Armed Dragon LV10".
    \n● 10+: Possession of this card cannot switch.
    \n● 100+: Cannot be destroyed by battle.
    \n● 1000+: Once per turn, during your opponent's turn (Quick Effect): You can send 1 card from your hand to the GY, then target 1 other card on the field; destroy it, and if you do, this card gains 1000 ATK.
    \n● 10000+: Once per turn: You can destroy all other cards on the field.`,
        atk: 3000,
        def: 2000,
        level: 10,
        attribute: "Wind",
        deckTypes: [
            "Armed Dragon",
            "HERO"
        ],
        image: "/cards/monsters/Armed Dragon Thunder LV10.webp"
    },
    {
        id: "35",
        name: "Number 39: Utopia",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Warrior / Xyz / Effect ]</b>
    2 Level 4 monsters
    \nWhen a monster declares an attack: You can detach 1 material from this card; negate the attack.
    \nIf this card is targeted for an attack, while it has no material: Destroy this card.`,
        atk: 2500,
        def: 2000,
        level: 4,
        attribute: "Light",
        deckTypes: [
            "Utopia"
        ],
        image: "/cards/extra_deck/Number 39 Utopia.jpg"
    },
    {
        id: "36",
        name: "Astraltopia",
        type: "Monster",
        rarity: "Super Rare",
        description: `<b>[ Warrior / Effect ]</b>
    If an Xyz Monster(s) is on the field: You can Special Summon this card from your hand.
    \nYou can send 1 other card from your hand or field to the GY; add 1 "Xyz", "Onomat", "Zexal", or "Number" Spell/Trap, from your Deck to your hand.
    \nYou can only use each effect of "Astraltopia" once per turn.`,
        atk: 0,
        def: 0,
        level: 4,
        attribute: "Light",
        deckTypes: [
            "Utopia"
        ],
        image: "/cards/monsters/Astraltopia.jpg"
    },
    {
        id: "37",
        name: "Number C39: Utopia Ray Victory",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Warrior / Xyz / Effect ]</b>
    3 Level 5 monsters
    \nIf this card attacks, your opponent cannot activate any Spell/Trap Cards until the end of the Damage Step.
    \nIf this card has a "Utopia" monster as an Xyz Material, it gains this effect.
    \n● When this card declares an attack on a face-up monster your opponent controls: You can detach 1 Xyz Material from this card; negate that opponent's face-up monster's effects, also this card gains ATK equal to that opponent's monster's ATK.
    \nThese changes last until the end of this turn.`,
        atk: 2800,
        def: 2500,
        level: 5,
        attribute: "Light",
        deckTypes: [
            "Utopia"
        ],
        image: "/cards/extra_deck/Number C39 Utopia Ray Victory.jpg"
    },
    {
        id: "38",
        name: "Sky Striker Ace - Roze",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Warrior / Effect ]</b>
    If a "Sky Striker Ace" monster(s) is Normal or Special Summoned, except "Sky Striker Ace - Roze" (except during the Damage Step): You can Special Summon this card from your hand.
    \nIf an opponent's monster in the Extra Monster Zone is destroyed by battle, or leaves the field because of your card effect, while this card is in your GY: You can Special Summon this card, then you can negate the effects of 1 face-up monster your opponent controls, until the end of this turn.
    \nYou can only use each effect of "Sky Striker Ace - Roze" once per turn.`,
        atk: 1500,
        def: 1500,
        level: 4,
        attribute: "Light",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/monsters/Sky Striker Ace - Roze.jpg"
    },
    {
        id: "39",
        name: "Sky Striker Ace - Raye",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Warrior / Effect ]</b>
   (Quick Effect): You can Tribute this card; Special Summon 1 "Sky Striker Ace" monster from your Extra Deck to the Extra Monster Zone.
    \nWhile this card is in your GY, if a face-up "Sky Striker Ace" Link Monster you control is destroyed by battle, or leaves the field because of an opponent's card effect: You can Special Summon this card.
    \nYou can only use each effect of "Sky Striker Ace - Raye" once per turn.`,
        atk: 1500,
        def: 1500,
        level: 4,
        attribute: "Dark",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/monsters/Sky Striker Ace - Raye.jpg"
    },
    {
        id: "40",
        name: "Surgical Striker - H.A.M.P.",
        type: "Monster",
        rarity: "Super Rare",
        description: `<b>[ Machine / Effect ]</b>
    (This card is always treated as a "Sky Striker" card.)
    \nIf you control a "Sky Striker Ace" monster, you can Special Summon this card (from your hand) to either field by Tributing 1 monster from that field.
    \nYou can only Special Summon "Surgical Striker - H.A.M.P." once per turn this way.
    \nWhen this card is destroyed by battle: You can target 1 card your opponent controls; destroy it.`,
        atk: 2500,
        def: 2500,
        level: 8,
        attribute: "Dark",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/monsters/Surgical Striker - H.A.M.P..jpg"
    },
    {
        id: "41",
        name: "Sky Striker Ace - Hayate",
        type: "Monster",
        rarity: "Super Rare",
        description: `<b>[ Machine / Link / Effect ]</b>
    1 non-WIND "Sky Striker Ace" monster
    \nYou can only Special Summon "Sky Striker Ace - Hayate(s)" once per turn.
    \nThis card can attack directly.
    \nAfter damage calculation, if this card battled: You can send 1 "Sky Striker" card from your Deck to the GY.`,
        atk: 1500,
        LINK: 1,
        attribute: "Wind",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/extra_deck/Sky Striker Ace - Hayate.jpg"
    },
    {
        id: "42",
        name: "Sky Striker Ace - Kaina",
        type: "Monster",
        rarity: "Super Rare",
        description: `<b>[ Machine / Link / Effect ]</b>
    1 non-EARTH "Sky Striker Ace" monster
    \nIf this card is Special Summoned: You can target 1 face-up monster your opponent controls; it cannot attack until the end of your opponent's turn.
    \nEach time you activate a "Sky Striker" Spell Card, or its effect, gain 100 LP immediately after the card or effect resolves.
    \nYou can only Special Summon "Sky Striker Ace - Kaina(s)" once per turn.`,
        atk: 1500,
        LINK: 1,
        attribute: "Earth",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/extra_deck/Sky Striker Ace - Kaina.jpg"
    },
    {
        id: "43",
        name: "Sky Striker Ace - Shizuku",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Machine / Link / Effect ]</b>
    1 non-WATER "Sky Striker Ace" monster
    \nMonsters your opponent controls lose 100 ATK/DEF for each Spell in your GY.
    \nOnce per turn, during the End Phase, if this card was Special Summoned this turn: You can add 1 "Sky Striker" Spell from your Deck to your hand, with a name different from the cards in your GY.
    \nYou can only Special Summon "Sky Striker Ace - Shizuku(s)" once per turn.`,
        atk: 1500,
        LINK: 1,
        attribute: "Water",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/extra_deck/Sky Striker Ace - Shizuku.jpg"
    },
    {
        id: "44",
        name: "Sky Striker Ace - Zeke",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Machine / Link / Effect ]</b>
    2 monsters, including a "Sky Striker Ace" monster
    \nMust be Link Summoned.
    \nYou can only Special Summon "Sky Striker Ace - Zeke(s)" once per turn.
    \nIf this card is Link Summoned: You can target 1 face-up monster on the field; banish it until your opponent's next End Phase.
    \nOnce per turn: You can target 1 other card you control; this card gains 1000 ATK, then, send the targeted card to the GY.`,
        atk: 1500,
        LINK: 2,
        attribute: "Dark",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/extra_deck/Sky Striker Ace - Zeke.jpg"
    },
    {
        id: "45",
        name: "Sky Striker Ace - Kagari",
        type: "Monster",
        rarity: "Ultra Rare",
        description: `<b>[ Machine / Link / Effect ]</b>
    1 non-FIRE "Sky Striker Ace" monster
    \nIf this card is Special Summoned: You can target 1 "Sky Striker" Spell in your GY; add it to your hand.
    \nGains 100 ATK for each Spell in your GY.
    \nYou can only Special Summon "Sky Striker Ace - Kagari(s)" once per turn.`,
        atk: 1500,
        LINK: 1,
        attribute: "Fire",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/extra_deck/Sky Striker Ace - Kagari.jpg"
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
    },
    {
        id: "72",
        name: "Polymerization",
        type: "Spell",
        rarity: "Super Rare",
        description: `Fusion Summon 1 Fusion Monster from your Extra Deck, using monsters from your hand or field as Fusion Material.`,
        attribute: "Normal Spell",
        deckTypes: [
            "HERO"
        ],
        image: "/cards/spells/Polymerization.webp"
    },
    {
        id: "73",
        name: "Rank-Up-Magic Numeron Force",
        type: "Spell",
        rarity: "Super Rare",
        description: `Target 1 face-up Xyz Monster you control; Special Summon from your Extra Deck, 1 "Number C" monster with the same Type as that monster you control, but 1 Rank higher, by using it as the Xyz Material. (This Special Summon is treated as an Xyz Summon. Xyz Materials attached to it also become Xyz Materials on the Summoned monster.)
    \nThen, if any face-up cards are on the field other than this card and the monster Summoned by it, negate the effects of those other card.`,
        attribute: "Normal Spell",
        deckTypes: [
            "Utopia"
        ],
        image: "/cards/spells/Rank-Up-Magic Numeron Force.jpg"
    },
    {
        id: "74",
        name: "Sky Striker Mobilize - Engage!",
        type: "Spell",
        rarity: "Ultra Rare",
        description: `If you control no monsters in your Main Monster Zone: Add 1 "Sky Striker" card from your Deck to your hand, except "Sky Striker Mobilize - Engage!", then, if you have 3 or more Spells in your GY, you can draw 1 card.`,
        attribute: "Normal Spell",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/spells/Sky Striker Mobilize - Engage!.jpg"
    },
    {
        id: "75",
        name: "Sky Striker Mecha - Eagle Booster",
        type: "Spell",
        rarity: "Rare",
        description: `If you control no monsters in your Main Monster Zone: Target 1 face-up monster on the field; that target is unaffected by card effects this turn, except its own, and if you have 3 or more Spells in your GY, it cannot be destroyed by battle this turn.`,
        attribute: "Quick-Play Spell",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/spells/Sky Striker Mecha - Eagle Booster.jpg"
    },
    {
        id: "76",
        name: "Sky Striker Mecha - Widow Anchor",
        type: "Spell",
        rarity: "Ultra Rare",
        description: `If you control no monsters in your Main Monster Zone: Target 1 face-up Effect Monster on the field; negate that face-up monster's effects until the end of this turn, then, if you have 3 or more Spells in your GY, you can take control of that monster until the End Phase.`,
        attribute: "Quick-Play Spell",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/spells/Sky Striker Mecha - Widow Anchor.jpg"
    },
    {
        id: "77",
        name: "Sky Striker Mecha - Shark Cannon",
        type: "Spell",
        rarity: "Rare",
        description: `If you control no monsters in your Main Monster Zone: Target 1 monster in your opponent's GY; banish that monster, or, if you have 3 or more Spells in your GY, you can Special Summon that monster to your field instead, but it cannot attack.`,
        attribute: "Quick-Play Spell",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/spells/Sky Striker Mecha - Shark Cannon.jpg"
    },
    {
        id: "78",
        name: "Sky Striker Maneuver - Scissors Cross",
        type: "Spell",
        rarity: "Normal",
        description: `If you control no monsters in your Main Monster Zone: Target 1 Level 4 "Sky Striker Ace" monster in your GY; add it to your hand, or if you have 3 or more Spells in your GY, you can Special Summon it instead.`,
        attribute: "Normal Spell",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/spells/Sky Striker Maneuver - Scissors Cross.jpg"
    },
    {
        id: "79",
        name: "Sky Striker Maneuver - Afterburners!",
        type: "Spell",
        rarity: "Rare",
        description: `IIf you control no monsters in your Main Monster Zone: Target 1 face-up monster on the field; destroy it, then, if you have 3 or more Spells in your GY, you can destroy 1 Spell/Trap on the field.`,
        attribute: "Normal Spell",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/spells/Sky Striker Maneuver - Afterburners!.jpg"
    },
    {
        id: "80",
        name: "Sky Striker Maneuver - Jamming Waves!",
        type: "Spell",
        rarity: "Super Rare",
        description: `IIf you control no monsters in your Main Monster Zone: Target 1 Set Spell/Trap on the field; destroy it, then, if you have 3 or more Spells in your GY, you can destroy 1 monster on the field.`,
        attribute: "Normal Spell",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/spells/Sky Striker Maneuver - Jamming Waves!.jpg"
    },
    {
        id: "81",
        name: "Sky Striker Mobilize - Linkage!",
        type: "Spell",
        rarity: "Ultra Rare",
        description: `If you control no monsters in your Main Monster Zone: You cannot Special Summon monsters from the Extra Deck for the rest of this turn after this card resolves, except "Sky Striker Ace" monsters, also send 1 other card you control to the GY, and if you do, Special Summon 1 "Sky Striker Ace" monster from your Extra Deck to the Extra Monster Zone, and if you have at least 1 LIGHT and 1 DARK "Sky Striker Ace" monsters on your field and/or in your GY, the Summoned monster gains 1000 ATK.`,
        attribute: "Quick-Play Spell",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/spells/Sky Striker Mobilize - Linkage!.jpg"
    },
    {
        id: "82",
        name: "Sky Striker Mobilize - Engage!",
        type: "Spell",
        rarity: "Ultra Rare",
        description: `If you control no monsters in your Main Monster Zone: Add 1 "Sky Striker" card from your Deck to your hand, except "Sky Striker Mobilize - Engage!", then, if you have 3 or more Spells in your GY, you can draw 1 card.`,
        attribute: "Normal Spell",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/spells/Sky Striker Mobilize - Engage!.jpg"
    },
    {
        id: "83",
        name: "Sky Striker Airspace - Area Zero",
        type: "Spell",
        rarity: "Rare",
        description: `You can target 1 other card you control; excavate the top 3 cards of your Deck, and if you do, you can add 1 excavated "Sky Striker" card to your hand, also shuffle the rest into the Deck, then, if you excavated a "Sky Striker" card, send the targeted card to the GY.
If this card in the Field Zone is sent to the GY by a card effect: You can Special Summon 1 "Sky Striker Ace" monster from your Deck.
You can only use each effect of "Sky Striker Airspace - Area Zero" once per turn.`,
        attribute: "Field Spell",
        deckTypes: [
            "Sky Striker"
        ],
        image: "/cards/spells/Sky Striker Airspace - Area Zero.jpg"
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
        skillType: "Character",
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
        skill: "Theater of the Branded's Opening",
        skillType: "Universal",
        winRate: 56,
        usage: 18,
        difficulty: 7,
        popularity: 4,
        mainCards: [
            "Aluber the Jester of Despia",
            "Aluber the Jester of Despia",
            "Dramaturge of Despia",
            "Dramaturge of Despia",
            "Fallen of Albaz",
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
        strategy: `Going 1st Your gameplan is as follows:

                 ● Not Brick (by playing lots of despias so the skill is always live)
                 ● Get to "Masquerade the Blazing Dragon"
                 ● Get "Darklord Morningstar"
                 ● Get "Branded in Red" so you can clear board on your opponent turn.
              
                 The "Going 1st" Combo
                      
            1. Use skill to add either Tragedy or Dramaturge, whichever you dont have.
            2. Use field to fuse the two, making "Masquerade the Blazing Dragon" in the middle of the main monster zone.
            3. Special Summon Dramaturge after the fusion, and add Aluber from Tragedy's effect
            4. Normal Aluber, add Branded in Red.
            5. Link Aluber and Dramaturge into Condemned Darklord.
            6. Use Condemned Darklord to discard a card to get Darklord Morningstar. Preferably disscarding Branded Opening for Graveyard protection for your fusion monsters from destruction.

            Note that using Branded Opening WILL lock you to fusions, so dont use it if you have a path to Condemned Darklord.

    This combo uses the 1 Despia you'll have in hand, a discard for Condemned Darklord and your skill, which means youre likely to stay with 2 more cards in hand which could be your other non-engine.

    Going 2nd My recommandation is to not underestimate Starving Venom Fusion Dragon, sometimes that card alone can be the game ender, attacking into a small monster using the ATK of something else the opponent has, especially if Quearitis resoved earlier. I Usually make sure i still get Tragedy and Dramaturge, since your skill will get you Branded in Red, you're mostly good to go.

    I like to send Ad Libitum to the Graveyard with the 2nd Skill effect, for extantion and revival if needed. In some cases the best cards to send to grave with your skills will be:

    Aluber
            ● When you see that your opponent WILL destroy your first fusion and you have no way to save it with Branded Opening, Aluber in grave will trigger and negate 1 of their monsters.
    Comedy
            ● When your opponent has target negation, such as Effect Veiler, Infinite Impermenance, or Swordsoul Chixiao. Tributing your Fusion monster will allow you to dodge those kind of effects.`
    },
    {
        id: "3",
        name: "Sky Striker",
        tier: "A",
        description: "A control deck that grinds out resources while maintaining field presence with link monsters and powerful spell cards.",
        skill: "Sky Striker Ace Defying Fate",
        skillType: "Universal",
        winRate: 54,
        usage: 15,
        difficulty: 9,
        popularity: 3,
        mainCards: [
            "Sky Striker Ace - Raye",
            "Sky Striker Ace - Roze",
            "Surgical Striker - H.A.M.P.",
            "Sky Striker Mobilize - Engage!",
            "Sky Striker Mobilize - Engage!",
            "Sky Striker Mobilize - Engage!",
            "Sky Striker Mecha - Widow Anchor",
            "Sky Striker Mecha - Widow Anchor",
            "Sky Striker Mecha - Eagle Booster",
            "Sky Striker Mecha - Shark Cannon",
            "Sky Striker Maneuver - Jamming Waves!",
            "Sky Striker Maneuver - Afterburners!",
            "Sky Striker Maneuver - Afterburners!",
            "Sky Striker Mobilize - Linkage!",
            "Sky Striker Mobilize - Linkage!",
            "Mystical Space Typhoon",
            "Mystical Space Typhoon"
        ],
        extraCards: [
            "Sky Striker Ace - Hayate",
            "Sky Striker Ace - Kaina",
            "Sky Striker Ace - Shizuku",
            "Sky Striker Ace - Shizuku",
            "Sky Striker Ace - Zeke",
            "Sky Striker Ace - Zeke",
            "Sky Striker Ace - Kagari",
            "Sky Striker Ace - Kagari"
        ],
        strategy: `The Sky Striker deck is a control-oriented deck that focuses on maintaining field presence through the use of Link Monsters and powerful Spell Cards. The deck's main strategy revolves around the Sky Striker Ace monsters, which can be summoned using the various Sky Striker Spell Cards.`
    }
];
const SKILLS_DATA = [
    {
        id: "s1",
        name: "Master of Blue-Eyes",
        character: "Seto Kaiba",
        type: "Character",
        description: `You can use this Skill's first and second effects once per Duel if your Deck contains a total of 15 or more "Blue-Eyes White Dragon" cards or cards that mention it.
    1: Reveal 1 "Blue-Eyes" monster from your hand and add 1 "Blue-Eyes White Dragon" or another card that mentions it from your Deck to your hand. Then, send 1 "Blue-Eyes Ultimate Dragon" and 1 "Black Luster Soldier" from outside your Deck to the Graveyard.
    2: If you control a "Blue-Eyes" monster or only your opponent controls a monster, Set 1 Spell/Trap card that mentions "Blue-Eyes White Dragon". (This card can be activated the same turn.)`,
        image: "/Skill.png",
        characterImage: "/characters/seto-kaiba.webp",
        relatedCards: [
            "1",
            "30",
            "31"
        ]
    },
    {
        id: "s2",
        name: "Theater of the Branded's Opening",
        type: "Universal",
        description: `You can only use this Skill's second and third effects once per Duel.
    1: You cannot Special Summon any monsters with a Level, except "Fallen of Albaz", "Despia" monsters, and DARK and LIGHT Level 8 or higher monsters.
    2: Reveal 1 "Despia" monster or "Branded Opening" from your hand, then shuffle 1 card from your hand into the Deck, and add 1 "Despia" monster or "Branded Opening" from your Deck to your hand. Then, you can add 1 "Despia, Theater of the Branded" from your Deck to your hand.
    3: If only your opponent controls a monster, send 1 "Despia" monster from your Deck to the Graveyard. Then, you can add 1 "Branded in Red" from your Deck to your hand.`,
        image: "/Skill_Uni.png",
        characterImage: "/characters/branded.jpg",
        relatedCards: [
            "29",
            "69",
            "70",
            "71"
        ]
    },
    {
        id: "s3",
        name: "Dragonic Contact",
        type: "Character",
        character: "Jaden/Yubel",
        description: `You can use this Skill's second effect once per turn if your Deck contains "Rainbow Dragon".
    1: You cannot Special Summon monsters, except "Neos", "Yubel", "Elemental HERO", and "Neo-Spacian" monsters.
    2: Send 1 Warrior monster or Level 10 monster from your hand or face-up field to the Graveyard, then play 1 of the following monsters from your Deck or Graveyard in face-down Defense Position (its battle position can be changed), and add 1 "Super Polymerization" from your Deck and 1 "Polymerization" from outside of your Deck to your hand.
    - "Elemental HERO Neos"
    - "Ultimate Crystal" monster
    - WIND "Armed Dragon" monster (treated as having been Special Summoned by the effect of an "Armed Dragon" monster)`,
        image: "/Skill.png",
        characterImage: "/characters/JadenYubel.webp",
        relatedCards: [
            "32",
            "33",
            "34",
            "72"
        ]
    },
    {
        id: "s4",
        name: "ZEXAL II – Power the Future",
        character: "Yuma Tsukumo",
        type: "Character",
        description: `You can use each of this Skill's second and third effects once per turn and twice per Duel if your Deck contains "Number C39: Utopia Ray Victory".
    1: You cannot Special Summon any monsters from your Extra Deck, except Xyz Monsters, and you cannot Special Summon any monsters with Spell/Trap Cards, except "Utopia" monsters with 2500 ATK and/or DEF.
    2: Can be activated by shuffling 1 card from your hand into the Deck and revealing 1 "ZS -" monster or 1 "Astraltopia" in your hand. Yuma and Astral build the Overlay Network! ZEXAL Ⅱ morph! Add up to 2 "ZS -" monsters and/or "Astraltopia" from your Deck to your hand.
    3: Can be activated after morphing by shuffling 1 card from your hand or field into the Deck. Reveal the true form of 1 card in your hand, turning it into "Rank-Up-Magic Numeron Force", and play 1 "Number 39: Utopia" from outside of your Deck. Then, you can Xyz Summon "Number C39: Utopia Ray Victory" using that "Number 39: Utopia" you just played and 1 monster your opponent controls as material.`,
        image: "/Skill.png",
        characterImage: "/characters/yuma-astral.webp",
        relatedCards: [
            "35",
            "36",
            "37",
            "73"
        ]
    },
    {
        id: "s5",
        name: "Sky Striker Ace Defying Fate",
        type: "Universal",
        description: `You can use each of this Skill's first and second effects once per Duel if your Deck contains 1 or more "Sky Striker Ace - Roze" and 9 or more "Sky Striker" Spell Cards.
    1: At the beginning of your first turn, add 4 "Sky Striker Ace" Link Monsters with different names to your Extra Deck (except monsters that your Extra Deck already contains 3 copies of), and place 1 "Sky Striker Airspace - Area Zero" from outside of your Deck face-up in your Field Zone.
    2: Send up to 2 "Sky Striker" cards from your hand and/or field (either face-up or face-down) to the Graveyard, then draw 1 card.`,
        image: "/Skill_Uni.png",
        characterImage: "/characters/sky-striker.png",
        relatedCards: [
            "38",
            "41",
            "42",
            "74"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/skill/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SkillPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SkillListContent() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const search = searchParams.get("q") || "";
    const filteredSkills = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SkillListContent.useMemo[filteredSkills]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKILLS_DATA"].filter({
                "SkillListContent.useMemo[filteredSkills]": (skill)=>{
                    return skill.name.toLowerCase().includes(search.toLowerCase()) || skill.description.toLowerCase().includes(search.toLowerCase()) || skill.character && skill.character.toLowerCase().includes(search.toLowerCase());
                }
            }["SkillListContent.useMemo[filteredSkills]"]);
        }
    }["SkillListContent.useMemo[filteredSkills]"], [
        search
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background pb-24 pt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto p-4 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between pb-4 border-b border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold",
                                children: "Skill List"
                            }, void 0, false, {
                                fileName: "[project]/app/skill/page.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full",
                                children: [
                                    filteredSkills.length,
                                    " Skills Found"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/skill/page.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/skill/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                        children: filteredSkills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/skill/${skill.id}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-card border border-border rounded-xl overflow-hidden hover:border-yellow-500/50 hover:shadow-xl transition-all cursor-pointer h-full flex flex-col group relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-square relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute inset-0 opacity-30 z-0 ${skill.type === 'Universal' ? 'bg-blue-900' : 'bg-yellow-900'}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/skill/page.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: skill.characterImage ? skill.characterImage : skill.type === 'Universal' ? "/Skill_Uni.png" : "/Skill.png",
                                                    alt: skill.name,
                                                    className: "w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110 z-10 relative"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/skill/page.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent z-20 pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/skill/page.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/skill/page.tsx",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 flex flex-col flex-grow relative z-30 pt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start gap-2 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-lg leading-tight group-hover:text-yellow-400 transition-colors line-clamp-2",
                                                            children: skill.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/skill/page.tsx",
                                                            lineNumber: 58,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[10px] font-bold px-2 py-0.5 rounded-full border flex-shrink-0 ${skill.type === 'Universal' ? 'bg-blue-900/30 text-blue-400 border-blue-800' : 'bg-yellow-900/30 text-yellow-400 border-yellow-800'}`,
                                                            children: skill.type === 'Universal' ? 'UNI' : 'CHAR'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/skill/page.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/skill/page.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this),
                                                skill.character && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground mb-2 flex items-center gap-1",
                                                    children: [
                                                        "👤 ",
                                                        skill.character
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/skill/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground line-clamp-2 mt-auto",
                                                    children: skill.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/skill/page.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/skill/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/skill/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this)
                            }, skill.id, false, {
                                fileName: "[project]/app/skill/page.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/skill/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    filteredSkills.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-20 border border-dashed border-white/20 rounded-xl bg-secondary/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-bold text-muted-foreground mb-2",
                                children: "No skills found"
                            }, void 0, false, {
                                fileName: "[project]/app/skill/page.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Try searching for a character or skill name"
                            }, void 0, false, {
                                fileName: "[project]/app/skill/page.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/skill/page.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/skill/page.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigation"], {}, void 0, false, {
                fileName: "[project]/app/skill/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/skill/page.tsx",
        lineNumber: 24,
        columnNumber: 7
    }, this);
}
_s(SkillListContent, "wTwTb9EYOyIWkDkrJ0Do8K3Kf6s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = SkillListContent;
function SkillPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-10 text-center",
            children: "Loading skills..."
        }, void 0, false, {
            fileName: "[project]/app/skill/page.tsx",
            lineNumber: 99,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillListContent, {}, void 0, false, {
            fileName: "[project]/app/skill/page.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/skill/page.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c1 = SkillPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "SkillListContent");
__turbopack_context__.k.register(_c1, "SkillPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTailwindMerge",
    ()=>createTailwindMerge,
    "extendTailwindMerge",
    ()=>extendTailwindMerge,
    "fromTheme",
    ()=>fromTheme,
    "getDefaultConfig",
    ()=>getDefaultConfig,
    "mergeConfigs",
    ()=>mergeConfigs,
    "twJoin",
    ()=>twJoin,
    "twMerge",
    ()=>twMerge,
    "validators",
    ()=>validators
]);
const CLASS_PART_SEPARATOR = '-';
const createClassGroupUtils = (config)=>{
    const classMap = createClassMap(config);
    const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
    const getClassGroupId = (className)=>{
        const classParts = className.split(CLASS_PART_SEPARATOR);
        // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
        if (classParts[0] === '' && classParts.length !== 1) {
            classParts.shift();
        }
        return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    };
    const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier)=>{
        const conflicts = conflictingClassGroups[classGroupId] || [];
        if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
            return [
                ...conflicts,
                ...conflictingClassGroupModifiers[classGroupId]
            ];
        }
        return conflicts;
    };
    return {
        getClassGroupId,
        getConflictingClassGroupIds
    };
};
const getGroupRecursive = (classParts, classPartObject)=>{
    if (classParts.length === 0) {
        return classPartObject.classGroupId;
    }
    const currentClassPart = classParts[0];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
    if (classGroupFromNextClassPart) {
        return classGroupFromNextClassPart;
    }
    if (classPartObject.validators.length === 0) {
        return undefined;
    }
    const classRest = classParts.join(CLASS_PART_SEPARATOR);
    return classPartObject.validators.find(({ validator })=>validator(classRest))?.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = (className)=>{
    if (arbitraryPropertyRegex.test(className)) {
        const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
        const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
        if (property) {
            // I use two dots here because one dot is used as prefix for class groups in plugins
            return 'arbitrary..' + property;
        }
    }
};
/**
 * Exported for testing only
 */ const createClassMap = (config)=>{
    const { theme, prefix } = config;
    const classMap = {
        nextPart: new Map(),
        validators: []
    };
    const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
    prefixedClassGroupEntries.forEach(([classGroupId, classGroup])=>{
        processClassesRecursively(classGroup, classMap, classGroupId, theme);
    });
    return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme)=>{
    classGroup.forEach((classDefinition)=>{
        if (typeof classDefinition === 'string') {
            const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
            classPartObjectToEdit.classGroupId = classGroupId;
            return;
        }
        if (typeof classDefinition === 'function') {
            if (isThemeGetter(classDefinition)) {
                processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
                return;
            }
            classPartObject.validators.push({
                validator: classDefinition,
                classGroupId
            });
            return;
        }
        Object.entries(classDefinition).forEach(([key, classGroup])=>{
            processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
        });
    });
};
const getPart = (classPartObject, path)=>{
    let currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach((pathPart)=>{
        if (!currentClassPartObject.nextPart.has(pathPart)) {
            currentClassPartObject.nextPart.set(pathPart, {
                nextPart: new Map(),
                validators: []
            });
        }
        currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
};
const isThemeGetter = (func)=>func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix)=>{
    if (!prefix) {
        return classGroupEntries;
    }
    return classGroupEntries.map(([classGroupId, classGroup])=>{
        const prefixedClassGroup = classGroup.map((classDefinition)=>{
            if (typeof classDefinition === 'string') {
                return prefix + classDefinition;
            }
            if (typeof classDefinition === 'object') {
                return Object.fromEntries(Object.entries(classDefinition).map(([key, value])=>[
                        prefix + key,
                        value
                    ]));
            }
            return classDefinition;
        });
        return [
            classGroupId,
            prefixedClassGroup
        ];
    });
};
// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
const createLruCache = (maxCacheSize)=>{
    if (maxCacheSize < 1) {
        return {
            get: ()=>undefined,
            set: ()=>{}
        };
    }
    let cacheSize = 0;
    let cache = new Map();
    let previousCache = new Map();
    const update = (key, value)=>{
        cache.set(key, value);
        cacheSize++;
        if (cacheSize > maxCacheSize) {
            cacheSize = 0;
            previousCache = cache;
            cache = new Map();
        }
    };
    return {
        get (key) {
            let value = cache.get(key);
            if (value !== undefined) {
                return value;
            }
            if ((value = previousCache.get(key)) !== undefined) {
                update(key, value);
                return value;
            }
        },
        set (key, value) {
            if (cache.has(key)) {
                cache.set(key, value);
            } else {
                update(key, value);
            }
        }
    };
};
const IMPORTANT_MODIFIER = '!';
const createParseClassName = (config)=>{
    const { separator, experimentalParseClassName } = config;
    const isSeparatorSingleCharacter = separator.length === 1;
    const firstSeparatorCharacter = separator[0];
    const separatorLength = separator.length;
    // parseClassName inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
    const parseClassName = (className)=>{
        const modifiers = [];
        let bracketDepth = 0;
        let modifierStart = 0;
        let postfixModifierPosition;
        for(let index = 0; index < className.length; index++){
            let currentCharacter = className[index];
            if (bracketDepth === 0) {
                if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
                    modifiers.push(className.slice(modifierStart, index));
                    modifierStart = index + separatorLength;
                    continue;
                }
                if (currentCharacter === '/') {
                    postfixModifierPosition = index;
                    continue;
                }
            }
            if (currentCharacter === '[') {
                bracketDepth++;
            } else if (currentCharacter === ']') {
                bracketDepth--;
            }
        }
        const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
        const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
        const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
        const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
        return {
            modifiers,
            hasImportantModifier,
            baseClassName,
            maybePostfixModifierPosition
        };
    };
    if (experimentalParseClassName) {
        return (className)=>experimentalParseClassName({
                className,
                parseClassName
            });
    }
    return parseClassName;
};
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */ const sortModifiers = (modifiers)=>{
    if (modifiers.length <= 1) {
        return modifiers;
    }
    const sortedModifiers = [];
    let unsortedModifiers = [];
    modifiers.forEach((modifier)=>{
        const isArbitraryVariant = modifier[0] === '[';
        if (isArbitraryVariant) {
            sortedModifiers.push(...unsortedModifiers.sort(), modifier);
            unsortedModifiers = [];
        } else {
            unsortedModifiers.push(modifier);
        }
    });
    sortedModifiers.push(...unsortedModifiers.sort());
    return sortedModifiers;
};
const createConfigUtils = (config)=>({
        cache: createLruCache(config.cacheSize),
        parseClassName: createParseClassName(config),
        ...createClassGroupUtils(config)
    });
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils)=>{
    const { parseClassName, getClassGroupId, getConflictingClassGroupIds } = configUtils;
    /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */ const classGroupsInConflict = [];
    const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    let result = '';
    for(let index = classNames.length - 1; index >= 0; index -= 1){
        const originalClassName = classNames[index];
        const { modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
        let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
        let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        if (!classGroupId) {
            if (!hasPostfixModifier) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            classGroupId = getClassGroupId(baseClassName);
            if (!classGroupId) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            hasPostfixModifier = false;
        }
        const variantModifier = sortModifiers(modifiers).join(':');
        const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        const classId = modifierId + classGroupId;
        if (classGroupsInConflict.includes(classId)) {
            continue;
        }
        classGroupsInConflict.push(classId);
        const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
        for(let i = 0; i < conflictGroups.length; ++i){
            const group = conflictGroups[i];
            classGroupsInConflict.push(modifierId + group);
        }
        // Tailwind class not in conflict
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
    }
    return result;
};
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */ function twJoin() {
    let index = 0;
    let argument;
    let resolvedValue;
    let string = '';
    while(index < arguments.length){
        if (argument = arguments[index++]) {
            if (resolvedValue = toValue(argument)) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
}
const toValue = (mix)=>{
    if (typeof mix === 'string') {
        return mix;
    }
    let resolvedValue;
    let string = '';
    for(let k = 0; k < mix.length; k++){
        if (mix[k]) {
            if (resolvedValue = toValue(mix[k])) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
        const config = createConfigRest.reduce((previousConfig, createConfigCurrent)=>createConfigCurrent(previousConfig), createConfigFirst());
        configUtils = createConfigUtils(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
        const cachedResult = cacheGet(classList);
        if (cachedResult) {
            return cachedResult;
        }
        const result = mergeClassList(classList, configUtils);
        cacheSet(classList, result);
        return result;
    }
    return function callTailwindMerge() {
        return functionToCall(twJoin.apply(null, arguments));
    };
}
const fromTheme = (key)=>{
    const themeGetter = (theme)=>theme[key] || [];
    themeGetter.isThemeGetter = true;
    return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/ new Set([
    'px',
    'full',
    'screen'
]);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = (value)=>isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = (value)=>getIsArbitraryValue(value, 'length', isLengthOnly);
const isNumber = (value)=>Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = (value)=>getIsArbitraryValue(value, 'number', isNumber);
const isInteger = (value)=>Boolean(value) && Number.isInteger(Number(value));
const isPercent = (value)=>value.endsWith('%') && isNumber(value.slice(0, -1));
const isArbitraryValue = (value)=>arbitraryValueRegex.test(value);
const isTshirtSize = (value)=>tshirtUnitRegex.test(value);
const sizeLabels = /*#__PURE__*/ new Set([
    'length',
    'size',
    'percentage'
]);
const isArbitrarySize = (value)=>getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = (value)=>getIsArbitraryValue(value, 'position', isNever);
const imageLabels = /*#__PURE__*/ new Set([
    'image',
    'url'
]);
const isArbitraryImage = (value)=>getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = (value)=>getIsArbitraryValue(value, '', isShadow);
const isAny = ()=>true;
const getIsArbitraryValue = (value, label, testValue)=>{
    const result = arbitraryValueRegex.exec(value);
    if (result) {
        if (result[1]) {
            return typeof label === 'string' ? result[1] === label : label.has(result[1]);
        }
        return testValue(result[2]);
    }
    return false;
};
const isLengthOnly = (value)=>// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = ()=>false;
const isShadow = (value)=>shadowRegex.test(value);
const isImage = (value)=>imageRegex.test(value);
const validators = /*#__PURE__*/ Object.defineProperty({
    __proto__: null,
    isAny,
    isArbitraryImage,
    isArbitraryLength,
    isArbitraryNumber,
    isArbitraryPosition,
    isArbitraryShadow,
    isArbitrarySize,
    isArbitraryValue,
    isInteger,
    isLength,
    isNumber,
    isPercent,
    isTshirtSize
}, Symbol.toStringTag, {
    value: 'Module'
});
const getDefaultConfig = ()=>{
    const colors = fromTheme('colors');
    const spacing = fromTheme('spacing');
    const blur = fromTheme('blur');
    const brightness = fromTheme('brightness');
    const borderColor = fromTheme('borderColor');
    const borderRadius = fromTheme('borderRadius');
    const borderSpacing = fromTheme('borderSpacing');
    const borderWidth = fromTheme('borderWidth');
    const contrast = fromTheme('contrast');
    const grayscale = fromTheme('grayscale');
    const hueRotate = fromTheme('hueRotate');
    const invert = fromTheme('invert');
    const gap = fromTheme('gap');
    const gradientColorStops = fromTheme('gradientColorStops');
    const gradientColorStopPositions = fromTheme('gradientColorStopPositions');
    const inset = fromTheme('inset');
    const margin = fromTheme('margin');
    const opacity = fromTheme('opacity');
    const padding = fromTheme('padding');
    const saturate = fromTheme('saturate');
    const scale = fromTheme('scale');
    const sepia = fromTheme('sepia');
    const skew = fromTheme('skew');
    const space = fromTheme('space');
    const translate = fromTheme('translate');
    const getOverscroll = ()=>[
            'auto',
            'contain',
            'none'
        ];
    const getOverflow = ()=>[
            'auto',
            'hidden',
            'clip',
            'visible',
            'scroll'
        ];
    const getSpacingWithAutoAndArbitrary = ()=>[
            'auto',
            isArbitraryValue,
            spacing
        ];
    const getSpacingWithArbitrary = ()=>[
            isArbitraryValue,
            spacing
        ];
    const getLengthWithEmptyAndArbitrary = ()=>[
            '',
            isLength,
            isArbitraryLength
        ];
    const getNumberWithAutoAndArbitrary = ()=>[
            'auto',
            isNumber,
            isArbitraryValue
        ];
    const getPositions = ()=>[
            'bottom',
            'center',
            'left',
            'left-bottom',
            'left-top',
            'right',
            'right-bottom',
            'right-top',
            'top'
        ];
    const getLineStyles = ()=>[
            'solid',
            'dashed',
            'dotted',
            'double',
            'none'
        ];
    const getBlendModes = ()=>[
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity'
        ];
    const getAlign = ()=>[
            'start',
            'end',
            'center',
            'between',
            'around',
            'evenly',
            'stretch'
        ];
    const getZeroAndEmpty = ()=>[
            '',
            '0',
            isArbitraryValue
        ];
    const getBreaks = ()=>[
            'auto',
            'avoid',
            'all',
            'avoid-page',
            'page',
            'left',
            'right',
            'column'
        ];
    const getNumberAndArbitrary = ()=>[
            isNumber,
            isArbitraryValue
        ];
    return {
        cacheSize: 500,
        separator: ':',
        theme: {
            colors: [
                isAny
            ],
            spacing: [
                isLength,
                isArbitraryLength
            ],
            blur: [
                'none',
                '',
                isTshirtSize,
                isArbitraryValue
            ],
            brightness: getNumberAndArbitrary(),
            borderColor: [
                colors
            ],
            borderRadius: [
                'none',
                '',
                'full',
                isTshirtSize,
                isArbitraryValue
            ],
            borderSpacing: getSpacingWithArbitrary(),
            borderWidth: getLengthWithEmptyAndArbitrary(),
            contrast: getNumberAndArbitrary(),
            grayscale: getZeroAndEmpty(),
            hueRotate: getNumberAndArbitrary(),
            invert: getZeroAndEmpty(),
            gap: getSpacingWithArbitrary(),
            gradientColorStops: [
                colors
            ],
            gradientColorStopPositions: [
                isPercent,
                isArbitraryLength
            ],
            inset: getSpacingWithAutoAndArbitrary(),
            margin: getSpacingWithAutoAndArbitrary(),
            opacity: getNumberAndArbitrary(),
            padding: getSpacingWithArbitrary(),
            saturate: getNumberAndArbitrary(),
            scale: getNumberAndArbitrary(),
            sepia: getZeroAndEmpty(),
            skew: getNumberAndArbitrary(),
            space: getSpacingWithArbitrary(),
            translate: getSpacingWithArbitrary()
        },
        classGroups: {
            // Layout
            /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */ aspect: [
                {
                    aspect: [
                        'auto',
                        'square',
                        'video',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */ container: [
                'container'
            ],
            /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */ columns: [
                {
                    columns: [
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */ 'break-after': [
                {
                    'break-after': getBreaks()
                }
            ],
            /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */ 'break-before': [
                {
                    'break-before': getBreaks()
                }
            ],
            /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */ 'break-inside': [
                {
                    'break-inside': [
                        'auto',
                        'avoid',
                        'avoid-page',
                        'avoid-column'
                    ]
                }
            ],
            /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */ 'box-decoration': [
                {
                    'box-decoration': [
                        'slice',
                        'clone'
                    ]
                }
            ],
            /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */ box: [
                {
                    box: [
                        'border',
                        'content'
                    ]
                }
            ],
            /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */ display: [
                'block',
                'inline-block',
                'inline',
                'flex',
                'inline-flex',
                'table',
                'inline-table',
                'table-caption',
                'table-cell',
                'table-column',
                'table-column-group',
                'table-footer-group',
                'table-header-group',
                'table-row-group',
                'table-row',
                'flow-root',
                'grid',
                'inline-grid',
                'contents',
                'list-item',
                'hidden'
            ],
            /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */ float: [
                {
                    float: [
                        'right',
                        'left',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */ clear: [
                {
                    clear: [
                        'left',
                        'right',
                        'both',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */ isolation: [
                'isolate',
                'isolation-auto'
            ],
            /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */ 'object-fit': [
                {
                    object: [
                        'contain',
                        'cover',
                        'fill',
                        'none',
                        'scale-down'
                    ]
                }
            ],
            /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */ 'object-position': [
                {
                    object: [
                        ...getPositions(),
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */ overflow: [
                {
                    overflow: getOverflow()
                }
            ],
            /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-x': [
                {
                    'overflow-x': getOverflow()
                }
            ],
            /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-y': [
                {
                    'overflow-y': getOverflow()
                }
            ],
            /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ overscroll: [
                {
                    overscroll: getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-x': [
                {
                    'overscroll-x': getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-y': [
                {
                    'overscroll-y': getOverscroll()
                }
            ],
            /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */ position: [
                'static',
                'fixed',
                'absolute',
                'relative',
                'sticky'
            ],
            /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ inset: [
                {
                    inset: [
                        inset
                    ]
                }
            ],
            /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-x': [
                {
                    'inset-x': [
                        inset
                    ]
                }
            ],
            /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-y': [
                {
                    'inset-y': [
                        inset
                    ]
                }
            ],
            /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ start: [
                {
                    start: [
                        inset
                    ]
                }
            ],
            /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ end: [
                {
                    end: [
                        inset
                    ]
                }
            ],
            /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ top: [
                {
                    top: [
                        inset
                    ]
                }
            ],
            /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ right: [
                {
                    right: [
                        inset
                    ]
                }
            ],
            /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ bottom: [
                {
                    bottom: [
                        inset
                    ]
                }
            ],
            /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ left: [
                {
                    left: [
                        inset
                    ]
                }
            ],
            /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */ visibility: [
                'visible',
                'invisible',
                'collapse'
            ],
            /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */ z: [
                {
                    z: [
                        'auto',
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            // Flexbox and Grid
            /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */ basis: [
                {
                    basis: getSpacingWithAutoAndArbitrary()
                }
            ],
            /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */ 'flex-direction': [
                {
                    flex: [
                        'row',
                        'row-reverse',
                        'col',
                        'col-reverse'
                    ]
                }
            ],
            /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */ 'flex-wrap': [
                {
                    flex: [
                        'wrap',
                        'wrap-reverse',
                        'nowrap'
                    ]
                }
            ],
            /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */ flex: [
                {
                    flex: [
                        '1',
                        'auto',
                        'initial',
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */ grow: [
                {
                    grow: getZeroAndEmpty()
                }
            ],
            /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */ shrink: [
                {
                    shrink: getZeroAndEmpty()
                }
            ],
            /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */ order: [
                {
                    order: [
                        'first',
                        'last',
                        'none',
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */ 'grid-cols': [
                {
                    'grid-cols': [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start-end': [
                {
                    col: [
                        'auto',
                        {
                            span: [
                                'full',
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start': [
                {
                    'col-start': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-end': [
                {
                    'col-end': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */ 'grid-rows': [
                {
                    'grid-rows': [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start-end': [
                {
                    row: [
                        'auto',
                        {
                            span: [
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start': [
                {
                    'row-start': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-end': [
                {
                    'row-end': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */ 'grid-flow': [
                {
                    'grid-flow': [
                        'row',
                        'col',
                        'dense',
                        'row-dense',
                        'col-dense'
                    ]
                }
            ],
            /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */ 'auto-cols': [
                {
                    'auto-cols': [
                        'auto',
                        'min',
                        'max',
                        'fr',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */ 'auto-rows': [
                {
                    'auto-rows': [
                        'auto',
                        'min',
                        'max',
                        'fr',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */ gap: [
                {
                    gap: [
                        gap
                    ]
                }
            ],
            /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-x': [
                {
                    'gap-x': [
                        gap
                    ]
                }
            ],
            /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-y': [
                {
                    'gap-y': [
                        gap
                    ]
                }
            ],
            /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */ 'justify-content': [
                {
                    justify: [
                        'normal',
                        ...getAlign()
                    ]
                }
            ],
            /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */ 'justify-items': [
                {
                    'justify-items': [
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */ 'justify-self': [
                {
                    'justify-self': [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */ 'align-content': [
                {
                    content: [
                        'normal',
                        ...getAlign(),
                        'baseline'
                    ]
                }
            ],
            /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */ 'align-items': [
                {
                    items: [
                        'start',
                        'end',
                        'center',
                        'baseline',
                        'stretch'
                    ]
                }
            ],
            /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */ 'align-self': [
                {
                    self: [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch',
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */ 'place-content': [
                {
                    'place-content': [
                        ...getAlign(),
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */ 'place-items': [
                {
                    'place-items': [
                        'start',
                        'end',
                        'center',
                        'baseline',
                        'stretch'
                    ]
                }
            ],
            /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */ 'place-self': [
                {
                    'place-self': [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            // Spacing
            /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */ p: [
                {
                    p: [
                        padding
                    ]
                }
            ],
            /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */ px: [
                {
                    px: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */ py: [
                {
                    py: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ ps: [
                {
                    ps: [
                        padding
                    ]
                }
            ],
            /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */ pe: [
                {
                    pe: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */ pt: [
                {
                    pt: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */ pr: [
                {
                    pr: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */ pb: [
                {
                    pb: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */ pl: [
                {
                    pl: [
                        padding
                    ]
                }
            ],
            /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */ m: [
                {
                    m: [
                        margin
                    ]
                }
            ],
            /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */ mx: [
                {
                    mx: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */ my: [
                {
                    my: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ ms: [
                {
                    ms: [
                        margin
                    ]
                }
            ],
            /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */ me: [
                {
                    me: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */ mt: [
                {
                    mt: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */ mr: [
                {
                    mr: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */ mb: [
                {
                    mb: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ ml: [
                {
                    ml: [
                        margin
                    ]
                }
            ],
            /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */ 'space-x': [
                {
                    'space-x': [
                        space
                    ]
                }
            ],
            /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */ 'space-x-reverse': [
                'space-x-reverse'
            ],
            /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */ 'space-y': [
                {
                    'space-y': [
                        space
                    ]
                }
            ],
            /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */ 'space-y-reverse': [
                'space-y-reverse'
            ],
            // Sizing
            /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */ w: [
                {
                    w: [
                        'auto',
                        'min',
                        'max',
                        'fit',
                        'svw',
                        'lvw',
                        'dvw',
                        isArbitraryValue,
                        spacing
                    ]
                }
            ],
            /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */ 'min-w': [
                {
                    'min-w': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit'
                    ]
                }
            ],
            /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */ 'max-w': [
                {
                    'max-w': [
                        isArbitraryValue,
                        spacing,
                        'none',
                        'full',
                        'min',
                        'max',
                        'fit',
                        'prose',
                        {
                            screen: [
                                isTshirtSize
                            ]
                        },
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */ h: [
                {
                    h: [
                        isArbitraryValue,
                        spacing,
                        'auto',
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */ 'min-h': [
                {
                    'min-h': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */ 'max-h': [
                {
                    'max-h': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */ size: [
                {
                    size: [
                        isArbitraryValue,
                        spacing,
                        'auto',
                        'min',
                        'max',
                        'fit'
                    ]
                }
            ],
            // Typography
            /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */ 'font-size': [
                {
                    text: [
                        'base',
                        isTshirtSize,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */ 'font-smoothing': [
                'antialiased',
                'subpixel-antialiased'
            ],
            /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */ 'font-style': [
                'italic',
                'not-italic'
            ],
            /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */ 'font-weight': [
                {
                    font: [
                        'thin',
                        'extralight',
                        'light',
                        'normal',
                        'medium',
                        'semibold',
                        'bold',
                        'extrabold',
                        'black',
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */ 'font-family': [
                {
                    font: [
                        isAny
                    ]
                }
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-normal': [
                'normal-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-ordinal': [
                'ordinal'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-slashed-zero': [
                'slashed-zero'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-figure': [
                'lining-nums',
                'oldstyle-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-spacing': [
                'proportional-nums',
                'tabular-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-fraction': [
                'diagonal-fractions',
                'stacked-fractions'
            ],
            /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */ tracking: [
                {
                    tracking: [
                        'tighter',
                        'tight',
                        'normal',
                        'wide',
                        'wider',
                        'widest',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */ 'line-clamp': [
                {
                    'line-clamp': [
                        'none',
                        isNumber,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */ leading: [
                {
                    leading: [
                        'none',
                        'tight',
                        'snug',
                        'normal',
                        'relaxed',
                        'loose',
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */ 'list-image': [
                {
                    'list-image': [
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */ 'list-style-type': [
                {
                    list: [
                        'none',
                        'disc',
                        'decimal',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */ 'list-style-position': [
                {
                    list: [
                        'inside',
                        'outside'
                    ]
                }
            ],
            /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */ 'placeholder-color': [
                {
                    placeholder: [
                        colors
                    ]
                }
            ],
            /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */ 'placeholder-opacity': [
                {
                    'placeholder-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */ 'text-alignment': [
                {
                    text: [
                        'left',
                        'center',
                        'right',
                        'justify',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */ 'text-color': [
                {
                    text: [
                        colors
                    ]
                }
            ],
            /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */ 'text-opacity': [
                {
                    'text-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */ 'text-decoration': [
                'underline',
                'overline',
                'line-through',
                'no-underline'
            ],
            /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */ 'text-decoration-style': [
                {
                    decoration: [
                        ...getLineStyles(),
                        'wavy'
                    ]
                }
            ],
            /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */ 'text-decoration-thickness': [
                {
                    decoration: [
                        'auto',
                        'from-font',
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */ 'underline-offset': [
                {
                    'underline-offset': [
                        'auto',
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */ 'text-decoration-color': [
                {
                    decoration: [
                        colors
                    ]
                }
            ],
            /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */ 'text-transform': [
                'uppercase',
                'lowercase',
                'capitalize',
                'normal-case'
            ],
            /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */ 'text-overflow': [
                'truncate',
                'text-ellipsis',
                'text-clip'
            ],
            /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */ 'text-wrap': [
                {
                    text: [
                        'wrap',
                        'nowrap',
                        'balance',
                        'pretty'
                    ]
                }
            ],
            /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */ indent: [
                {
                    indent: getSpacingWithArbitrary()
                }
            ],
            /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */ 'vertical-align': [
                {
                    align: [
                        'baseline',
                        'top',
                        'middle',
                        'bottom',
                        'text-top',
                        'text-bottom',
                        'sub',
                        'super',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */ whitespace: [
                {
                    whitespace: [
                        'normal',
                        'nowrap',
                        'pre',
                        'pre-line',
                        'pre-wrap',
                        'break-spaces'
                    ]
                }
            ],
            /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */ break: [
                {
                    break: [
                        'normal',
                        'words',
                        'all',
                        'keep'
                    ]
                }
            ],
            /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */ hyphens: [
                {
                    hyphens: [
                        'none',
                        'manual',
                        'auto'
                    ]
                }
            ],
            /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */ content: [
                {
                    content: [
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            // Backgrounds
            /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */ 'bg-attachment': [
                {
                    bg: [
                        'fixed',
                        'local',
                        'scroll'
                    ]
                }
            ],
            /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */ 'bg-clip': [
                {
                    'bg-clip': [
                        'border',
                        'padding',
                        'content',
                        'text'
                    ]
                }
            ],
            /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */ 'bg-opacity': [
                {
                    'bg-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */ 'bg-origin': [
                {
                    'bg-origin': [
                        'border',
                        'padding',
                        'content'
                    ]
                }
            ],
            /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */ 'bg-position': [
                {
                    bg: [
                        ...getPositions(),
                        isArbitraryPosition
                    ]
                }
            ],
            /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */ 'bg-repeat': [
                {
                    bg: [
                        'no-repeat',
                        {
                            repeat: [
                                '',
                                'x',
                                'y',
                                'round',
                                'space'
                            ]
                        }
                    ]
                }
            ],
            /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */ 'bg-size': [
                {
                    bg: [
                        'auto',
                        'cover',
                        'contain',
                        isArbitrarySize
                    ]
                }
            ],
            /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */ 'bg-image': [
                {
                    bg: [
                        'none',
                        {
                            'gradient-to': [
                                't',
                                'tr',
                                'r',
                                'br',
                                'b',
                                'bl',
                                'l',
                                'tl'
                            ]
                        },
                        isArbitraryImage
                    ]
                }
            ],
            /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */ 'bg-color': [
                {
                    bg: [
                        colors
                    ]
                }
            ],
            /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from-pos': [
                {
                    from: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via-pos': [
                {
                    via: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to-pos': [
                {
                    to: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from': [
                {
                    from: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via': [
                {
                    via: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to': [
                {
                    to: [
                        gradientColorStops
                    ]
                }
            ],
            // Borders
            /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */ rounded: [
                {
                    rounded: [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-s': [
                {
                    'rounded-s': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-e': [
                {
                    'rounded-e': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-t': [
                {
                    'rounded-t': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-r': [
                {
                    'rounded-r': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-b': [
                {
                    'rounded-b': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-l': [
                {
                    'rounded-l': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ss': [
                {
                    'rounded-ss': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-se': [
                {
                    'rounded-se': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ee': [
                {
                    'rounded-ee': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-es': [
                {
                    'rounded-es': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tl': [
                {
                    'rounded-tl': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tr': [
                {
                    'rounded-tr': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-br': [
                {
                    'rounded-br': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-bl': [
                {
                    'rounded-bl': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w': [
                {
                    border: [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-x': [
                {
                    'border-x': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-y': [
                {
                    'border-y': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-s': [
                {
                    'border-s': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-e': [
                {
                    'border-e': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-t': [
                {
                    'border-t': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-r': [
                {
                    'border-r': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-b': [
                {
                    'border-b': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-l': [
                {
                    'border-l': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */ 'border-opacity': [
                {
                    'border-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */ 'border-style': [
                {
                    border: [
                        ...getLineStyles(),
                        'hidden'
                    ]
                }
            ],
            /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-x': [
                {
                    'divide-x': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-x-reverse': [
                'divide-x-reverse'
            ],
            /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-y': [
                {
                    'divide-y': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-y-reverse': [
                'divide-y-reverse'
            ],
            /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */ 'divide-opacity': [
                {
                    'divide-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */ 'divide-style': [
                {
                    divide: getLineStyles()
                }
            ],
            /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color': [
                {
                    border: [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-x': [
                {
                    'border-x': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-y': [
                {
                    'border-y': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-s': [
                {
                    'border-s': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-e': [
                {
                    'border-e': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-t': [
                {
                    'border-t': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-r': [
                {
                    'border-r': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-b': [
                {
                    'border-b': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-l': [
                {
                    'border-l': [
                        borderColor
                    ]
                }
            ],
            /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */ 'divide-color': [
                {
                    divide: [
                        borderColor
                    ]
                }
            ],
            /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */ 'outline-style': [
                {
                    outline: [
                        '',
                        ...getLineStyles()
                    ]
                }
            ],
            /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */ 'outline-offset': [
                {
                    'outline-offset': [
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */ 'outline-w': [
                {
                    outline: [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */ 'outline-color': [
                {
                    outline: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */ 'ring-w': [
                {
                    ring: getLengthWithEmptyAndArbitrary()
                }
            ],
            /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */ 'ring-w-inset': [
                'ring-inset'
            ],
            /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */ 'ring-color': [
                {
                    ring: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */ 'ring-opacity': [
                {
                    'ring-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */ 'ring-offset-w': [
                {
                    'ring-offset': [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */ 'ring-offset-color': [
                {
                    'ring-offset': [
                        colors
                    ]
                }
            ],
            // Effects
            /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */ shadow: [
                {
                    shadow: [
                        '',
                        'inner',
                        'none',
                        isTshirtSize,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */ 'shadow-color': [
                {
                    shadow: [
                        isAny
                    ]
                }
            ],
            /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */ opacity: [
                {
                    opacity: [
                        opacity
                    ]
                }
            ],
            /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */ 'mix-blend': [
                {
                    'mix-blend': [
                        ...getBlendModes(),
                        'plus-lighter',
                        'plus-darker'
                    ]
                }
            ],
            /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */ 'bg-blend': [
                {
                    'bg-blend': getBlendModes()
                }
            ],
            // Filters
            /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */ filter: [
                {
                    filter: [
                        '',
                        'none'
                    ]
                }
            ],
            /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */ blur: [
                {
                    blur: [
                        blur
                    ]
                }
            ],
            /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */ brightness: [
                {
                    brightness: [
                        brightness
                    ]
                }
            ],
            /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */ contrast: [
                {
                    contrast: [
                        contrast
                    ]
                }
            ],
            /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */ 'drop-shadow': [
                {
                    'drop-shadow': [
                        '',
                        'none',
                        isTshirtSize,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */ grayscale: [
                {
                    grayscale: [
                        grayscale
                    ]
                }
            ],
            /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */ 'hue-rotate': [
                {
                    'hue-rotate': [
                        hueRotate
                    ]
                }
            ],
            /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */ invert: [
                {
                    invert: [
                        invert
                    ]
                }
            ],
            /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */ saturate: [
                {
                    saturate: [
                        saturate
                    ]
                }
            ],
            /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */ sepia: [
                {
                    sepia: [
                        sepia
                    ]
                }
            ],
            /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */ 'backdrop-filter': [
                {
                    'backdrop-filter': [
                        '',
                        'none'
                    ]
                }
            ],
            /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */ 'backdrop-blur': [
                {
                    'backdrop-blur': [
                        blur
                    ]
                }
            ],
            /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */ 'backdrop-brightness': [
                {
                    'backdrop-brightness': [
                        brightness
                    ]
                }
            ],
            /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */ 'backdrop-contrast': [
                {
                    'backdrop-contrast': [
                        contrast
                    ]
                }
            ],
            /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */ 'backdrop-grayscale': [
                {
                    'backdrop-grayscale': [
                        grayscale
                    ]
                }
            ],
            /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */ 'backdrop-hue-rotate': [
                {
                    'backdrop-hue-rotate': [
                        hueRotate
                    ]
                }
            ],
            /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */ 'backdrop-invert': [
                {
                    'backdrop-invert': [
                        invert
                    ]
                }
            ],
            /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */ 'backdrop-opacity': [
                {
                    'backdrop-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */ 'backdrop-saturate': [
                {
                    'backdrop-saturate': [
                        saturate
                    ]
                }
            ],
            /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */ 'backdrop-sepia': [
                {
                    'backdrop-sepia': [
                        sepia
                    ]
                }
            ],
            // Tables
            /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */ 'border-collapse': [
                {
                    border: [
                        'collapse',
                        'separate'
                    ]
                }
            ],
            /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing': [
                {
                    'border-spacing': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-x': [
                {
                    'border-spacing-x': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-y': [
                {
                    'border-spacing-y': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */ 'table-layout': [
                {
                    table: [
                        'auto',
                        'fixed'
                    ]
                }
            ],
            /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */ caption: [
                {
                    caption: [
                        'top',
                        'bottom'
                    ]
                }
            ],
            // Transitions and Animation
            /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */ transition: [
                {
                    transition: [
                        'none',
                        'all',
                        '',
                        'colors',
                        'opacity',
                        'shadow',
                        'transform',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */ duration: [
                {
                    duration: getNumberAndArbitrary()
                }
            ],
            /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ ease: [
                {
                    ease: [
                        'linear',
                        'in',
                        'out',
                        'in-out',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */ delay: [
                {
                    delay: getNumberAndArbitrary()
                }
            ],
            /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */ animate: [
                {
                    animate: [
                        'none',
                        'spin',
                        'ping',
                        'pulse',
                        'bounce',
                        isArbitraryValue
                    ]
                }
            ],
            // Transforms
            /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */ transform: [
                {
                    transform: [
                        '',
                        'gpu',
                        'none'
                    ]
                }
            ],
            /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */ scale: [
                {
                    scale: [
                        scale
                    ]
                }
            ],
            /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-x': [
                {
                    'scale-x': [
                        scale
                    ]
                }
            ],
            /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-y': [
                {
                    'scale-y': [
                        scale
                    ]
                }
            ],
            /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */ rotate: [
                {
                    rotate: [
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-x': [
                {
                    'translate-x': [
                        translate
                    ]
                }
            ],
            /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-y': [
                {
                    'translate-y': [
                        translate
                    ]
                }
            ],
            /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-x': [
                {
                    'skew-x': [
                        skew
                    ]
                }
            ],
            /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-y': [
                {
                    'skew-y': [
                        skew
                    ]
                }
            ],
            /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */ 'transform-origin': [
                {
                    origin: [
                        'center',
                        'top',
                        'top-right',
                        'right',
                        'bottom-right',
                        'bottom',
                        'bottom-left',
                        'left',
                        'top-left',
                        isArbitraryValue
                    ]
                }
            ],
            // Interactivity
            /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */ accent: [
                {
                    accent: [
                        'auto',
                        colors
                    ]
                }
            ],
            /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */ appearance: [
                {
                    appearance: [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */ cursor: [
                {
                    cursor: [
                        'auto',
                        'default',
                        'pointer',
                        'wait',
                        'text',
                        'move',
                        'help',
                        'not-allowed',
                        'none',
                        'context-menu',
                        'progress',
                        'cell',
                        'crosshair',
                        'vertical-text',
                        'alias',
                        'copy',
                        'no-drop',
                        'grab',
                        'grabbing',
                        'all-scroll',
                        'col-resize',
                        'row-resize',
                        'n-resize',
                        'e-resize',
                        's-resize',
                        'w-resize',
                        'ne-resize',
                        'nw-resize',
                        'se-resize',
                        'sw-resize',
                        'ew-resize',
                        'ns-resize',
                        'nesw-resize',
                        'nwse-resize',
                        'zoom-in',
                        'zoom-out',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */ 'caret-color': [
                {
                    caret: [
                        colors
                    ]
                }
            ],
            /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */ 'pointer-events': [
                {
                    'pointer-events': [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */ resize: [
                {
                    resize: [
                        'none',
                        'y',
                        'x',
                        ''
                    ]
                }
            ],
            /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */ 'scroll-behavior': [
                {
                    scroll: [
                        'auto',
                        'smooth'
                    ]
                }
            ],
            /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-m': [
                {
                    'scroll-m': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mx': [
                {
                    'scroll-mx': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-my': [
                {
                    'scroll-my': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ms': [
                {
                    'scroll-ms': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-me': [
                {
                    'scroll-me': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mt': [
                {
                    'scroll-mt': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mr': [
                {
                    'scroll-mr': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mb': [
                {
                    'scroll-mb': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ml': [
                {
                    'scroll-ml': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-p': [
                {
                    'scroll-p': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-px': [
                {
                    'scroll-px': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-py': [
                {
                    'scroll-py': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-ps': [
                {
                    'scroll-ps': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pe': [
                {
                    'scroll-pe': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pt': [
                {
                    'scroll-pt': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pr': [
                {
                    'scroll-pr': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pb': [
                {
                    'scroll-pb': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pl': [
                {
                    'scroll-pl': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */ 'snap-align': [
                {
                    snap: [
                        'start',
                        'end',
                        'center',
                        'align-none'
                    ]
                }
            ],
            /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */ 'snap-stop': [
                {
                    snap: [
                        'normal',
                        'always'
                    ]
                }
            ],
            /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-type': [
                {
                    snap: [
                        'none',
                        'x',
                        'y',
                        'both'
                    ]
                }
            ],
            /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-strictness': [
                {
                    snap: [
                        'mandatory',
                        'proximity'
                    ]
                }
            ],
            /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */ touch: [
                {
                    touch: [
                        'auto',
                        'none',
                        'manipulation'
                    ]
                }
            ],
            /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-x': [
                {
                    'touch-pan': [
                        'x',
                        'left',
                        'right'
                    ]
                }
            ],
            /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-y': [
                {
                    'touch-pan': [
                        'y',
                        'up',
                        'down'
                    ]
                }
            ],
            /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-pz': [
                'touch-pinch-zoom'
            ],
            /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */ select: [
                {
                    select: [
                        'none',
                        'text',
                        'all',
                        'auto'
                    ]
                }
            ],
            /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */ 'will-change': [
                {
                    'will-change': [
                        'auto',
                        'scroll',
                        'contents',
                        'transform',
                        isArbitraryValue
                    ]
                }
            ],
            // SVG
            /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */ fill: [
                {
                    fill: [
                        colors,
                        'none'
                    ]
                }
            ],
            /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */ 'stroke-w': [
                {
                    stroke: [
                        isLength,
                        isArbitraryLength,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */ stroke: [
                {
                    stroke: [
                        colors,
                        'none'
                    ]
                }
            ],
            // Accessibility
            /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */ sr: [
                'sr-only',
                'not-sr-only'
            ],
            /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */ 'forced-color-adjust': [
                {
                    'forced-color-adjust': [
                        'auto',
                        'none'
                    ]
                }
            ]
        },
        conflictingClassGroups: {
            overflow: [
                'overflow-x',
                'overflow-y'
            ],
            overscroll: [
                'overscroll-x',
                'overscroll-y'
            ],
            inset: [
                'inset-x',
                'inset-y',
                'start',
                'end',
                'top',
                'right',
                'bottom',
                'left'
            ],
            'inset-x': [
                'right',
                'left'
            ],
            'inset-y': [
                'top',
                'bottom'
            ],
            flex: [
                'basis',
                'grow',
                'shrink'
            ],
            gap: [
                'gap-x',
                'gap-y'
            ],
            p: [
                'px',
                'py',
                'ps',
                'pe',
                'pt',
                'pr',
                'pb',
                'pl'
            ],
            px: [
                'pr',
                'pl'
            ],
            py: [
                'pt',
                'pb'
            ],
            m: [
                'mx',
                'my',
                'ms',
                'me',
                'mt',
                'mr',
                'mb',
                'ml'
            ],
            mx: [
                'mr',
                'ml'
            ],
            my: [
                'mt',
                'mb'
            ],
            size: [
                'w',
                'h'
            ],
            'font-size': [
                'leading'
            ],
            'fvn-normal': [
                'fvn-ordinal',
                'fvn-slashed-zero',
                'fvn-figure',
                'fvn-spacing',
                'fvn-fraction'
            ],
            'fvn-ordinal': [
                'fvn-normal'
            ],
            'fvn-slashed-zero': [
                'fvn-normal'
            ],
            'fvn-figure': [
                'fvn-normal'
            ],
            'fvn-spacing': [
                'fvn-normal'
            ],
            'fvn-fraction': [
                'fvn-normal'
            ],
            'line-clamp': [
                'display',
                'overflow'
            ],
            rounded: [
                'rounded-s',
                'rounded-e',
                'rounded-t',
                'rounded-r',
                'rounded-b',
                'rounded-l',
                'rounded-ss',
                'rounded-se',
                'rounded-ee',
                'rounded-es',
                'rounded-tl',
                'rounded-tr',
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-s': [
                'rounded-ss',
                'rounded-es'
            ],
            'rounded-e': [
                'rounded-se',
                'rounded-ee'
            ],
            'rounded-t': [
                'rounded-tl',
                'rounded-tr'
            ],
            'rounded-r': [
                'rounded-tr',
                'rounded-br'
            ],
            'rounded-b': [
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-l': [
                'rounded-tl',
                'rounded-bl'
            ],
            'border-spacing': [
                'border-spacing-x',
                'border-spacing-y'
            ],
            'border-w': [
                'border-w-s',
                'border-w-e',
                'border-w-t',
                'border-w-r',
                'border-w-b',
                'border-w-l'
            ],
            'border-w-x': [
                'border-w-r',
                'border-w-l'
            ],
            'border-w-y': [
                'border-w-t',
                'border-w-b'
            ],
            'border-color': [
                'border-color-s',
                'border-color-e',
                'border-color-t',
                'border-color-r',
                'border-color-b',
                'border-color-l'
            ],
            'border-color-x': [
                'border-color-r',
                'border-color-l'
            ],
            'border-color-y': [
                'border-color-t',
                'border-color-b'
            ],
            'scroll-m': [
                'scroll-mx',
                'scroll-my',
                'scroll-ms',
                'scroll-me',
                'scroll-mt',
                'scroll-mr',
                'scroll-mb',
                'scroll-ml'
            ],
            'scroll-mx': [
                'scroll-mr',
                'scroll-ml'
            ],
            'scroll-my': [
                'scroll-mt',
                'scroll-mb'
            ],
            'scroll-p': [
                'scroll-px',
                'scroll-py',
                'scroll-ps',
                'scroll-pe',
                'scroll-pt',
                'scroll-pr',
                'scroll-pb',
                'scroll-pl'
            ],
            'scroll-px': [
                'scroll-pr',
                'scroll-pl'
            ],
            'scroll-py': [
                'scroll-pt',
                'scroll-pb'
            ],
            touch: [
                'touch-x',
                'touch-y',
                'touch-pz'
            ],
            'touch-x': [
                'touch'
            ],
            'touch-y': [
                'touch'
            ],
            'touch-pz': [
                'touch'
            ]
        },
        conflictingClassGroupModifiers: {
            'font-size': [
                'leading'
            ]
        }
    };
};
/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */ const mergeConfigs = (baseConfig, { cacheSize, prefix, separator, experimentalParseClassName, extend = {}, override = {} })=>{
    overrideProperty(baseConfig, 'cacheSize', cacheSize);
    overrideProperty(baseConfig, 'prefix', prefix);
    overrideProperty(baseConfig, 'separator', separator);
    overrideProperty(baseConfig, 'experimentalParseClassName', experimentalParseClassName);
    for(const configKey in override){
        overrideConfigProperties(baseConfig[configKey], override[configKey]);
    }
    for(const key in extend){
        mergeConfigProperties(baseConfig[key], extend[key]);
    }
    return baseConfig;
};
const overrideProperty = (baseObject, overrideKey, overrideValue)=>{
    if (overrideValue !== undefined) {
        baseObject[overrideKey] = overrideValue;
    }
};
const overrideConfigProperties = (baseObject, overrideObject)=>{
    if (overrideObject) {
        for(const key in overrideObject){
            overrideProperty(baseObject, key, overrideObject[key]);
        }
    }
};
const mergeConfigProperties = (baseObject, mergeObject)=>{
    if (mergeObject) {
        for(const key in mergeObject){
            const mergeValue = mergeObject[key];
            if (mergeValue !== undefined) {
                baseObject[key] = (baseObject[key] || []).concat(mergeValue);
            }
        }
    }
};
const extendTailwindMerge = (configExtension, ...createConfig)=>typeof configExtension === 'function' ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(()=>mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
const twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);
;
 //# sourceMappingURL=bundle-mjs.mjs.map
}),
]);

//# sourceMappingURL=_220318ff._.js.map