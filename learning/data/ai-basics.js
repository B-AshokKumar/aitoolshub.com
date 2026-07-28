
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

    {
    id: 9,

    title: "Neural Networks",

    category: "AI Basics",

    icon: "🕸️",

    level: "Intermediate",

    duration: "8 min",

    description: "Learn how Artificial Neural Networks help computers recognise patterns and make intelligent decisions.",

    content: `
Artificial Neural Networks (ANNs) are computer systems inspired by the human brain.

A neural network consists of many connected nodes called neurons. These neurons work together to process information and recognise patterns in data.

Neural Networks are the foundation of Deep Learning. They can analyse images, understand speech, recognise handwriting and translate languages.

The more quality data a neural network is trained with, the better it usually performs.

Modern AI applications such as ChatGPT, image generators and speech assistants rely on advanced neural networks.
`,

    keyPoints: [
        "Inspired by the human brain.",
        "Made up of connected artificial neurons.",
        "Learns patterns from data.",
        "Forms the basis of Deep Learning.",
        "Used in many modern AI applications."
    ],

    examples: [
        "Face recognition",
        "Speech-to-text",
        "Handwriting recognition",
        "Language translation",
        "Image generation"
    ],

    related: [7,8,10]
},

{
    id: 10,

    title: "Natural Language Processing (NLP)",

    category: "AI Basics",

    icon: "💬",

    level: "Intermediate",

    duration: "9 min",

    description: "Discover how AI understands, analyses and generates human language.",

    content: `
Natural Language Processing (NLP) is a branch of Artificial Intelligence that enables computers to understand and communicate using human language.

NLP combines Machine Learning, Deep Learning and linguistics to analyse text and speech.

It allows AI systems to answer questions, translate languages, summarise documents, detect emotions and power intelligent chatbots.

Many popular AI assistants and Generative AI tools use NLP to communicate naturally with users.

As NLP continues to improve, conversations between humans and computers become more accurate and more natural.
`,

    keyPoints: [
        "NLP helps computers understand human language.",
        "Works with both text and speech.",
        "Uses Machine Learning and Deep Learning.",
        "Powers chatbots and virtual assistants.",
        "Improves communication between humans and AI."
    ],

    examples: [
        "ChatGPT",
        "Google Translate",
        "Voice assistants",
        "Email spam filtering",
        "Automatic text summarisation"
    ],

    related: [7,8,9]
},

    {
    id: 11,

    title: "Computer Vision",

    category: "AI Basics",

    icon: "👁️",

    level: "Intermediate",

    duration: "8 min",

    description: "Learn how AI enables computers to understand and analyse images and videos.",

    content: `
Computer Vision is a branch of Artificial Intelligence that allows computers to interpret visual information from images and videos.

Using Machine Learning and Deep Learning, AI can identify objects, recognise faces, detect movement and understand scenes.

Computer Vision is widely used in smartphones, healthcare, manufacturing, agriculture and transportation.

As camera technology and AI continue to improve, Computer Vision is becoming an essential part of many modern applications.
`,

    keyPoints: [
        "Helps computers understand images and videos.",
        "Uses Machine Learning and Deep Learning.",
        "Recognises objects, faces and text.",
        "Improves automation and safety.",
        "Used in many industries."
    ],

    examples: [
        "Face Unlock on smartphones",
        "Medical image analysis",
        "Traffic monitoring",
        "Quality inspection in factories",
        "Self-driving vehicles"
    ],

    related: [8,9,12]
},

{
    id: 12,

    title: "Robotics and AI",

    category: "AI Basics",

    icon: "🤖",

    level: "Intermediate",

    duration: "8 min",

    description: "Discover how Artificial Intelligence makes robots smarter and more autonomous.",

    content: `
Robotics combines engineering with Artificial Intelligence to build machines that can perform tasks automatically.

AI enables robots to learn from data, recognise objects, make decisions and interact with their surroundings.

Modern robots are used in factories, hospitals, warehouses, homes and even space exploration.

As AI technology advances, robots are becoming more intelligent, efficient and capable of working alongside humans.
`,

    keyPoints: [
        "Robotics uses AI to make intelligent machines.",
        "Robots can sense and respond to their environment.",
        "Used in manufacturing and healthcare.",
        "Improves productivity and safety.",
        "Future robots will become more autonomous."
    ],

    examples: [
        "Industrial robots",
        "Robot vacuum cleaners",
        "Surgical robots",
        "Warehouse robots",
        "Mars exploration rovers"
    ],

    related: [11,13]
},

