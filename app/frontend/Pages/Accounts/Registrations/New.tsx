import * as React from "react"

import { Link, useForm } from "@inertiajs/inertia-react"
import { account_registration_path, new_account_session_path } from "@/routes"

import FlashMessages from "@/components/FlashMessages"
import Input from "@/components/Input"
import Unauthenticated from "@/Layouts/Unauthenticated"

export default function New() {
  const { data, setData, post, processing, errors, transform } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  })

  function submit(e) {
    e.preventDefault()
    transform(() => ({
      account: { ...data },
    }))
    post(account_registration_path())
  }

  return (
    <Unauthenticated>
      <>
        <FlashMessages />
        <div>
          <h2>Create an account.</h2>
          <p>
            Already have an account?{" "}
            <Link href={new_account_session_path()}>Sign in.</Link>
          </p>
        </div>
        <form onSubmit={submit}>
          <Input
            label="Name"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            type="text"
            name="name"
            id="name"
            errors={errors.name}
          />
          <Input
            label="Email Address"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            type="email"
            name="email"
            id="email"
            errors={errors.email}
          />
          <Input
            label="Password"
            value={data.password}
            onChange={(e) => setData("password", e.target.value)}
            type="password"
            name="password"
            id="password"
            errors={errors.password}
          />

          <Input
            label="Confirm password"
            value={data.password_confirmation}
            onChange={(e) => setData("password_confirmation", e.target.value)}
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            errors={errors.password_confirmation}
          />

          <button type="submit" disabled={processing}>
            Sign up
          </button>
        </form>
      </>
    </Unauthenticated>
  )
}
