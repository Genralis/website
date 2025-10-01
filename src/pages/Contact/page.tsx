import ContactForm from "./components/ContactForm";
import ReachOutInfo from "./components/reach-out-info";
import SubscribeBox from "../../components/SubscribeBox";

export default function ContactPage() {
  return (
    <div className="page-container">
      <header className="mx-auto text-center">
        <h1 className="font-semibold text-preset-7 text-(--heading-text)">
          Contact
        </h1>
        <p className="mt-4 text-preset-2 text-(--subheading-text-1)">
          Questions, partnerships, or speaking at our events? Send us a message
          - our team will get back soon.
        </p>
      </header>

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
