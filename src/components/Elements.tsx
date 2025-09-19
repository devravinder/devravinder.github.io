import type { JSX } from 'react'
import tw from 'tailwind-styled-components'
import { motion } from "framer-motion";


export const SectionHeader = tw.div`w-full flex flex-col items-center gap-2 px-4`
export const Heading = tw.div`text-3xl text-foreground font-semibold`
export const SubHeading = tw.div`text-base text-muted-foreground`


// BottomToTop
export const DivBt=({children, duration=0.8, delay=0.4, className=''}:{children:JSX.Element, duration?:number, delay?: number, className?:string})=>{
  return  <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration,delay}}
            className={className}
          >{children}</motion.div>
}