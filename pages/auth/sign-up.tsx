import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import TextInput from "@/components/TextInput";
import Head from "next/head";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required(),
      password: Yup.string().min(4).required(),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords not match"
      ),
    }),
    onSubmit: (values) => {},
  });

  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>

      <Navbar />

      <div className="w-[400px] mx-auto py-24">
        <h1 className="font-bold text-5xl text-slate-900 text-center mb-4">
          Sign Up
        </h1>
        <p className="text-sm text-center mb-16">
          Fill the form to create an account.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-10">
            <TextInput
              label="Full Name"
              type="text"
              name="fullName"
              value={formik.values.fullName}
              placeholder="Enter your full name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              hasError={!!formik.errors.fullName}
              errorMessage={formik.errors.fullName}
            />

            <TextInput
              label="Email Address"
              type="text"
              name="email"
              value={formik.values.email}
              placeholder="Enter your email address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              hasError={!!formik.errors.email}
              errorMessage={formik.errors.email}
            />

            <TextInput
              label="Password"
              type="password"
              name="password"
              onBlur={formik.handleBlur}
              value={formik.values.password}
              hasError={!!formik.errors.password}
              errorMessage={formik.errors.password}
              placeholder="Enter your password"
              onChange={formik.handleChange}
            />

            <TextInput
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              hasError={!!formik.errors.confirmPassword}
              errorMessage={formik.errors.confirmPassword}
              placeholder="Enter your password again"
              onChange={formik.handleChange}
            />
          </div>

          <Button type="submit" size="lg" isFullWidth>
            Sign Up
          </Button>
        </form>

        <p className="mt-8 font-sans text-sm text-center">
          Already have an account ?&nbsp;
          <Link className="text-blue-800" href="/auth/sign-up">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
