import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Contact.module.css";

type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = ({ name, message, subject }) => {
    window.location.href = `mailto:talalajmi98@gmail.com?subject=${subject}&body=Hi, my name is ${name}. ${message}`;
  };

  return (
    <div className={styles.content}>
      <h3 className="sectionName">Contact</h3>

      <div className={styles.column}>
        <h4 className={styles.text}>
          I have got just what you need.{" "}
          <span className={styles.underlineText}>Let&apos;s Talk.</span>
        </h4>

        <div className="space-y-5">
          <div className={styles.row}>
            <PhoneIcon className={styles.icon} />
            <p className={styles.iconText}>+968 92750800</p>
          </div>

          <div className={styles.row}>
            <MapPinIcon className={styles.icon} />
            <p className={styles.iconText}>Muscat, Oman</p>
          </div>

          <div className={styles.row}>
            <EnvelopeIcon className={styles.icon} />
            <p className={styles.iconText}>talalajmi98@gmail.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputRow}>
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
          <button type="submit" className={styles.formButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