{
    id: 13,

    title: "Expert Systems",

    category: "AI Basics",

    icon: "🧩",

    level: "Intermediate",

    duration: "7 min",

    description: "Understand how Expert Systems solve problems using specialised knowledge.",

    content: `
An Expert System is an AI program that uses stored knowledge and logical rules to make decisions like a human expert.

Instead of learning from data, Expert Systems rely on a knowledge base and an inference engine.

They are commonly used where expert advice is required consistently and quickly.

Although newer AI technologies have become more popular, Expert Systems are still valuable in many specialised fields.
`,

    keyPoints: [
        "Uses a knowledge base.",
        "Applies logical rules.",
        "Simulates expert decision-making.",
        "Provides consistent recommendations.",
        "Still useful in specialised industries."
    ],

    examples: [
        "Medical diagnosis",
        "Tax advisory systems",
        "Equipment troubleshooting",
        "Legal support systems",
        "Business rule engines"
    ],

    related: [7,14]
},

{
    id: 14,

    title: "Reinforcement Learning",

    category: "AI Basics",

    icon: "🎯",

    level: "Advanced",

    duration: "9 min",

    description: "Learn how AI improves through rewards and penalties.",

    content: `
Reinforcement Learning is a type of Machine Learning in which an AI agent learns by interacting with its environment.

The agent receives rewards for good actions and penalties for poor decisions.

Over time, it discovers the best strategy to achieve its goals.

Reinforcement Learning is widely used in robotics, gaming, recommendation systems and autonomous vehicles.
`,

    keyPoints: [
        "Learns by trial and error.",
        "Uses rewards and penalties.",
        "Improves decision-making over time.",
        "Suitable for complex environments.",
        "Used in robotics and games."
    ],

    examples: [
        "Game-playing AI",
        "Robot navigation",
        "Warehouse automation",
        "Recommendation systems",
        "Autonomous driving"
    ],

    related: [7,12,15]
},

{
    id: 15,

    title: "Generative AI",

    category: "AI Basics",

    icon: "✨",

    level: "Beginner",

    duration: "10 min",

    description: "Explore how Generative AI creates new text, images, music, videos and code.",

    content: `
Generative AI is a type of Artificial Intelligence that creates new content instead of simply analysing existing information.

It can generate text, images, videos, music, computer code and many other forms of digital content.

Generative AI is powered by advanced Deep Learning models trained on large datasets.

Today, Generative AI is transforming education, software development, healthcare, business and creative industries by helping people work faster and explore new ideas.
`,

    keyPoints: [
        "Creates original digital content.",
        "Uses advanced Deep Learning models.",
        "Can generate text, images and code.",
        "Improves productivity and creativity.",
        "One of the fastest-growing AI technologies."
    ],

    examples: [
        "ChatGPT",
        "AI image generators",
        "AI coding assistants",
        "AI music generation",
        "AI video creation"
    ],

    related: [8,9,10]
}, 

    {
    id: 16,

    title: "AI Ethics",

    category: "AI Basics",

    icon: "⚖️",

    level: "Beginner",

    duration: "8 min",

    description: "Learn why ethics is essential when developing and using Artificial Intelligence.",

    content: `
AI Ethics is the study of designing and using Artificial Intelligence in a fair, responsible and trustworthy way.

As AI becomes part of everyday life, it can influence important decisions in healthcare, education, finance and employment.

Developers must ensure AI systems respect privacy, avoid discrimination and make decisions transparently whenever possible.

Ethical AI helps build trust between people and technology while reducing the risk of harmful outcomes.
`,

    keyPoints: [
        "Promotes fairness in AI.",
        "Protects user privacy.",
        "Encourages transparency.",
        "Reduces harmful outcomes.",
        "Builds trust in AI systems."
    ],

    examples: [
        "Fair hiring systems",
        "Responsible healthcare AI",
        "Privacy protection",
        "Transparent recommendations",
        "Ethical AI policies"
    ],

    related: [17,18]
},

