
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ReviewTab from "./ReviewTab";




export function MainTab({description, productId}) {
   
  return (
   <div className="w-full md:ring-0 shadow-md md:ring-slate-200 min-h-[40vh] pb-9 ">

<Tabs defaultValue="description" className=" flex flex-col  justify-center items-center">
  <TabsList className='md:p-6 '>
    <TabsTrigger className='uppercase text-xs md:text-sm md:font-semibold roboto-light md:px-4 md:py-3' value="description">description</TabsTrigger>
    <TabsTrigger className='uppercase text-xs md:text-sm md:font-semibold roboto-light md:px-4 md:py-3' value="customer review"> reviews</TabsTrigger>
    <TabsTrigger className='uppercase text-xs md:text-sm md:font-semibold roboto-light md:px-4 md:py-3' value="Shipping & returns">Shipping & return</TabsTrigger>
  </TabsList>
  <TabsContent value="description" className=' p-2 md:px-8  roboto-light text-xs md:text-sm'>{description}</TabsContent>
  <TabsContent value="customer review" className=' p-2 md:px-8  roboto-light text-xs md:text-sm'><ReviewTab productId={productId}/></TabsContent>
  <TabsContent value="Shipping & returns"> </TabsContent>
</Tabs>

</div>

  );
}
