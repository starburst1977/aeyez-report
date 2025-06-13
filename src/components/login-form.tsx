import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      
      <Card className="overflow-hidden p-0 border-1 border-secondary shadow-none">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center relative">
                <div className="flex items-center justify-center mb-8 ">
                  <div className="bg-accent-foreground rounded-full p-4 border-2 border-primary relative z-10">
                    <img
                      src="/aeyes-logo.svg"
                      alt="Image"
                        className="w-8 h-8"
                      />
                  </div>
                  <div className="absolute top-10 right-22">
                    <img
                      src="/arrow.svg"
                      alt="Arrow"
                        className="w-12 h-12 z-10"
                      />
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-primary">Welcome back</h1>
                <p className="text-muted text-balance">
                  Login to your Aeyes account
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm text-muted-foreground hover:text-muted underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Link
                href="/"
                className="rounded-lg mt-2 bg-primary text-secondary-foreground w-full py-2 text-center"
              >
                Login
              </Link>
              
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/house-1.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-black/30 *:[a]:hover:text-secondary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#" className="text-primary hover:text-primary-foreground">Terms of Service</a>{" "}
        and <a href="#" className="text-primary hover:text-primary-foreground">Privacy Policy</a>.
      </div>
    </div>
  )
}
