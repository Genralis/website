import ContactForm from "./components/ContactForm";
import ReachOutInfo from "./components/reach-out-info";
import SubscribeBox from "../../components/SubscribeBox";
import PageHeading from "../../components/PageHeading";

export default function ContactPage() {
  return (
    <div className="page-container">
      <PageHeading
        heading="Get in Touch"
        subheading="We're here to help you with any questions or inquiries."
        description="Whether you're looking for more information about our programs, want to collaborate, or have any other questions, feel free to reach out!"
      />

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto w-full">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        <div className="space-y-8">
          {/* Newsletter subscription */}
          <SubscribeBox />

          {/* Reach out info */}
          <ReachOutInfo />
        </div>
      </section>
    </div>
  );
}
