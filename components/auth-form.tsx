/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import CustomInput from "./custom-input";

const AuthForm = ({ type, signInForm }: { type?: string; signInForm?: boolean }) => {
  return (
    <div className="flex min-h-[80vh] min-w-[75%] sm:w-full flex-col justify-center lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {type === "signup" ? "Nouveau compte? " : "Déjà un compte? Connexion"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6">
          {type === "signup" && (
            <div className="grid sm:grid-cols-2 gap-4">
              <CustomInput
                htmlFor="firstName"
                label="Prénom"
                inputType="text"
                autoComplete="First Name"
              />
              <CustomInput
                htmlFor="lastName"
                label="Nom"
                inputType="text"
                autoComplete="Last Name"
              />
            </div>
          )}
          <CustomInput htmlFor="email" label="Email" inputType="email" autoComplete="email" />

          <CustomInput
            type="password"
            autoComplete="current-password"
            inputType="password"
            htmlFor="password"
            label="Mot de passe"
            signInForm={signInForm}
          />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </form>

        {type === "signup" ? (
          <>
            <p className="mt-10 text-center text-sm text-gray-500">
              Déjà client?{" "}
              <Link
                href={"/sign-in"}
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline underline-offset-2">
                Se connecter
              </Link>
            </p>
          </>
        ) : (
          <>
            <p className="mt-10 text-center text-sm text-gray-500">
              Nouveau client?{" "}
              <Link
                href={"/sign-up"}
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline underline-offset-2">
                Créer un compte
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
export default AuthForm;
