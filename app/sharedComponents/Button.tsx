import { Button } from "@/components/ui/button"


interface buttonProps {
    onclick : ()=>void;
    label : string;
}
export function ButtonGhost({onclick , label}: buttonProps) {
  return <Button variant="ghost" className="cursor-pointer" onClick={onclick}>{label}</Button>
}