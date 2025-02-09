import { createUploadthing } from "uploadthing/next";

 
const f = createUploadthing();
 

 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  categoryImageUploader: f({ image: { maxFileSize: "4MB" } })
   
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
  
 
      console.log("file url", file.url);
      return { uploadedBy:"sheyman" };
 
    }),
    //for products
    productImageUploader: f({ image: { maxFileSize: "4MB" } })
   
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
  
 
      console.log("file url", file.url);
      return { uploadedBy:"sheyman" };
 
    }),
     //for multiple products
     productMultipleImageUploader: f({ image: { maxFileSize: "8MB", maxFileCount:4 } })
   
     .onUploadComplete(async ({ metadata, file }) => {
       // This code RUNS ON YOUR SERVER after upload
   
  
       console.log("file url", file.url);
       return { uploadedBy:"sheyman" };
  
     }),
    
 
    staffImageUploader: f({ image: { maxFileSize: "4MB" } })
   
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
  
 
      console.log("file url", file.url);
      return { uploadedBy:"sheyman" };
 
    }),
    bannerImageUploader: f({ image: { maxFileSize: "4MB" } })
   
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
  
 
      console.log("file url", file.url);
      return { uploadedBy:"sheyman" };
 
    }),
} 
