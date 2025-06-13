import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

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
  SidebarMenuBadge,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This is sample data.
const data = {
  navMain: [
    {
      title: "General Overview",
      url: "#",
      items: [
        {
          title: "Pictures",
          url: "#",
          isActive: true,
        },
        {
          title: "Property Details",
          url: "#",
        },
        {
          title: "Inspection Date & Time",
          url: "#",
        },
        {
          title: "Client Information",
          url: "#",
        },
        {
          title: "Weather Conditions",
          url: "#",
        },
        {
          title: "Occupancy Status",
          url: "#",
        },
      ],
    },
    {
      title: "Exterior Inspection",
      url: "#",
      items: [
        {
          title: "Site and Grounds",
          url: "#",
        },
        {
          title: "Exterior Structure",
          url: "#",
          
        },
        {
          title: "Roof System",
          url: "#",
        },
        {
          title: "Exterior Doors and Windows",
          url: "#",
        },
      ],
    },
    {
      title: "Interior Inspection",
      url: "#",
      items: [
        {
          title: "Interior Walls, Ceilings, and Floors",
          url: "#",
        },
        {
          title: "Doors and Windows",
          url: "#",
        },
        {
          title: "Stairways and Railings",
          url: "#",
        },
        {
          title: "Built-In Appliances",
          url: "#",
        },
      ],
    },
    {
      title: "Structural Components",
      url: "#",
      items: [
        {
          title: "Foundation",
          url: "#",
        },
        {
          title: "Basement and Crawlspace",
          url: "#",
        },
        {
          title: "Attic and Roof Framing",
          url: "#",
        },
      ],
    },
    {
      title: "Electrical Systems",
      url: "#",
      items: [
        {
          title: "Service Entrance and Panels",
          url: "#",
        },
        {
          title: "Circuits, Devices and Fixtures",
          url: "#",
        },
        {
          title: "Wiring Methods and Safety",
          url: "#",
        },
      ],
    },
    {
      title: "HVAC Systems",
      url: "#",
      items: [
        {
          title: "Heating Equipment",
          url: "#",
        },
        {
          title: "Cooling Equipment",
          url: "#",
        },
        {
          title: "Ductwork and Distribution",
          url: "#",
        },
      ],
    },
    {
      title: "Plumbing Systems",
      url: "#",
      items: [
        {
          title: "Main Water Supply and Distribution",
          url: "#",
        },
        {
          title: "Fixtures and Faucets",
          url: "#",
        },
        {
          title: "Sump Pumps and Sewage Ejectors",
          url: "#",
        },
      ],
    },
    {
      title: "Insulation and Ventilation",
      url: "#",
      items: [
        {
          title: "Attic Insulation",
          url: "#",
        },
        {
          title: "Wall and Floor Insulation",
          url: "#",
        },
        {
          title: "Ventilation Systems",
          url: "#",
        },
      ],
    },
    {
      title: "Fireplace and Chimney",
      url: "#",
      items: [
        {
          title: "Fireplace Structure",
          url: "#",
        },
        {
          title: "Chimney Components",
          url: "#",
        },
      ],
    },
    {
      title: "Optional Systems",
      url: "#",
      items: [
        {
          title: "Pools and Spas, Irrigation, IoT,...",
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
                <div className="bg-primary rounded-lg p-4 flex items-center justify-center bg-[url(/aeyes-logo.svg)] bg-size-[20px] bg-no-repeat bg-center h-12 w-12">
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
          <Tabs defaultValue="complete" className="w-full">
            <TabsList className="">
              <TabsTrigger value="complete">Complete</TabsTrigger>
              <TabsTrigger value="password">Summary</TabsTrigger>
            </TabsList>
            <TabsContent value="complete">
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
            </TabsContent>
            <TabsContent value="password">Alternative content</TabsContent>
          </Tabs>
          
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
