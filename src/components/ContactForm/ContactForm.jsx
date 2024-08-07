import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

const initialValues = {
  name: "",
  number: "",
};

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Contact name is too short!")
    .max(50, "Contact name is too long!")
    .required("This field is required"),
  number: Yup.string()
    .min(3, "Phone number is too short!")
    .max(50, "Phone number is max too long!")
    .required("This field is required"),
});

export default function ContactForm({ onAdd }) {
  const id = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };
    onAdd(newContact);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label htmlFor={`name-${id}`} className={css.label}>
            Name
          </label>
          <Field type="text" name="name" id={`name-${id}`} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.group}>
          <label htmlFor={`number-${id}`} className={css.label}>
            Number
          </label>
          <Field type="phone" name="number" id={`number-${id}`} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
