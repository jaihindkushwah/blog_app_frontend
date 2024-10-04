"use client";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { getNavMenu } from "@/lib/getNavMenu";

export default function NavbarMenu() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getNavMenu();
      setData(result);
    };
    fetchData();
  }, []);

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
              <ListItem
                href="/category/technology/progress"
                title="AI in Medicine"
              >
                Explore how AI is transforming medical diagnostics and treatment
                planning.
              </ListItem>
              <ListItem
                href="/category/sports/tooltip"
                title="Sports Analytics"
              >
                Learn how data analytics is revolutionizing sports performance
                analysis.
              </ListItem>
              <ListItem
                href="/category/entertainment/streaming"
                title="Entertainment Streaming"
              >
                Discover the latest trends in streaming technology.
              </ListItem>
              <ListItem
                href="/category/science/space-exploration"
                title="Space Exploration"
              >
                Delve into the advancements in space exploration and
                interplanetary travel.
              </ListItem>
              <ListItem
                href="/category/health/ai-healthcare"
                title="AI in Healthcare"
              >
                Understanding the impact of AI in modern healthcare.
              </ListItem>
              <ListItem
                href="/category/education/virtual-reality"
                title="Virtual Reality in Education"
              >
                How virtual reality is transforming the learning experience.
              </ListItem>
              <ListItem
                href="/category/finance/blockchain"
                title="Blockchain in Finance"
              >
                The role of blockchain technology in global finance.
              </ListItem>
              <ListItem
                href="/category/travel/space-tourism"
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
              {data?.map((component: any, index: any) => (
                <ListItem
                  key={component.title + index}
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
          <NavigationMenuTrigger className="bg-inherit">
            Job Interview
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] max-h-[75vh] overflow-scroll gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {data?.map((component: any) => (
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
