import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlubm5yamhxZGpjZWtzcHRiZHRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1Mzg3NTEsImV4cCI6MjA1MTExNDc1MX0.td8efULhAY2tarhjxySvGuyuHIhczEx5W9IubL1k4g4`;
const url = "https://innnrjhqdjceksptbdtf.supabase.co";

export default function uploadMediaToSupabase(file) {
  return new Promise((resolve, reject) => {
    if (file == null) {
      reject("File not added");
      toast.error("File not a added");
    }

    let fileName = file.name;
    const extension = fileName.split(".")[fileName.split(".").length - 1];

    const supabase = createClient(url, key);

    const timestamp = new Date().getTime(); // same images can save
    fileName = timestamp + file.name+ "." + extension;
    
    supabase.storage.from("images").upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      }).then(()=>{
        const publicUrl =  supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
        resolve(publicUrl);
      }).catch((err)=>{
        reject(err);
      })

  });
}













// if (extension != "jpg" && extension != "png") {
//   alert("Please select a jpg or png file");
//   return;
// }


