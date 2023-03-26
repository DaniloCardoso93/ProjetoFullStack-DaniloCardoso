import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SucessToast(msg: string) {
  toast.success(msg, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
}

export function ErrorToast(msg: string) {
  toast.error(msg, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
}
