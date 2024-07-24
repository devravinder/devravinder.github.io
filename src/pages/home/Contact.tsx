import emailjs from "@emailjs/browser";
import { Button, SectionHeading, SectionSubText } from "components/Elements";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

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

export default function Contact() {
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

  const [loading, setLoading] = useState(false);

  const sendEmail = async (data: Message) => {
    const res = await emailjs.send(
      credentilas.serviceId,
      credentilas.templateId,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.text,
      },
      credentilas.publicKey,
    );

    return res;
  };

  const onSubmit = async (data: Message) => {
    setLoading(true);
    clearErrors();
    try {
      await sendEmail(data);
    } catch (error) {
      setLoading(false);
      setError("root.serverError", {
        type: "500",
        message: "Something went wrong. Please try again later.",
      });
      return;
    }
    setLoading(false);
    reset();
    setError("root.serverError", {
      type: "200",
      message: "Message sent successfully. Thank you!",
    });
  };
  return (
    <div>
      <div className="flex flex-col gap-4 bg-black-100 p-8 rounded-2xl">
        <SectionSubText>Get in touch</SectionSubText>
        <SectionHeading>Contact.</SectionHeading>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-3 flex-wrap">
              <label className="flex flex-col gap-2">
                <span className="text-white font-medium">Your Name</span>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="What's your good name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
                <ErrorMessage
                  errors={errors}
                  name="name"
                  render={({ message }) => (
                    <p className="text-sm px-6 text-red-500">{message}</p>
                  )}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white font-medium">Your email</span>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="What's your email address?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                    <p className="text-sm px-6 text-red-500">{message}</p>
                  )}
                />
              </label>
            </div>
            <div className="flex-grow">
              <label className="flex flex-col gap-2">
                <span className="text-white font-medium">Your Message</span>
                <textarea
                  rows={5}
                  {...register("text", { required: "Message is required" })}
                  placeholder="What you want to say?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
                <ErrorMessage
                  errors={errors}
                  name="text"
                  render={({ message }) => (
                    <p className="text-sm px-6 text-red-500">{message}</p>
                  )}
                />
              </label>
            </div>
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

          <Button disabled={loading} type="submit" className="self-end">
            {loading ? "Sending..." : "Send"}
          </Button>
        </form>
      </div>
    </div>
  );
}
