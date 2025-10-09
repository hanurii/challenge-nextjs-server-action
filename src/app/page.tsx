import LogInForm from "../../components/LogInForm";
import { FormResponse } from "../../types/response";

export interface LogInFormData {
  email: string;
  username: string;
  password: string;
}

export default function Home() {
  async function onSubmit(prevState: FormResponse, formData: FormData) {
    "use server";

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const password = formData.get("password");

    if (password !== "12345") {
      return { errorCode: null, errorMsg: "Wrong password ", result: null };
    } else {
      return { errorCode: null, errorMsg: null, result: "OK" };
    }
  }

  return (
    <div className="">
      <img
        className="w-12 h-12 block my-0 mx-auto mb-10 mix-blend-multiply"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx6yr7sXCI_7Qz0uOtVA54Hm7Ghfyif-RdzdMaPIRMPKYQ7gR0"
        alt="image"
      />

      <LogInForm action={onSubmit} />
    </div>
  );
}
