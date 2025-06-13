import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

import { FileText, BadgeCheck, CircleCheck, MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-8  w-full max-w-7xl mx-auto">
          <SidebarTrigger className="-ml-1" />
          
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Inspection Report for Tyler Durden</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 pt-4 pb-16 px-8 w-full max-w-7xl mx-auto pt-0">
          <div className="grid grid-cols-3 gap-2">
            <div className="flex items-center gap-6 justify-start">
              <div className="flex items-center gap-2">
                <div className="bg-[url(/user.jpg)] bg-cover bg-center rounded-lg size-16"></div>
              </div>
              <div className="">
                <h1 className="text-lg font-bold text-primary h-[36px] flex items-center">Travis Page</h1>
                <p className="text-primary-foreground/50 text-sm flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-accent" /> Certified Inspector</p>
              </div>
              
            </div>
            <div className="py-4 flex flex-col items-center justify-center">
              <h1 className="text-[2.5rem] font-light text-primary">525 S State St</h1>
              <p className="text-accent font-medium text-xl">Ann Arbor, MI 48109</p>
            </div>
            
            <div className="py-4 flex flex-col items-end gap-1 justify-center">
              
              <div className="flex items-center gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Type of Report" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <FileText className="w-4 h-4" />
                </Button>
              </div>
              <h3 className="text-primary-foreground/50 text-sm text-right">Generate PDF Report</h3>
            </div>
          </div>
          <h2 className="text-lg font-bold text-accent mt-8 border-b border-secondary/50 pb-2">General Overview</h2>
          <div>
            <h3 className="text-lg font-medium text-secondary my-4">Pictures</h3>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="bg-[url(/house-1.jpg)] bg-cover bg-center bg-muted/50 aspect-video rounded-xl " />
              <div className="bg-[url(/house-2.jpg)] bg-cover bg-center bg-muted/50 aspect-video rounded-xl " />
              <div className="bg-[url(/house-3.jpg)] bg-cover bg-center bg-muted/50 aspect-video rounded-xl " />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-medium text-secondary my-4">Property Details</h3>
              <div className="">
                <p><b>Property Type:</b> Single Family Residence</p>
                <p><b>Year Built:</b> 1950</p>
                <p><b>Square Footage:</b> 1,500</p>
                <p><b>Bedrooms:</b> 3</p>
                <p><b>Bathrooms:</b> 2</p>
                <p><b>Garage:</b> 1</p>
                <p><b>Garage Size:</b> 200 sq. ft.</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-secondary my-4">Inspection Date & Time</h3>
              <div className="">
                <p><b>Date:</b> 10.06.2025</p>
                <p><b>Time:</b> 10:00 AM</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-secondary my-4">Client Information</h3>
              <div className="">
                <p><b>Name:</b> Tyler Durden</p>
                <p><b>Phone:</b> 123-456-7890</p>
                <p><b>Email:</b> tyler@durden.com</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-medium text-secondary my-4">Weather Conditions</h3>
              <div className="">
                <p><b>Temperature:</b> 70°F</p>  
                <p><b>Humidity:</b> 50%</p>
                <p><b>Wind:</b> 10 mph</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-secondary my-4">Occupancy Status</h3>
              <div className="">
                <p><b>Type:</b> Vacant</p>
                <p><b>Description:</b> The property is currently vacant.</p>
              </div>
            </div>
          </div>
          
          <h2 className="text-lg font-bold text-accent mt-8 border-b border-secondary/50 pb-2">Exterior Inspection</h2>
          <div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium text-secondary py-4">Systems Check</h3>
              <div className="flex items-center gap-4 text-primary">
                <div className="inline-flex items-center gap-2 bg-accent-foreground rounded-lg py-2 px-4 text-sm text-primary">
                  <CircleCheck className="w-4 h-4 text-primary" /> Checked
                </div>
                Exterior Structure
              </div>
              <div className="flex items-center gap-4 text-primary">
                <div className="inline-flex items-center gap-2 bg-accent-foreground rounded-lg py-2 px-4 text-sm text-primary">
                  <CircleCheck className="w-4 h-4 text-primary" /> Checked
                </div>
                Roof System
              </div>
              <div className="flex items-center gap-4 text-primary">
                <div className="inline-flex items-center gap-2 bg-accent-foreground rounded-lg py-2 px-4 text-sm text-primary">
                  <CircleCheck className="w-4 h-4 text-primary" /> Checked
                </div>
                Exterior Doors and Windows
              </div>
            </div>
            
            
          </div>
          <div className="">
            <div>
              <h3 className="text-lg font-medium text-secondary my-4">Defects</h3>
              <div className="bg-secondary/25 rounded-lg px-8 pt-6 pb-8">
                <div className="flex items-center gap-4 pb-4">
                  <h5 className="text-base text-primary">Site and Grounds</h5>
                  <MoveRight className="w-4 h-4 text-primary" />
                  <h3 className="text-base font-medium text-red-800">Retaining Walls</h3>
                </div>
                <div className="grid grid-cols-4 gap-8">
                  <div>
                    <h4 className="text-sm font-medium text-muted pb-3">Picture</h4>
                    <div className="bg-[url(/house-1.jpg)] bg-cover bg-center bg-muted/50 aspect-square rounded-lg " />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted pb-2">Description</h4>
                    <p>Description text about something on this page that can be long or short. Description text about something on this page that can be long or short. Description text about something on this page that can be long or short.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted pb-2">Likely Cause</h4>
                    <p>Description text about something on this page that can be long or short. Description text about something on this page that can be long or short. </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted pb-2">Recommendations</h4>
                    <p>Description text about something on this page that can be long or short. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-lg font-bold text-accent mt-8 border-b border-secondary/50 pb-2 pt-4">Interior Inspection</h2>
          <div className="">
            <div>
              <h3 className="text-lg font-medium text-secondary my-4">Systems Check</h3>
              <div className="flex items-center gap-4 text-primary">
                <div className="inline-flex items-center gap-2 bg-accent-foreground rounded-lg py-2 px-4 text-sm text-primary">
                  <CircleCheck className="w-4 h-4 text-primary" /> Checked
                </div>
                Interior Walls, Ceilings, and Floors
              </div>
            </div>
            
          </div>
          <h3 className="text-lg font-medium text-secondary mt-4">Defects</h3>
          <div className="flex flex-col gap-4">
            <div className="bg-secondary/25 rounded-lg px-8 pt-6 pb-8">
              <div className="flex items-center gap-4 pb-4">
                <h5 className="text-base text-primary">Doors and Windows</h5>
                <MoveRight className="w-4 h-4 text-primary" />
                <h3 className="text-base font-medium text-red-800">Retaining Walls</h3>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-muted pb-3">Picture</h4>
                  <div className="bg-[url(/house-1.jpg)] bg-cover bg-center bg-muted/50 aspect-square rounded-lg " />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted pb-2">Description</h4>
                  <p>Description text about something on this page that can be long or short. Description text about something on this page that can be long or short. Description text about something on this page that can be long or short.  Description text about something on this page that can be long or short.</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted pb-2">Likely Cause</h4>
                  <p>Description text about something on this page that can be long or short. Description text about something on this page that can be long or short. Description text about something on this page that can be long or short. </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted pb-2">Recommendations</h4>
                  <p>Description text about something on this page that can be long or short.  Description text about something on this page that can be long or short.</p>
                </div>
              </div>
            </div>
            <div className="bg-secondary/25 rounded-lg px-8 pt-6 pb-8">
              <div className="flex items-center gap-4 pb-4">
                <h5 className="text-base text-primary">Doors and Windows</h5>
                <MoveRight className="w-4 h-4 text-primary" />
                <h3 className="text-base font-medium text-red-800">Retaining Walls</h3>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-muted pb-3">Picture</h4>
                  <div className="bg-[url(/house-1.jpg)] bg-cover bg-center bg-muted/50 aspect-square rounded-lg " />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted pb-2">Description</h4>
                  <p>Description text about something on this page that can be long or short. Description text about something on this page that can be long or short. </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted pb-2">Likely Cause</h4>
                  <p>Description text about something on this page that can be long or short. </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted pb-2">Recommendations</h4>
                  <p>Description text about something on this page that can be long or short.</p>
                </div>
              </div>
            </div><div className="bg-secondary/25 rounded-lg px-8 pt-6 pb-8">
              <div className="flex items-center gap-4 pb-4">
                <h5 className="text-base text-primary">Doors and Windows</h5>
                <MoveRight className="w-4 h-4 text-primary" />
                <h3 className="text-base font-medium text-red-800">Retaining Walls</h3>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-muted pb-3">Picture</h4>
                  <div className="bg-[url(/house-1.jpg)] bg-cover bg-center bg-muted/50 aspect-square rounded-lg " />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted pb-2">Description</h4>
                  <p>Description text about something on this page that can be long or short. Description text about something on this page that can be long or short. Description text about something on this page that can be long or short.  Description text about something on this page that can be long or short.</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted pb-2">Likely Cause</h4>
                  <p>Description text about something on this page that can be long or short. Description text about something on this page that can be long or short. </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted pb-2">Recommendations</h4>
                  <p>Description text about something on this page that can be long or short.  Description text about something on this page that can be long or short.</p>
                </div>
              </div>
            </div>
            
          </div>

          <h2 className="text-lg font-bold text-accent mt-8 border-b border-secondary/50 pb-2 pt-4">Structural Components</h2>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium text-secondary py-4">Systems Check</h3>
              <div className="flex items-center gap-4 text-primary">
                <div className="inline-flex items-center gap-2 bg-accent-foreground rounded-lg py-2 px-4 text-sm text-primary">
                  <CircleCheck className="w-4 h-4 text-primary" /> Checked
                </div>
                Foundation
              </div>
              <div className="flex items-center gap-4 text-primary">
                <div className="inline-flex items-center gap-2 bg-accent-foreground rounded-lg py-2 px-4 text-sm text-primary">
                  <CircleCheck className="w-4 h-4 text-primary" /> Checked
                </div>
                Basement and Crawlspace
              </div>
              <div className="flex items-center gap-4 text-primary">
                <div className="inline-flex items-center gap-2 bg-accent-foreground rounded-lg py-2 px-4 text-sm text-primary">
                  <CircleCheck className="w-4 h-4 text-primary" /> Checked
                </div>
                Attic and Roof Framing
              </div>
            </div>
            
          </div>

          <h2 className="text-lg font-bold text-accent mt-8 border-b border-secondary/50 pb-2">Electrical Systems</h2>
          <div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium text-secondary py-4">Systems Check</h3>
              <div className="flex items-center gap-4 text-primary">
                <div className="inline-flex items-center gap-2 bg-accent-foreground rounded-lg py-2 px-4 text-sm text-primary">
                  <CircleCheck className="w-4 h-4 text-primary" /> Checked
                </div>
                Service Entrance and Panels
              </div>
              <div className="flex items-center gap-4 text-primary">
                <div className="inline-flex items-center gap-2 bg-accent-foreground rounded-lg py-2 px-4 text-sm text-primary">
                  <CircleCheck className="w-4 h-4 text-primary" /> Checked
                </div>
                Branch Circuits, Connected Devices and Fixtures
              </div>
            </div>
            
            
          </div>
          <div className="">
            <div>
              <h3 className="text-lg font-medium text-secondary my-4">Defects</h3>
              <div className="bg-secondary/25 rounded-lg px-8 pt-6 pb-8">
                <div className="flex items-center gap-4 pb-4">
                  <h5 className="text-base text-primary">Site and Grounds</h5>
                  <MoveRight className="w-4 h-4 text-primary" />
                  <h3 className="text-base font-medium text-red-800">Retaining Walls</h3>
                </div>
                <div className="grid grid-cols-4 gap-8">
                  <div>
                    <h4 className="text-sm font-medium text-muted pb-3">Picture</h4>
                    <div className="bg-[url(/house-1.jpg)] bg-cover bg-center bg-muted/50 aspect-square rounded-lg " />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted pb-2">Description</h4>
                    <p>Description text about something on this page that can be long or short. Description text about something on this page that can be long or short. Description text about something on this page that can be long or short.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted pb-2">Likely Cause</h4>
                    <p>Description text about something on this page that can be long or short. Description text about something on this page that can be long or short. </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted pb-2">Recommendations</h4>
                    <p>Description text about something on this page that can be long or short. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
