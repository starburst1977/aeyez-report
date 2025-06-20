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
            <Button variant="outline" className="text-white bg-primary border-0 hover:bg-primary-foreground">Complete</Button>
            <Button variant="secondary" className="text-muted bg-secondary-foreground border-0 hover:bg-secondary/50" asChild>
              <Link href="/summary">Summary</Link>
            </Button>
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
