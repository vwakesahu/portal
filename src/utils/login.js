import { setUser } from "@/redux/slices/userSlice";
import axios from "axios";
import { toast } from "sonner";

export const handleLogin = async (formData, dispatchFunction) => {
  let success = false;

  if (formData.erpID !== 0 && formData.erpPassword.length > 0) {
    try {
      const { data } = await axios.post("/api/auth/signin", formData);
      console.log(data)
      if (data.success) {
        const { user } = data;
        const userSlice = { authenticated: data.success, ...user };
        dispatchFunction(setUser(userSlice));
        toast("Logged in.");
        success = true;
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        "An error occurred while logging in. Please try again later."
      );
    }
  }
  console.log(success);

  return success;
};