{
    id: 17,

    title: "Bias in Artificial Intelligence",

    category: "AI Basics",

    icon: "⚠️",

    level: "Intermediate",

    duration: "8 min",

    description: "Understand how bias can affect AI systems and why reducing it is important.",

    content: `
AI systems learn from data. If the training data contains unfair or inaccurate information, the AI may produce biased results.

Bias can affect decisions related to recruitment, banking, healthcare and law enforcement.

Developers work to reduce bias by using diverse datasets, testing AI systems carefully and continuously improving their models.

Reducing bias helps create fairer AI systems for everyone.
`,

    keyPoints: [
        "Bias usually comes from data.",
        "Biased AI can produce unfair decisions.",
        "High-quality datasets reduce bias.",
        "Testing helps identify problems.",
        "Fair AI benefits everyone."
    ],

    examples: [
        "Hiring recommendations",
        "Loan approval systems",
        "Medical diagnosis",
        "Face recognition",
        "Language translation"
    ],

    related: [16,18]
},

{
    id: 18,

    title: "Responsible AI",

    category: "AI Basics",

    icon: "🛡️",

    level: "Intermediate",

    duration: "8 min",

    description: "Explore the principles of building safe, reliable and accountable AI systems.",

    content: `
Responsible AI focuses on creating AI systems that are safe, secure, reliable and beneficial to society.

It includes protecting user data, reducing bias, ensuring transparency and allowing humans to oversee important decisions.

Many organisations follow Responsible AI principles when developing new AI technologies.

These principles help ensure AI is used for positive purposes.
`,

    keyPoints: [
        "Keeps AI safe and reliable.",
        "Protects user information.",
        "Encourages accountability.",
        "Supports human oversight.",
        "Promotes trustworthy AI."
    ],

    examples: [
        "Healthcare AI review",
        "Financial fraud detection",
        "Content moderation",
        "Autonomous vehicles",
        "Government AI guidelines"
    ],

    related: [16,17,19]
},

{
    id: 19,

    title: "The Future of Artificial Intelligence",

    category: "AI Basics",

    icon: "🚀",

    level: "Beginner",

    duration: "9 min",

    description: "Discover how AI may shape the future of technology and society.",

    content: `
Artificial Intelligence is expected to continue transforming nearly every industry.

Future AI systems may improve healthcare, education, transportation, agriculture, scientific research and environmental protection.

Although AI will automate many tasks, it will also create new careers and opportunities for people with AI skills.

Learning AI today prepares individuals for tomorrow's technology-driven world.
`,

    keyPoints: [
        "AI will continue to evolve.",
        "Many industries will benefit.",
        "New careers will emerge.",
        "AI skills will become increasingly valuable.",
        "Responsible innovation remains important."
    ],

    examples: [
        "AI-powered healthcare",
        "Smart cities",
        "Precision farming",
        "Scientific research",
        "Personal AI assistants"
    ],

    related: [15,20]
},

{
    id: 20,

    title: "Artificial Intelligence in Everyday Life",

    category: "AI Basics",

    icon: "🌍",

    level: "Beginner",

    duration: "8 min",

    description: "See how AI is already improving daily life around the world.",

    content: `
Artificial Intelligence is already part of everyday life, often without people realising it.

It helps recommend movies and music, filters spam emails, provides navigation, translates languages and powers virtual assistants.

Businesses use AI to improve customer service, manage inventory and analyse large amounts of data.

As AI continues to develop, it will become an even more useful tool for education, work and daily activities.
`,

    keyPoints: [
        "AI is already widely used.",
        "Improves convenience and productivity.",
        "Supports communication and learning.",
        "Helps businesses make better decisions.",
        "Will become even more common in the future."
    ],

    examples: [
        "Google Maps",
        "Netflix recommendations",
        "Online shopping",
        "Voice assistants",
        "Spam email filtering"
    ],

    related: [1,15,19]
}

];
