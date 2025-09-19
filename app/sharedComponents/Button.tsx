import { Button } from "@/components/ui/button"


interface buttonProps {
    onclick : ()=>void
}
export function ButtonGhost({onclick}: buttonProps) {
  return <Button variant="ghost" className="cursor-pointer" onClick={onclick}>Add user</Button>
}