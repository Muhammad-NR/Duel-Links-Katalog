export interface Card {
  id: string
  name: string
  type: "Monster" | "Spell" | "Trap" // Saran: Pakai specific string biar autocompletenya jalan
  rarity: string
  description: string
  atk?: number 
  def?: number
  LINK?: number
  level?: number
  attribute: string
  deckTypes?: string[]
  image?: string 
}

export interface Deck {
  id: string
  name: string
  tier: string
  description: string
  skill?: string
  winRate: number
  usage: number
  difficulty: number
  popularity: number
  mainCards?: string[]
  extraCards?: string[]
  strategy?: string
}

const MONSTER_CARDS: Card[] = [
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/monsters/Blue-Eyes White Dragon.webp",
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/monsters/Blue-Eyes Chaos Dragon.webp",
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/monsters/Blue-Eyes Alternative White Dragon.webp",
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/monsters/Kaibaman the Legend.webp",
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/monsters/Blue-Eyes Jet Dragon.webp",
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/monsters/Grandtusk Dragon.webp",
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/monsters/Skull Meister.webp",
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/extra_deck/Blue-Eyes Tyrant Dragon.webp",
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/extra_deck/Blue-Eyes Spirit Dragon.webp",
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/extra_deck/Azure-Eyes Silver Dragon.webp",
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/extra_deck/Black Rose Moonlight Dragon.webp",
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/extra_deck/Lightstorm Dragon.webp",
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/extra_deck/Divine Dragon Knight Felgrand.webp",
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
    deckTypes: ["Blue-Eyes", "Despia"],
    image: "/cards/extra_deck/Dingirsu, the Orcust of the Evening Star.webp",
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/extra_deck/Hieratic Seal of the Heavenly Spheres.webp",
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
    deckTypes: ["Blue-Eyes", "Salamangreat"],
    image: "/cards/extra_deck/Salamangreat Almiraj.webp",
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
    deckTypes: ["Despia"],
    image: "/cards/monsters/Aluber the Jester of Despia.webp",
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
    deckTypes: ["Despia"],
    image: "/cards/monsters/Dramaturge of Despia.webp",
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
    deckTypes: ["Despia"],
    image: "/cards/monsters/Darklord Morningstar.webp",
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
    deckTypes: ["Despia"],
    image: "/cards/monsters/Ad Libitum of Despia.webp", 
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
    deckTypes: ["Despia"],
    image: "/cards/monsters/Despian Comedy.webp",
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
    deckTypes: ["Despia"],
    image: "/cards/monsters/Despian Tragedy.webp",
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
    deckTypes: ["Despia"],
    image: "/cards/extra_deck/Masquerade the Blazing Dragon.webp",
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
    deckTypes: ["Despia"],
    image: "/cards/extra_deck/Starving Venom Fusion Dragon.webp",
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
    deckTypes: ["Despia"],
    image: "/cards/extra_deck/The First Darklord.webp",
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
    deckTypes: ["Despia"],
    image: "/cards/extra_deck/Despian Quaeritis.webp",
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
    deckTypes: ["Despia"],
    image: "/cards/extra_deck/Despian Proskenion.webp",
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
    deckTypes: ["Despia"],
    image: "/cards/extra_deck/Condemned Darklord.webp",
  },
]

