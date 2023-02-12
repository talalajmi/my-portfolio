import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = ({ name, message, subject }) => {
    window.location.href = `mailto:talalajmi98@gmail.com?subject=${subject}&body=Hi, my name is ${name}. ${message}`;
  };

  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-center text-4xl font-semibold">
          I have got just what you need.{" "}
          <span className="underline decoration-[#A21717]/50">
            Let&apos;s Talk.
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#A21717]" />
            <p className="text-2xl">+968 92750800</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#A21717]" />
            <p className="text-2xl">Muscat, Oman</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#A21717]" />
            <p className="text-2xl">talalajmi98@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col space-y-2"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="contactInput"
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="contactInput"
            />
          </div>
          <input
            {...register("subject")}
            type="text"
            placeholder="Subject"
            className="contactInput"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button
            type="submit"
            className="rounded-md bg-[#A21717] py-5 px-10 text-lg font-bold text-black transition duration-200 ease-in-out hover:scale-105 hover:bg-[#A21717]/80 active:scale-75"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
