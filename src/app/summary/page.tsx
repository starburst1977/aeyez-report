import { AppSidebar } from "@/components/app-sidebar-sum"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import Image from "next/image"
import { FileText, MoveRight } from "lucide-react"
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
                <div className="relative rounded-lg size-16 overflow-hidden">
                  <Image
                    src={`${process.env.NODE_ENV === 'production' ? '/aeyez-report' : ''}/user.jpg`}
                    alt="User profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="">
                <h1 className="text-lg font-bold text-primary flex items-center leading-6">Travis Page</h1>
                <p className="text-primary text-sm flex items-center gap-2">Certified Inspector</p>
                <p className="text-primary-foreground/50 text-sm flex items-center gap-2">Agent: <b>Ann Paris</b></p>
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
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex w-full flex-col items-center gap-2 bg-secondary/25 rounded-xl py-6 px-6">
                <div className="text-primary text-2xl font-bold">69</div>
                <div className="text-primary-foreground/50 text-sm">Items Inspected</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex w-full flex-col items-center gap-2 bg-blue-300/25 rounded-xl py-6 px-6">
                <div className="text-blue-800 text-2xl font-bold">7</div>
                <div className="text-blue-800/50 text-sm">Minor Defects</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex w-full flex-col items-center gap-2 bg-red-300/25 rounded-xl py-6 px-6">
                <div className="text-red-800 text-2xl font-bold">8</div>
                <div className="text-red-800/50 text-sm">Major Defects</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-secondary my-4">Pictures</h3>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NODE_ENV === 'production' ? '/aeyez-report' : ''}/house-1.jpg`}
                  alt="House exterior"
                  fill
                  className="object-cover bg-muted/50"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NODE_ENV === 'production' ? '/aeyez-report' : ''}/house-2.jpg`}
                  alt="House exterior"
                  fill
                  className="object-cover bg-muted/50"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NODE_ENV === 'production' ? '/aeyez-report' : ''}/house-3.jpg`}
                  alt="House exterior"
                  fill
                  className="object-cover bg-muted/50"
                />
              </div>
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

          <h2 className="text-lg font-bold text-red-800 mt-8 border-b border-secondary/50 pb-2">Major Defects</h2>
          
          <div className="">
            <div className="flex flex-col gap-4">
              
              <div className="flex flex-col gap-2 bg-red-300/25 rounded-lg py-4 px-6 text-primary">
                <div className="flex items-center gap-4 text-primary">
                  GFCIs & Electrical
                  <MoveRight className="w-4 h-4 text-primary" />
                  <h3 className=" text-primary flex items-center gap-2 font-bold">No power present</h3>
                  <MoveRight className="w-4 h-4 text-primary" />
                  <h3 className=" text-red-800 flex items-center gap-2 font-bold">Major Defect</h3>
                </div>
                <div className="flex flex-col gap-4">
                  
                  <div className="flex flex-col">
                    <h4 className="text-sm font-light text-red-800/60 pt-2">Description</h4>
                    <div className="text-base text-primary">At the time of inspection I observed no power present. Was unable to test GFCI.</div>
                    <h4 className="text-sm font-light text-red-800/60 pt-2">Recommendations</h4>
                    <div className="text-base text-primary">recommend evaluation or replacement of faulty GFCI.</div>
                  </div>
                  <div className="flex gap-4 h-24">
                    <div className="relative aspect-3/2 rounded-lg overflow-hidden">
                      <Image
                        src={`${process.env.NODE_ENV === 'production' ? '/aeyez-report' : ''}/house-19.jpg`}
                        alt="Defect photo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-3/2 rounded-lg overflow-hidden">
                      <Image
                        src={`${process.env.NODE_ENV === 'production' ? '/aeyez-report' : ''}/house-20.jpg`}
                        alt="Defect photo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-3/2 rounded-lg overflow-hidden">
                      <Image
                        src={`${process.env.NODE_ENV === 'production' ? '/aeyez-report' : ''}/house-21.jpg`}
                        alt="Defect photo"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 bg-red-300/25 rounded-lg py-4 px-6 text-primary">
                <div className="flex items-center gap-4 text-primary">
                  Railings, Guards & Handrails
                  <MoveRight className="w-4 h-4 text-primary" />
                  <h3 className=" text-primary flex items-center gap-2 font-bold">Missing handrail</h3>
                  <MoveRight className="w-4 h-4 text-primary" />
                  <h3 className=" text-red-800 flex items-center gap-2 font-bold">Major Defect</h3>
                </div>
                <div className="flex flex-col gap-4">
                  
                  <div className="flex flex-col">
                    <h4 className="text-sm font-light text-red-800/60 pt-2">Description</h4>
                    <div className="text-base text-primary">I observed a missing handrail. </div>
                    <h4 className="text-sm font-light text-red-800/60 pt-2">Recommendations</h4>
                    <div className="text-base text-primary">There is more than one step here, and I recommend installing a handrail for safety. </div>
                  </div>
                  <div className="flex gap-4 h-24">
                    <div className="relative aspect-3/2 rounded-lg overflow-hidden">
                      <Image
                        src={`${process.env.NODE_ENV === 'production' ? '/aeyez-report' : ''}/house-22.jpg`}
                        alt="Defect photo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-lg font-bold text-blue-800 mt-8 border-b border-secondary/50 pb-2">Minor Defects</h2>
          
          <div className="">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 bg-blue-300/25 rounded-lg py-4 px-6 text-primary">
                <div className="flex items-center gap-4 text-primary">
                  Eaves, Soffits & Fascia
                  <MoveRight className="w-4 h-4 text-primary" />
                  <h3 className=" text-primary flex items-center gap-2 font-bold">Damage observed at fascia</h3>
                  <MoveRight className="w-4 h-4 text-primary" />
                  <h3 className=" text-blue-800 flex items-center gap-2 font-bold">Minor Defect / Maintenance</h3>
                </div>
                <div className="flex flex-col gap-4">
                  
                  <div className="flex flex-col">
                    <h4 className="text-sm font-light text-blue-800/60 pt-2">Description</h4>
                    <div className="text-base text-primary">I observed indications that one or more areas of the fascia were damaged. </div>
                    <h4 className="text-sm font-light text-blue-800/60 pt-2">Recommendations</h4>
                    <div className="text-base text-primary">Correction and further evaluation is recommended.</div>
                  </div>
                  <div className="flex gap-4 h-24">
                    <div className="relative aspect-3/2 rounded-lg overflow-hidden">
                      <Image
                        src={`${process.env.NODE_ENV === 'production' ? '/aeyez-report' : ''}/house-17.jpg`}
                        alt="Defect photo"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 bg-blue-300/25 rounded-lg py-4 px-6 text-primary">
                <div className="flex items-center gap-4 text-primary">
                  Wall-Covering, Flashing & Trim
                  <MoveRight className="w-4 h-4 text-primary" />
                  <h3 className=" text-primary flex items-center gap-2 font-bold">Damaged trim</h3>
                  <MoveRight className="w-4 h-4 text-primary" />
                  <h3 className=" text-blue-800 flex items-center gap-2 font-bold">Minor Defect / Maintenance</h3>
                </div>
                <div className="flex flex-col gap-4">
                  
                  <div className="flex flex-col">
                    <h4 className="text-sm font-light text-blue-800/60 pt-2">Description</h4>
                    <div className="text-base text-primary">I observed Damaged trim at the time of inspection. </div>
                    <h4 className="text-sm font-light text-blue-800/60 pt-2">Recommendations</h4>
                    <div className="text-base text-primary">Recommend repair.</div>
                  </div>
                  <div className="flex gap-4 h-24">
                    <div className="relative aspect-3/2 rounded-lg overflow-hidden">
                      <Image
                        src={`${process.env.NODE_ENV === 'production' ? '/aeyez-report' : ''}/house-18.jpg`}
                        alt="Defect photo"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <h2 className="text-lg font-bold text-secondary mt-8 border-b border-secondary/50 pb-2">Limitations</h2>
          <div>
            <div className="flex flex-col gap-2">
            
              <div className="flex flex-col gap-2 bg-secondary/25 rounded-lg py-4 px-6 text-primary">
                <div className="flex items-center gap-4 text-primary">
                  GFCIs & Electrical
                  <MoveRight className="w-4 h-4 text-primary" />
                  <h3 className=" text-green-800 flex items-center gap-2 font-bold">Inspection Was Restricted</h3>
                </div>
                
                <div className="text-base text-muted">I was unable to inspect every electrical component or proper installation of the GFCI system according to modern code. A licensed electrician or township building code inspector could perform that type of test, which is beyond the scope of my visual-only home inspection. I inspected the electrical system as much as I could according to the Home Inspection Standards of Practice.</div>
              </div>
              <div className="flex flex-col gap-2 bg-secondary/25 rounded-lg py-4 px-6 text-primary">
                <div className="flex items-center gap-4 text-primary">
                  Wall-Covering, Flashing & Trim
                  <MoveRight className="w-4 h-4 text-primary" />
                  <h3 className=" text-green-800 flex items-center gap-2 font-bold">Unable to Inspect Everything</h3>
                </div>
                <div className="flex flex-col gap-4">
                  
                  <div className="flex flex-col gap-4">
                    
                    <div className="text-base text-muted">I did not inspect all of the exterior wall-covering material.  A home inspection is not an exhaustive evaluation.  My inspection of the exterior was limited.  I did not reach and access closely every part of the exterior wall-covering.</div>
                  </div>
                  <div className="flex gap-4 h-24">
                    <div className="relative aspect-3/2 rounded-lg overflow-hidden">
                      <Image
                        src={`${process.env.NODE_ENV === 'production' ? '/aeyez-report' : ''}/house-5.jpg`}
                        alt="Defect photo"
                        fill
                        className="object-cover"
                      />
                    </div>
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
