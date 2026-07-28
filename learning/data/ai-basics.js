
const aiBasics = [
    // Paste the lesson objects here
  {
    id: 1,

    title: "What is Artificial Intelligence?",

    category: "AI Basics",

    icon: "🤖",

    level: "Beginner",

    duration: "5 min",

    description: "Understand the meaning of Artificial Intelligence and how it helps people in everyday life.",

    content: `
Artificial Intelligence (AI) is a branch of computer science that enables computers and machines to perform tasks that normally require human intelligence.

These tasks include understanding language, recognising images, solving problems, learning from data and making decisions.

AI is designed to help people work more efficiently by automating repetitive tasks and providing useful insights.

Today, AI is used in many fields including education, healthcare, banking, agriculture, transportation and entertainment.

Popular AI tools include ChatGPT, Google Gemini, Claude and Microsoft Copilot.

AI does not replace human intelligence. Instead, it assists people in solving problems more quickly and accurately when used responsibly.
`,

    keyPoints: [
        "AI enables machines to perform intelligent tasks.",
        "AI learns from data and algorithms.",
        "AI is used in many industries.",
        "AI improves productivity.",
        "Responsible AI is important."
    ],

    examples: [
        "Voice assistants",
        "Chatbots",
        "Language translation",
        "Image recognition",
        "Recommendation systems"
    ],

    related: [2,3,4]
},

{
    id: 2,

    title: "History of Artificial Intelligence",

    category: "AI Basics",

    icon: "📜",

    level: "Beginner",

    duration: "6 min",

    description: "Learn how Artificial Intelligence developed from an idea into today's powerful technology.",

    content: `
The idea of intelligent machines has existed for many years. However, Artificial Intelligence became an academic field in 1956 during the Dartmouth Conference.

Early AI systems focused on solving mathematical problems and playing games such as chess.

During the 1980s, expert systems became popular in business.

In the 2000s, increased computing power and large amounts of digital data allowed Machine Learning to grow rapidly.

Today, Generative AI can write text, create images, generate code and assist people with many daily tasks.

AI continues to evolve and is expected to become even more capable in the coming years.
`,

    keyPoints: [
        "AI became an academic field in 1956.",
        "Early AI solved simple problems.",
        "Expert systems became popular in the 1980s.",
        "Machine Learning accelerated AI development.",
        "Generative AI is today's major advancement."
    ],

    examples: [
        "IBM Deep Blue",
        "IBM Watson",
        "ChatGPT",
        "Google Gemini",
        "Claude"
    ],

    related: [1,3]
},

{
    id: 3,

    title: "Types of Artificial Intelligence",

    category: "AI Basics",

    icon: "🧠",

    level: "Beginner",

    duration: "7 min",

    description: "Understand the different categories of Artificial Intelligence.",

    content: `
Artificial Intelligence is commonly divided into three main categories.

Narrow AI (Weak AI)
This type is designed to perform one specific task. Examples include voice assistants, recommendation systems and chatbots.

General AI (Strong AI)
General AI is a theoretical concept where machines would be able to perform any intellectual task that a human can do. It does not yet exist.

Super AI
Super AI refers to a future form of AI that would surpass human intelligence in almost every field. It remains hypothetical.

Today, almost all AI systems belong to the Narrow AI category.
`,

    keyPoints: [
        "Narrow AI exists today.",
        "General AI has not yet been achieved.",
        "Super AI remains theoretical.",
        "Most current AI systems are specialised.",
        "Different AI types have different capabilities."
    ],

    examples: [
        "ChatGPT",
        "Google Maps",
        "Netflix recommendations",
        "Face Unlock",
        "Spam filters"
    ],

    related: [4,5,7]
},

    {
    id: 4,

    title: "Narrow AI (Weak AI)",

    category: "AI Basics",

    icon: "🎯",

    level: "Beginner",

    duration: "6 min",

    description: "Learn about Narrow AI, the most common type of Artificial Intelligence used today.",

    content: `
Narrow AI, also called Weak AI, is designed to perform a specific task or a limited set of tasks.

Unlike humans, Narrow AI cannot think beyond the job it has been trained to perform. It cannot understand or reason about unrelated subjects.

Almost every AI application available today belongs to this category.

Examples include voice assistants, recommendation systems, image recognition, spam filters and AI chatbots.

Although Narrow AI cannot think like a human, it can perform specialised tasks very quickly and accurately.

As technology improves, Narrow AI continues to become more useful in everyday life and business.
`,

    keyPoints: [

        "Narrow AI performs specific tasks.",

        "It cannot think beyond its training.",

        "Most AI systems today are Narrow AI.",

        "It is fast, accurate and efficient.",

        "It assists humans rather than replacing them."

    ],

    examples: [

        "ChatGPT",

        "Google Gemini",

        "Alexa",

        "Google Maps",

        "Netflix Recommendations",

        "Face Unlock"

    ],

    related: [1,3,5]
},

{
    id: 5,

    title: "General AI (Strong AI)",

    category: "AI Basics",

    icon: "🧑‍💻",

    level: "Intermediate",

    duration: "7 min",

    description: "Understand what General AI is and why it has not yet been achieved.",

    content: `
General AI, also called Strong AI or Artificial General Intelligence (AGI), is a theoretical form of Artificial Intelligence.

Unlike Narrow AI, General AI would be able to understand, learn and perform almost any intellectual task that a human can perform.

A General AI system could solve unfamiliar problems, learn new skills without being specially programmed and apply knowledge across many different subjects.

Today, no true General AI system exists.

Researchers around the world continue to study AGI, but building a machine with human-level intelligence remains one of the biggest challenges in computer science.

If General AI becomes a reality in the future, it could transform education, healthcare, science, engineering and many other industries.
`,

    keyPoints: [

        "General AI is still theoretical.",

        "It would perform many different intellectual tasks.",

        "It could learn new skills independently.",

        "No true AGI currently exists.",

        "AGI is an active area of research."

    ],

    examples: [

        "Human-level virtual assistant",

        "Universal personal tutor",

        "Scientific research assistant",

        "Autonomous engineer",

        "Advanced medical consultant"

    ],

    related: [3,4,6]
},

    {
    id: 6,

    title: "Super AI",

    category: "AI Basics",

    icon: "🚀",

    level: "Advanced",

    duration: "6 min",

    description: "Learn about the theoretical concept of Super Artificial Intelligence.",

    content: `
Super Artificial Intelligence (Super AI) is a hypothetical form of AI that would become more intelligent than humans in almost every field.

It could solve scientific problems, make complex decisions and learn new skills much faster than humans.

Today, Super AI does not exist. It is discussed mainly in research, books and future technology predictions.

Many scientists believe that if Super AI is ever developed, it must be designed carefully to ensure it remains safe, ethical and beneficial to humanity.
`,

    keyPoints: [
        "Super AI is only a concept today.",
        "It would exceed human intelligence.",
        "It could solve highly complex problems.",
        "Safety and ethics are important.",
        "Researchers continue to study this possibility."
    ],

    examples: [
        "Advanced scientific research",
        "Global climate modelling",
        "Space exploration",
        "Medical discoveries"
    ],

    related: [5,7]
},

{
    id: 7,

    title: "Machine Learning",

    category: "AI Basics",

    icon: "📊",

    level: "Beginner",

    duration: "8 min",

    description: "Understand how computers learn from data without being explicitly programmed.",

    content: `
Machine Learning (ML) is a branch of Artificial Intelligence.

Instead of following fixed instructions, Machine Learning systems analyse data, identify patterns and improve their performance through experience.

The more high-quality data a model receives, the better it can usually make predictions.

Machine Learning powers many applications that people use every day.

It is one of the most important technologies behind modern AI.
`,

    keyPoints: [
        "Machine Learning is a branch of AI.",
        "It learns from data.",
        "It improves with experience.",
        "Good data improves accuracy.",
        "ML powers many modern applications."
    ],

    examples: [
        "Spam detection",
        "Netflix recommendations",
        "YouTube recommendations",
        "Online shopping suggestions",
        "Fraud detection"
    ],

    related: [1,8,9]
},

{
    id: 8,

    title: "Deep Learning",

    category: "AI Basics",

    icon: "🧠",

    level: "Intermediate",

    duration: "8 min",

    description: "Discover how Deep Learning enables computers to solve complex problems.",

    content: `
Deep Learning is a specialised area of Machine Learning.

It uses Artificial Neural Networks with many layers to process large amounts of information.

Deep Learning performs exceptionally well in tasks involving images, speech, text and video.

Recent breakthroughs in Generative AI have been made possible because of Deep Learning techniques.

Although Deep Learning produces powerful results, it usually requires large datasets and significant computing power.
`,

    keyPoints: [
        "Deep Learning is part of Machine Learning.",
        "It uses multi-layer neural networks.",
        "It performs well with complex data.",
        "It powers many modern AI systems.",
        "Training often requires powerful computers."
    ],

    examples: [
        "Image recognition",
        "Speech recognition",
        "Self-driving vehicles",
        "Medical image analysis",
        "Generative AI"
    ],

    related: [7,9,10]
},

];
