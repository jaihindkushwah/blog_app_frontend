const CategoryNav: { category: string; title: string; href: string }[] = [
  {
    category: "Technology",
    title: "Displays an indicator showing the completion progress of a task",
    href: "/category/technology",
  },
  {
    category: "Sports",
    title: "A popup that displays information related to an element",
    href: "/category/sports",
  },
  {
    category: "Entertainment",
    title: "Discover the latest trends in streaming technology",
    href: "/category/entertainment",
  },
  {
    category: "Science",
    title: "Delve into the advancements in space exploration",
    href: "/category/science",
  },
  {
    category: "Health",
    title: "Understanding the impact of AI in modern healthcare",
    href: "/category/health",
  },
  {
    category: "Education",
    title: "How virtual reality is transforming the learning experience",
    href: "/category/education",
  },
  {
    category: "Finance",
    title: "The role of blockchain technology in global finance",
    href: "/category/finance",
  },
  {
    category: "Travel",
    title: "Exploring the future of space tourism and interplanetary travel",
    href: "/category/travel",
  },
  {
    category: "Automotive",
    title: "The rise of electric vehicles and their environmental impact",
    href: "/category/automotive",
  },
  {
    category: "Fashion",
    title: "Sustainable fashion trends and eco-friendly clothing",
    href: "/category/fashion",
  },
  {
    category: "Gaming",
    title: "The evolution of cloud gaming and its future potential",
    href: "/category/gaming",
  },
  {
    category: "Music",
    title: "How AI-generated music is changing the industry",
    href: "/category/music",
  },
  {
    category: "Food",
    title: "Exploring the rise of plant-based diets and alternative proteins",
    href: "/category/food",
  },
  {
    category: "Architecture",
    title: "Smart cities and the future of urban living",
    href: "/category/architecture",
  },
  {
    category: "Literature",
    title: "The influence of AI on modern creative writing",
    href: "/category/literature",
  },
  {
    category: "History",
    title: "How digital archives are preserving historical records",
    href: "/category/history",
  },
  {
    category: "Photography",
    title: "The impact of drone photography on modern visual arts",
    href: "/category/photography",
  },
  {
    category: "Marketing",
    title: "The role of social media influencers in digital marketing",
    href: "/category/marketing",
  },
  {
    category: "Economics",
    title: "How automation is reshaping labor markets globally",
    href: "/category/economics",
  },
  {
    category: "Politics",
    title: "The use of AI in election campaigns and political analysis",
    href: "/category/politics",
  },
  {
    category: "Psychology",
    title: "The psychological effects of social media on mental health",
    href: "/category/psychology",
  },
];
export const JobInterview: { category: string; title: string; href: string }[] =
  [
    {
      category: "HTML interview",
      title: "Master HTML: Ace Your Next Web Dev Interview",
      href: "/interview/Top_50_HTML_Interview_Questions_and_Answers_for_Technical_Job_Preparation_9fc152ab",
    },
    {
      category: "CSS interview",
      title: "CSS Wizardry: Styling Your Way to Interview Success",
      href: "/interview/CSS_Interview_Prep:_50_Must-Know_Questions_with_Detailed_Explanations_bbe040cf",
    },
    {
      category: "JavaScript interview",
      title: "JavaScript Ninja: Conquer Your Coding Interview",
      href: "/interview/Top_50_JavaScript_Interview_Questions_and_Answers:_Essential_Guide_for_Developers_0f215e03",
    },
    {
      category: "React interview",
      title: "React Rockstar: Frontend Mastery Unleashed",
      href: "/interview/Top_50_React_Interview_Questions:_Functional_Components_&_Modern_Best_Practices_5076125e",
    },
    {
      category: "React-Native interview",
      title: "Cross-Platform Pro: Dominate React Native Interviews",
      href: "/interview/react-native",
    },
    {
      category: "Flutter interview",
      title: "Flutter Genius: Soar Through Your Mobile Dev Interview",
      href: "/interview/flutter",
    },
    {
      category: "Node-Js interview",
      title: "Node.js Virtuoso: Server-Side Success Awaits",
      href: "/interview/node-js",
    },
    {
      category: "Express-Js interview",
      title: "Express.js Expert: Fast-Track Your Backend Interview",
      href: "/interview/express-js",
    },
    {
      category: "MongoDB interview",
      title: "MongoDB Maven: NoSQL Knowledge Unlocked",
      href: "/interview/mongodb",
    },
    {
      category: "Angular interview",
      title: "Angular Ace: Triumph in Your Frontend Showdown",
      href: "/interview/angular",
    },
    {
      category: "Vue-Js interview",
      title: "Vue.js Victor: Progressive Framework Mastery",
      href: "/interview/vue-js",
    },
    {
      category: "Next-Js interview",
      title: "Next.js Ninja: React Framework Expertise Revealed",
      href: "/interview/next-js",
    },
    {
      category: "SQL interview",
      title: "SQL Sorcerer: Database Wisdom Unleashed",
      href: "/interview/sql",
    },
    {
      category: "Java interview",
      title: "Java Jedi: Object-Oriented Interview Mastery",
      href: "/interview/java",
    },
    {
      category: "Python interview",
      title: "Python Prodigy: Scripting Your Way to Success",
      href: "/interview/python",
    },
    {
      category: "C++ interview",
      title: "C++ Champion: High-Performance Coding Conquered",
      href: "/interview/c++",
    },
    {
      category: "C# interview",
      title: "C# Sherpa: Navigate Your .NET Interview with Ease",
      href: "/interview/c#",
    },
    {
      category: "Docker interview",
      title: "Docker Dynamo: Containerize Your Career Prospects",
      href: "/interview/docker",
    },
    {
      category: "Redis interview",
      title: "Redis Ranger: In-Memory Data Store Mastery",
      href: "/interview/redis",
    },
    {
      category: "Kafka interview",
      title: "Kafka Conqueror: Stream Processing Prowess Proven",
      href: "/interview/kafka",
    },
  ];

// const NavMenu = Promise.resolve(dummyMenu);
const NavMenu = { category: CategoryNav, job_interview: JobInterview };
export default NavMenu;
