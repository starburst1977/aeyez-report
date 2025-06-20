import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Overview",
      url: "#",
      items: [
        {
          title: "General Overview",
          url: "#",
        },
        {
          title: "Major Defects",
          url: "#",
          isActive: true,
        },
        {
          title: "Minor Defects",
          url: "#",
        },
        {
          title: "Limitation",
          url: "#",
        },
        
      ],
    },
    
    
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#" className="pt-2 block h-auto">
                <div className="bg-primary rounded-lg p-4 flex items-center justify-center h-12 w-12">
                  <Image
                    src={`${process.env.NODE_ENV === 'production' ? '/aeyez-report' : ''}/aeyes-logo.svg`}
                    alt="AEyes logo"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col leading-none pl-2">
                  <span className="font-medium text-primary text-lg">525 S State St</span>
                  <span className="text-accent">Ann Arbor, MI 48109</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="inline-flex items-center gap-2 py-8 px-2">
            <Button variant="secondary" className="text-muted bg-secondary-foreground border-0 hover:bg-secondary/50" asChild>
              <Link href="/">Complete</Link>
            </Button>
            <Button variant="outline" className="text-white bg-primary border-0 hover:bg-primary-foreground">Summary</Button>
            
          </div>
          <div>
            <SidebarMenu className="gap-2">
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="font-bold">
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                      {item.items.map((item) => (
                        <SidebarMenuSubItem key={item.title} className="flex items-center justify-between">
                          <SidebarMenuSubButton asChild isActive={item.isActive}>
                            <a href={item.url}>{item.title}</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