const SPELL_CARDS: Card[] = [
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/spells/Vision with Eyes of Blue.webp",
  },
  {
    id: "62",
    name: "Ultimate Fusion",
    type: "Spell",
    rarity: "Super Rare",
    description: `During the Main Phase: Fusion Summon 1 Fusion Monster from your Extra Deck that mentions "Blue-Eyes White Dragon" or "Blue-Eyes Ultimate Dragon" as material, by shuffling the Fusion Materials listed on it from your hand, field, and/or GY into the Deck, then, you can destroy face-up cards your opponent controls, up to the number of "Blue-Eyes White Dragon" and "Blue-Eyes Ultimate Dragon" used from the field as material.
    \nYou can only activate 1 "Ultimate Fusion" per turn.`,
    attribute: "Quick-Play Spell",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/spells/Ultimate Fusion.webp",
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
    deckTypes: ["Blue-Eyes", "Despia"],
    image: "/cards/spells/Forbidden Droplet.webp",
  },
  {
    id: "64",
    name: "The Melody of Awakening Dragon",
    type: "Spell",
    rarity: "Super Rare",
    description: `Discard 1 card; add up to 2 "Blue-Eyes" monsters with 3000 or more ATK from your Deck to your hand.`,
    attribute: "Normal Spell",
    deckTypes: ["Blue-Eyes"], 
    image: "/cards/spells/The Melody of Awakening Dragon.webp",
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/spells/Bingo Machine, Go!!!.webp",
  },
  {
    id: "66",
    name: "Mystical Space Typhoon",
    type: "Spell",
    rarity: "Ultra Rare",
    description: "Target 1 Spell/Trap on the field; destroy that target.",
    attribute: "Quick-Play Spell",
    image: "/cards/spells/Mystical Space Typhoon.webp",
    deckTypes: ["Blue-Eyes", "Despia"],
  },
  {
    id: "67",
    name: "Super Polymerization",
    type: "Spell",
    rarity: "Ultra Rare",
    description: `Discard 1 card; Fusion Summon 1 Fusion Monster from your Extra Deck, using monsters from either field as Fusion Material.
    \nNeither player can activate cards or effects in response to this card's activation.`,
    attribute: "Quick-Play Spell",
    deckTypes: ["Despia"],
    image: "/cards/spells/Super Polymerization.webp",
  },
  {
    id: "68",
    name: "Banishment of the Darklords",
    type: "Spell",
    rarity: "Ultra Rare",
    description: `Add 1 "Darklord" card from your Deck to your hand, except "Banishment of the Darklords".
    \nYou can only activate 1 "Banishment of the Darklords" per turn.`,
    attribute: "Normal Spell",
    deckTypes: ["Despia"],
    image: "/cards/spells/Banishment of the Darklords.webp",
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
    deckTypes: ["Despia"],
    image: "/cards/spells/Branded in Red.webp",
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
    deckTypes: ["Despia"],
    image: "/cards/spells/Branded Opening.webp",
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
    deckTypes: ["Despia"],
    image: "/cards/spells/Despia, Theater of the Branded.webp",
  },
]

const TRAP_CARDS: Card[] = [
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/traps/True Light.webp",
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
    deckTypes: ["Blue-Eyes"],
    image: "/cards/traps/Majesty of the White Dragons.webp",
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
    deckTypes: ["Despia"],
    image: "/cards/traps/Judgment of the Branded.webp",
  },
]

export const CARDS_DATA: Card[] = [
  ...MONSTER_CARDS,
  ...SPELL_CARDS,
  ...TRAP_CARDS,
  // Total: 180 cards (60 monsters + 60 spells + 60 traps)
]

export const DECKS_DATA: Deck[] = [
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
      "Blue-Eyes Alternative White Dragon", "Blue-Eyes Alternative White Dragon",
      "Kaibaman the Legend", "Kaibaman the Legend", "Kaibaman the Legend",
      "Blue-Eyes Jet Dragon", "Blue-Eyes Jet Dragon",
      "Grandtusk Dragon",
      "Skull Meister", "Skull Meister",
      "Blue-Eyes White Dragon", "Blue-Eyes White Dragon", "Blue-Eyes White Dragon",
      
      "Vision with Eyes of Blue",
      "Forbidden Droplet", "Forbidden Droplet", "Forbidden Droplet",
      "Ultimate Fusion",
      "The Melody of Awakening Dragon", "The Melody of Awakening Dragon", "The Melody of Awakening Dragon",
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
      "Hieratic Seal of the Heavenly Spheres", // Pastikan nama di CARDS_DATA juga diganti jadi ini ya!
      "Salamangreat Almiraj"
    ],
    strategy:
      "Use Tuner monsters to perform Synchro Summons and maintain field advantage with Swordsoul monsters. Control the pace of the game.",
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
      "Aluber the Jester of Despia", "Aluber the Jester of Despia",
      "Dramaturge of Despia", "Dramaturge of Despia", "Dramaturge of Despia",
      "Ad Libitum of Despia", "Ad Libitum of Despia",
      "Despian Comedy", "Despian Comedy",
      "Despian Tragedy", "Despian Tragedy", "Despian Tragedy",
      "Darklord Morningstar", "Darklord Morningstar",

      "Forbidden Droplet", "Forbidden Droplet",
      "Super Polymerization",
      "Banishment of the Darklords", "Banishment of the Darklords",
      "Branded in Red", "Branded in Red",
      "Branded Opening", "Branded Opening", "Branded Opening",
      "Despia, Theater of the Branded", "Despia, Theater of the Branded",
      "Mystical Space Typhoon", "Mystical Space Typhoon",

      "Judgment of the Branded", "Judgment of the Branded"
    ],
    extraCards: [
      "Masquerade the Blazing Dragon",
      "Starving Venom Fusion Dragon",
      "The First Darklord", "The First Darklord",
      "Despian Quaeritis", "Despian Quaeritis",
      "Despian Proskenion",
      "Condemned Darklord",
      "Dingirsu, the Orcust of the Evening Star",
    ],
    strategy: "Mill cards to setup Tearlament effects, use Fusion Summons to extend combos and control the board.",
  },
  
]
