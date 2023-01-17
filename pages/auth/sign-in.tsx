import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import TextInput from "@/components/TextInput";
import Head from "next/head";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required(),
      password: Yup.string().min(4).required(),
    }),
    onSubmit: (values) => {},
  });

  return (
    <div>
      <Head>
        <title>Sign In</title>
      </Head>

      <Navbar />

      <div className="w-[400px] mx-auto py-24">
        <h1 className="font-bold text-5xl text-slate-900 text-center mb-4">
          Sign In
        </h1>
        <p className="text-sm text-center mb-16">
          Fill the form to sign in to your account.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-10">
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

            <div className="h-4" />
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
          </div>

          <Button type="submit" size="lg" isFullWidth>
            Sign In
          </Button>
        </form>

        <p className="mt-8 font-sans text-sm text-center">
          Don&lsquo;t have an account ?&nbsp;
          <Link className="text-blue-800" href="/auth/sign-up">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
