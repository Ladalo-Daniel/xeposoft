import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export function AlertDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Admin</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
         <div>Opps <br /> Only Admin can access this page!</div>
      </DialogContent>
    </Dialog>
  )
}
