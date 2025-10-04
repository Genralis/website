import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../ui/Button";
import TextInputController from "./TextInputController";
import TextareaController from "./TextAreaController";
import SelectController from "./SelectController";
import {
  contactSchema,
  type ContactFormValues,
  TOPIC_OPTIONS,
} from "../schema/contactForm";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  emailJsConfigured,
} from "../../../utils/emailJSsonfig";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", topic: "General", message: "" },
    mode: "onSubmit",
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      setStatus("idle");
      setMsg("");

      // Honeypot: if a bot fills this hidden field, abort quietly
      const honeypot = (
        document.getElementById("hp_field") as HTMLInputElement | null
      )?.value;
      if (honeypot) {
        setStatus("success"); // pretend success to avoid probing
        setMsg("Thanks! We’ll be in touch soon.");
        reset();
        return;
      }

      if (!emailJsConfigured) {
        throw new Error("EmailJS env vars missing");
      }

      // EmailJS provides 200 emails/month
      // Basin provides 50/month but with spam protection and other features

      // The keys here must match your EmailJS template variable names
      const params = {
        name: values.name,
        email: values.email,
        topic: values.topic,
        message: values.message,
        // we need to create emailJS account and template to use this
        // to_email: "genralis.ai@gmail.com",
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });

      setStatus("success");
      setMsg(`Thanks, ${values.name}! We'll reply at ${values.email} soon.`);
      reset();
    } catch {
      setStatus("error");
      setMsg("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <div
      className="rounded-[12px] border border-(--container-border)
     bg-(--container-bg) p-6 md:p-8"
    >
      <h2 className="text-preset-3 mb-4">Send us a message</h2>

      <div className="my-2 h-[2rem] rounded-[12px] ">
        {status === "success" && (
          <div
            className="rounded-[12px] border border-green-300 bg-green-50 px-2 py-1 text-green-900 text-preset-5"
            role="status"
            aria-live="polite"
          >
            {msg}
          </div>
        )}
        {status === "error" && (
          <div
            className="rounded-[12px]  border border-red-300 bg-red-50 px-2 py-1 text-red-900 text-preset-5"
            role="alert"
            aria-live="polite"
          >
            {msg}
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <TextInputController
          control={control}
          name="name"
          label="Name *"
          placeholder="Your full name"
          infoText="Please use your university name if applicable."
        />

        <TextInputController
          control={control}
          name="email"
          type="email"
          label="Email *"
          placeholder="you@university.edu"
          infoText="Please use your university email if applicable."
        />

        <div className="md:col-span-2">
          <SelectController
            control={control}
            name="topic"
            label="Topic *"
            options={TOPIC_OPTIONS.map((t: string) => ({ value: t, label: t }))}
          />
        </div>

        <div className="md:col-span-2">
          <TextareaController
            control={control}
            name="message"
            label="Message *"
            placeholder="Tell us how we can help… (20-1000 chars)"
            rows={9}
          />
        </div>

        <p className="text-preset-6 text-(--input-field-info-text) my-2.25">
          We only use your info to respond.
        </p>

        <div className="md:col-span-2 flex items-center gap-3">
          <Button variant="primary" disabled={isSubmitting}>
            {isSubmitting ? `Sending ...` : "Send message"}
          </Button>
          <Button
            variant="outlined"
            onClick={() => reset()}
            disabled={isSubmitting}
          >
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
}
