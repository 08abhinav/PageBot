"use client"

import { useTRPC } from "@/trpc/client"
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Input } from "@/components/ui/input";
   
const Page = () =>{
  const [value, SetValue] = useState("")
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({}))
  return(
    <div className="p-4 max-w-7xl mx-auto">
      
      <Input type="text"
      value={value}
      onChange={(e)=>SetValue(e.target.value)} />
      <button onClick={() => invoke.mutate({value: value})}>
        Invoke Background Job
      </button> 
    </div>)
}

export default Page  