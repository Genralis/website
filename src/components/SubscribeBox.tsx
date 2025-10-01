import SubstackEmbed from "./SubStackEmbed";

export default function SubscribeBox() {
  return (
    <div className="bg-white w-full">
      <p className="text-preset-6 [color:var(--subheading-text-1)] mt-1">
        Get event announcements & project opportunities. 1–2 emails/month.
      </p>

      <div className="mt-4">
        <SubstackEmbed src="https://genralis.substack.com/embed" />
      </div>
    </div>
  );
}

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   newsletterSchema,
//   type NewsletterValues,
// } from "../pages/Contact/schema/newsletter";
// import TextInputController from "../pages/Contact/components/TextInputController";
// import Button from "../ui/Button";
// import { useState } from "react";

// export default function SubscribeBox() {
//   const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

//   const {
//     control,
//     handleSubmit,
//     reset,
//     formState: { isSubmitting },
//   } = useForm<NewsletterValues>({
//     resolver: zodResolver(newsletterSchema),
//     defaultValues: { name: "", email: "" },
//     mode: "onBlur",
//   });

//   const onSubmit = async (values: NewsletterValues) => {
//     try {
//       setStatus("idle");
//       // TODO: call your API, e.g. /api/newsletter/subscribe
//       await new Promise((r) => setTimeout(r, 400)); // demo
//       console.log(values);
//       setStatus("success");
//       reset();
//     } catch {
//       setStatus("error");
//     }
//   };

//   return (
//     <div
//       className="
//       rounded-[12px] h-fit border border-(--container-border)
//       bg-(--container-bg) p-6 md:p-8 w-full
//     "
//     >
//       <p className="text-preset-6 text-[var(--muted-text)] mt-1">
//         Get event announcements & project opportunities. 1-2 emails/month.
//       </p>

//       <div className="mb-2 h-[1.5rem] rounded-[12px]">
//         {status === "success" && (
//           <div
//             className="border border-green-300 bg-green-50
//         px-4 py-2 text-green-900"
//             role="status"
//             aria-live="polite"
//           >
//             You're subscribed to club activities! Please check your inbox.
//           </div>
//         )}
//         {status === "error" && (
//           <div
//             className="border border-red-300 bg-red-50
//         px-4 py-2 text-red-900"
//             role="alert"
//             aria-live="polite"
//           >
//             Couldn't subscribe right now. Please try again later.
//           </div>
//         )}
//       </div>

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         noValidate
//         className="grid grid-cols-1 gap-1"
//       >
//         {/* <TextInputController
//           control={control}
//           name="name"
//           type="text"
//           label="Name *"
//           placeholder="Your Name"
//         /> */}
//         <TextInputController
//           control={control}
//           name="email"
//           type="email"
//           label="Email *"
//           placeholder="you@university.edu"
//         />

//         <div className="flex items-center gap-3">
//           <Button variant="warning" disabled={isSubmitting}>
//             {isSubmitting ? "Joining..." : "Join Club"}
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }
