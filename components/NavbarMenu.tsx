"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { category: string; title: string; href: string }[] = [
  {
    category: "Technology",
    title: "Displays an indicator showing the completion progress of a task",
    href: "/docs/technology/progress",
  },
  {
    category: "Sports",
    title: "A popup that displays information related to an element",
    href: "/docs/sports/tooltip",
  },
  {
    category: "Entertainment",
    title: "Discover the latest trends in streaming technology",
    href: "/docs/entertainment/streaming",
  },
  {
    category: "Science",
    title: "Delve into the advancements in space exploration",
    href: "/docs/science/space-exploration",
  },
  {
    category: "Health",
    title: "Understanding the impact of AI in modern healthcare",
    href: "/docs/health/ai-healthcare",
  },
  {
    category: "Education",
    title: "How virtual reality is transforming the learning experience",
    href: "/docs/education/virtual-reality",
  },
  {
    category: "Finance",
    title: "The role of blockchain technology in global finance",
    href: "/docs/finance/blockchain",
  },
  {
    category: "Travel",
    title: "Exploring the future of space tourism and interplanetary travel",
    href: "/docs/travel/space-tourism",
  },
  {
    category: "Automotive",
    title: "The rise of electric vehicles and their environmental impact",
    href: "/docs/automotive/electric-vehicles",
  },
  {
    category: "Fashion",
    title: "Sustainable fashion trends and eco-friendly clothing",
    href: "/docs/fashion/sustainable-fashion",
  },
  {
    category: "Gaming",
    title: "The evolution of cloud gaming and its future potential",
    href: "/docs/gaming/cloud-gaming",
  },
  {
    category: "Music",
    title: "How AI-generated music is changing the industry",
    href: "/docs/music/ai-generated-music",
  },
  {
    category: "Food",
    title: "Exploring the rise of plant-based diets and alternative proteins",
    href: "/docs/food/plant-based-diets",
  },
  {
    category: "Architecture",
    title: "Smart cities and the future of urban living",
    href: "/docs/architecture/smart-cities",
  },
  {
    category: "Literature",
    title: "The influence of AI on modern creative writing",
    href: "/docs/literature/ai-creative-writing",
  },
  {
    category: "History",
    title: "How digital archives are preserving historical records",
    href: "/docs/history/digital-archives",
  },
  {
    category: "Photography",
    title: "The impact of drone photography on modern visual arts",
    href: "/docs/photography/drone-photography",
  },
  {
    category: "Marketing",
    title: "The role of social media influencers in digital marketing",
    href: "/docs/marketing/social-media-influencers",
  },
  {
    category: "Economics",
    title: "How automation is reshaping labor markets globally",
    href: "/docs/economics/automation-labor-markets",
  },
  {
    category: "Politics",
    title: "The use of AI in election campaigns and political analysis",
    href: "/docs/politics/ai-election-campaigns",
  },
  {
    category: "Psychology",
    title: "The psychological effects of social media on mental health",
    href: "/docs/psychology/social-media-mental-health",
  },
];

export default function NavbarMenu() {
  return (
    <NavigationMenu className="font-serif">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-inherit">
            Trending
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid max-h-[75vh] overflow-scroll gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      The Founded.in
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      The Founded.in is dedicated to sharing insights and
                      knowledge on various topics.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs/technology/progress" title="AI in Medicine">
                Explore how AI is transforming medical diagnostics and treatment
                planning.
              </ListItem>
              <ListItem href="/docs/sports/tooltip" title="Sports Analytics">
                Learn how data analytics is revolutionizing sports performance
                analysis.
              </ListItem>
              <ListItem
                href="/docs/entertainment/streaming"
                title="Entertainment Streaming"
              >
                Discover the latest trends in streaming technology.
              </ListItem>
              <ListItem
                href="/docs/science/space-exploration"
                title="Space Exploration"
              >
                Delve into the advancements in space exploration and
                interplanetary travel.
              </ListItem>
              <ListItem
                href="/docs/health/ai-healthcare"
                title="AI in Healthcare"
              >
                Understanding the impact of AI in modern healthcare.
              </ListItem>
              <ListItem
                href="/docs/education/virtual-reality"
                title="Virtual Reality in Education"
              >
                How virtual reality is transforming the learning experience.
              </ListItem>
              <ListItem
                href="/docs/finance/blockchain"
                title="Blockchain in Finance"
              >
                The role of blockchain technology in global finance.
              </ListItem>
              <ListItem
                href="/docs/travel/space-tourism"
                title="Future of Space Tourism"
              >
                Exploring the future of space tourism and interplanetary travel.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-inherit">
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] max-h-[75vh] overflow-scroll gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.category}
                  href={component.href}
                >
                  {component.title}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({
                className: "bg-inherit",
              })}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
