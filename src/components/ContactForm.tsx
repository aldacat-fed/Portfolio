import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
type FormErrors = Partial<Record<keyof FormValues, string>>;

const empty: FormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};
const fields: { name: keyof FormValues; label: string; type: string }[] = [
  { name: "name", label: "Namn", type: "text" },
  { name: "email", label: "E-post", type: "email" },
  { name: "phone", label: "Telefon", type: "tel" },
  { name: "subject", label: "Ämne", type: "text" },
];

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(empty); // ett objekt för alla fält
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: undefined }); // rensa felet när man skriver
    setSent(false);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next: FormErrors = {};
    (Object.keys(values) as (keyof FormValues)[]).forEach((key) => {
      if (!values[key].trim()) next[key] = "Fältet är obligatoriskt";
    });
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true); // inget riktigt mejl skickas
      setValues(empty);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {fields.map((f) => (
        <div className="field" key={f.name}>
          <label htmlFor={f.name}>{f.label}</label>
          <input
            id={f.name}
            name={f.name}
            type={f.type}
            value={values[f.name]}
            onChange={handleChange}
            aria-invalid={!!errors[f.name]}
          />
          {errors[f.name] && <span className="error">{errors[f.name]}</span>}
        </div>
      ))}
      <div className="field full">
        <label htmlFor="message">Meddelande</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
        />
        {errors.message && <span className="error">{errors.message}</span>}
      </div>
      <button className="btn" type="submit">
        Skicka
      </button>
      {sent && (
        <p className="success" role="status">
          ✓ Tack! Ditt mejl är skickat.
        </p>
      )}
    </form>
  );
}