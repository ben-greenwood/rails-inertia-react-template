import * as React from "react"

import { Link, useForm } from "@inertiajs/react"
import { account_registration_path, new_account_session_path } from "@/routes"

import { Button } from "@/components/ui/button"
import { FormField } from "@/components/ui/form_field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Unauthenticated from "@/layouts/Unauthenticated"

export default function New() {
  const { data, setData, post, processing, errors, transform } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  })

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    transform(() => ({
      account: { ...data },
    }))
    post(account_registration_path())
  }

  return (
    <Unauthenticated>
      <>
        <div>
          <h2>Create an account.</h2>
          <p>
            Already have an account?{" "}
            <Link href={new_account_session_path()}>Sign in.</Link>
          </p>
        </div>
        <form onSubmit={submit}>
          <FormField
            className="grid w-full max-w-sm items-center gap-1.5"
            error={errors.name}
          >
            <Label htmlFor="name">Full Name</Label>
            <Input
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
              type="text"
              name="name"
              id="name"
            />
          </FormField>

          <FormField
            className="grid w-full max-w-sm items-center gap-1.5"
            error={errors.email}
          >
            <Label htmlFor="email">Email Address</Label>
            <Input
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              type="email"
              name="email"
              id="email"
            />
          </FormField>

          <FormField
            className="grid w-full max-w-sm items-center gap-1.5"
            error={errors.password}
          >
            <Label htmlFor="password">Password</Label>
            <Input
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              type="password"
              name="password"
              id="password"
            />
          </FormField>

          <FormField
            className="grid w-full max-w-sm items-center gap-1.5"
            error={errors.password_confirmation}
          >
            <Label htmlFor="password_confirmation">Confirm password</Label>

            <Input
              value={data.password_confirmation}
              onChange={(e) => setData("password_confirmation", e.target.value)}
              type="password"
              name="password_confirmation"
              id="password_confirmation"
            />
          </FormField>

          <Button type="submit" disabled={processing}>
            Sign up
          </Button>
        </form>
      </>
    </Unauthenticated>
  )
}
