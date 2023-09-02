import BusinessDetailsForm from "./components/business-details-form/BusinessDetailsForm";
import AppState from "./context/AppState";

export default function Home() {
  return (
    <AppState>
      <div className="container p-[2rem] h-[100vh]">
        <BusinessDetailsForm />
      </div>
    </AppState>
  )
}
