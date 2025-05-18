export const flowerDatabase = [
    {
        name: "Red Roses",
        image: "/flower-img/roses.png",
        availability: "Year-round",
        bestFor: "Anniversaries",
        description:
            "Love. Loyalty. Passion. Between cultures, roses have various meaning. However, universally, Red Roses are known for romantic love and deep affection.",
        tags: {
            occasion: ["romantic"],
            colors: ["deep", "rich"],
            personality: ["serious", "sophisticated"],
            mood: ["love", "romance"],
            feature: ["meaning"],
        },
    },
    {
        name: "Sunflowers",
        image: "/flower-img/sunflower.png",
        availability: "Summer - Fall",
        bestFor: "Celebrations",
        description:
            "Joy. Warmth. Adoration. Sunflowers represent happiness and optimism. They're perfect for brightening someone's day or celebrating good news.",
        tags: {
            occasion: ["celebration"],
            colors: ["bright"],
            personality: ["outgoing", "adventurous"],
            mood: ["warmth", "happiness"],
            feature: ["visual"],
        },
    },
    {
        name: "White Lilies",
        image: "/flower-img/white lily.jpg",
        availability: "Year-round",
        bestFor: "Sympathy",
        description:
            "Peace. Purity. Sympathy. White lilies are traditionally associated with funerals and memorial services, symbolizing the restoration of innocence.",
        tags: {
            occasion: ["sympathy"],
            colors: ["neutral"],
            personality: ["gentle", "kind"],
            mood: ["comfort", "peace"],
            feature: ["meaning"],
        },
    },
    {
        name: "Lavender Bouquet",
        image: "/flower-img/lavender.jpg",
        availability: "Summer",
        bestFor: "Self-care",
        description:
            "Tranquility. Serenity. Calmness. Lavender is known for its soothing properties and delightful aroma. Perfect for relaxation and personal wellness.",
        tags: {
            occasion: ["self"],
            colors: ["pastel"],
            personality: ["quiet", "introverted"],
            mood: ["comfort", "peace"],
            feature: ["scent"],
        },
    },
    {
        name: "Mixed Spring Bouquet",
        image: "/flower-img/mixed spring bouquet.jpg",
        availability: "Spring",
        bestFor: "Birthdays",
        description:
            "Celebration. Joy. Renewal. A colorful mix of seasonal spring flowers brings happiness and marks special occasions with vibrant beauty.",
        tags: {
            occasion: ["celebration"],
            colors: ["bright"],
            personality: ["outgoing", "adventurous"],
            mood: ["surprise", "delight"],
            feature: ["mix"],
        },
    },
    {
        name: "Orchids",
        image: "/flower-img/orchids.jpg",
        availability: "Year-round",
        bestFor: "Sophisticated gifts",
        description:
            "Luxury. Strength. Beauty. Orchids are exotic and elegant flowers that represent rare beauty and sophisticated charm.",
        tags: {
            occasion: ["romantic", "celebration"],
            colors: ["neutral", "pastel"],
            personality: ["serious", "sophisticated"],
            mood: ["surprise", "delight"],
            feature: ["visual"],
        },
    },
];

export const questions = [
    {
        text: "What is the occasion for the flowers?",
        options: [
            { text: "A Romantic Gift", value: "romantic" },
            {
                text: "A Celebration (birthday, wedding, etc.)",
                value: "celebration",
            },
            { text: "Sympathy or Condolence Gift", value: "sympathy" },
            { text: "I'm not too sure...", value: "any" },
        ],
        category: "occasion",
    },
    {
        text: "Who are you getting the flowers for?",
        options: [
            { text: "My Partner", value: "romantic" },
            { text: "Family Member(s)", value: "family" },
            { text: "My Friend(s)", value: "friend" },
            { text: "For Myself", value: "self" },
        ],
        category: "recipient",
    },
    {
        text: "What mood or feeling do you want the flowers to portray?",
        options: [
            { text: "Warmth and Happiness", value: "warmth happiness" },
            { text: "Love and Romance", value: "love romance" },
            { text: "Comfort and Peace", value: "comfort peace" },
            { text: "Surprise and Delight", value: "surprise delight" },
            { text: "I'm not too sure, surprise me!", value: "any" },
        ],
        category: "mood",
    },
    {
        text: "Which best describes the recipient's (or your own) personality?",
        options: [
            { text: "Outgoing and Adventurous", value: "outgoing adventurous" },
            { text: "Gentle and Kind", value: "gentle kind" },
            {
                text: "Serious and Sophisticated",
                value: "serious sophisticated",
            },
            { text: "Quiet and Introverted", value: "quiet introverted" },
        ],
        category: "personality",
    },
    {
        text: "What colours do you or the recipient most like?",
        options: [
            {
                text: "Soft Pastels (baby blue, lavender, etc.)",
                value: "pastel",
            },
            {
                text: "Deep/ Rich (burgundy, navy blue, etc.)",
                value: "deep rich",
            },
            { text: "Bright Colours (yellow, orange, etc.)", value: "bright" },
            { text: "Neutral Colors (white, brown, etc.)", value: "neutral" },
            { text: "I'm not too sure, surprise me!", value: "any" },
        ],
        category: "colors",
    },
    {
        text: "Lastly, what is the most important feature for the flowers to have?",
        options: [
            { text: "To look visually stunning", value: "visual" },
            { text: "The flowers having a nice scent", value: "scent" },
            { text: "The meaning behind the flowers", value: "meaning" },
            { text: "A mix of everything", value: "mix" },
        ],
        category: "feature",
    },
];
