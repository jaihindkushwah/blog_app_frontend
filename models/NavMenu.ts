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
      title: "HTML interview",
      href: "/interview/html",
    },
    {
      category: "CSS interview",
      title: "CSS interview",
      href: "/interview/css",
    },
    {
      category: "JavaScript interview",
      title: "JavaScript interview",
      href: "/interview/javascript",
    },
    {
      category: "React interview",
      title: "Frontend Developer",
      href: "/interview/react",
    },
    {
      category: "React-Native interview",
      title: "React-Native for hybrid apps",
      href: "/interview/react-native",
    },
    {
      category: "Flutter interview",
      title: "Flutter Developer",
      href: "/interview/flutter",
    },
    {
      category: "Node-Js interview",
      title: "Node-Js interview",
      href: "/interview/node-js",
    },
    {
      category: "Express-Js interview",
      title: "Express-Js interview",
      href: "/interview/express-js",
    },
    {
      category: "MongoDB interview",
      title: "MongoDB interview",
      href: "/interview/mongodb",
    },
    {
      category: "Angular interview",
      title: "Angular interview",
      href: "/interview/angular",
    },
    {
      category: "Vue-Js interview",
      title: "Vue-Js interview",
      href: "/interview/angular",
    },
    {
      category: "Next-Js interview",
      title: "Next-Js interview",
      href: "/interview/next-js",
    },
    {
      category: "SQL interview",
      title: "SQL interview",
      href: "/interview/sql",
    },
    {
      category: "Java interview",
      title: "Java interview",
      href: "/interview/java",
    },

    {
      category: "Python interview",
      title: "Python interview",
      href: "/interview/python",
    },
    {
      category: "C++ interview",
      title: "C++ interview",
      href: "/interview/c++",
    },
    {
      category: "C# interview",
      title: "C# interview",
      href: "/interview/c#",
    },
    {
      category: "Docker interview",
      title: "Docker interview",
      href: "/interview/docker",
    },
    {
      category: "Redis interview",
      title: "Redis interview",
      href: "/interview/redis",
    },
    {
      category: "Kafka interview ",
      title: "Kafka interview",
      href: "/interview/kafka",
    },
  ];

// const NavMenu = Promise.resolve(dummyMenu);
const NavMenu = { category: CategoryNav, job_interview: JobInterview };
export default NavMenu;
