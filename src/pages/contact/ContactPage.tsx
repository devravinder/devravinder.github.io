import { Heading, SectionHeader, SubHeading } from "@/components/Elements";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import emailjs from "@emailjs/browser";
import { useTransition } from "react";

type Message = {
  name: string;
  email: string;
  text: string;
};

const credentilas = {
  serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
};

export default function ContactPage() {
  const [isLoading, startTransition] = useTransition();

  const {
    register,
    reset,
    formState: { errors },
    setError,
    clearErrors,
    handleSubmit,
  } = useForm<Message>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      text: "",
    },
  });

  const sendEmail = async (data: Message) => {
    const res = await emailjs.send(
      credentilas.serviceId,
      credentilas.templateId,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.text,
      },
      credentilas.publicKey
    );

    return res;
  };

  const onSubmit = async (data: Message) => {
    startTransition(async () => {
      clearErrors();
      try {
        console.log({data})
        await sendEmail(data);
      } catch (error) {
        console.log({error})
        setError("root.serverError", {
          type: "500",
          message: "Something went wrong. Please try again later.",
        });
        return;
      }
      reset();
      setError("root.serverError", {
        type: "200",
        message: "Message sent successfully. Thank you!",
      });
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col gap-14"
    >
      <SectionHeader>
        <Heading>Get in Touch</Heading>
        <SubHeading>
          Always happy to discuss technologies, ideas, and opportunities.
        </SubHeading>
      </SectionHeader>
      <div className="flex flex-col min-w-xs p-4 rounded-md border">
        <form onSubmit={handleSubmit(onSubmit)} className="py-4">
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="John Doe"
                required
              />
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => (
                  <p className="text-sm px-6 text-red-500">{message}</p>
                )}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="m@example.com"
                required
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <p className="text-sm px-6 text-red-500">{message}</p>
                )}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="text">Message</Label>
              <Textarea
                id="text"
                {...register("text", { required: "Message is required" })}
                placeholder="write message"
                required
              />
              <ErrorMessage
                  errors={errors}
                  name="text"
                  render={({ message }) => (
                    <p className="text-sm px-6 text-red-500">{message}</p>
                  )}
                />
            </div>
            {errors.root?.serverError?.type === "200" ? (
            <p className="text-sm px-6 text-green-500">
              {errors.root?.serverError?.message}
            </p>
          ) : (
            <p className="text-sm px-6 text-red-500">
              {errors.root?.serverError?.message}
            </p>
          )}

            <Button disabled={isLoading} type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
