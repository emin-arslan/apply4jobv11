import { toast } from "react-toastify";
export function tostMessageCheck(

  data = { body: String, isSuccess: Boolean, time: Number }
) {
  if(data.type){
    data = data.data;
  }
  const { body = "Bilinmeyen değer.", isSuccess = false, time = 1000 } = data;
  toast(body, {
    autoClose: time,
    type: isSuccess ? "success" : "error",
    theme: "colored",
  });
}
