import AppState from "@/app/context/AppState";
import BusinessDetailsForm from "./BusinessDetailsForm";

export default function page() {
  return (
    <AppState>
        <BusinessDetailsForm />
    </AppState>
  )
}
