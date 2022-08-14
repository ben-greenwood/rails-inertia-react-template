import * as React from "react"

import { Link, useForm } from "@inertiajs/inertia-react"
import { account_session_path, new_account_registration_path } from "@/routes"

import FlashMessages from "@/components/FlashMessages"
import Input from "@/components/Input"
import Unauthenticated from "@/Layouts/Unauthenticated"

export default function New() {
  const { data, setData, post, processing, transform } = useForm({
    email: "",
    password: "",
    remember_me: false,
  })

  function submit(e) {
    e.preventDefault()
    transform(() => ({
      account: { ...data },
    }))
    post(account_session_path())
  }

  return (
    <Unauthenticated>
      <>
        <FlashMessages />
        <div>
          <h2>Sign in</h2>
          <p>
            <Link href={new_account_registration_path()}>
              Create an account.
            </Link>
          </p>
        </div>
        <form onSubmit={submit}>
          <Input
            label="Email Address"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            type="email"
            name="email"
            id="email"
          />
          <Input
            label="Password"
            value={data.password}
            onChange={(e) => setData("password", e.target.value)}
            type="password"
            name="password"
            id="password"
          />
          <div>
            <div>
              <input
                value={data.remember_me}
                onChange={(e) => setData("remember_me", e.target.checked)}
                type="checkbox"
                id="remember"
              />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <div>
              <a href="/">Forgot your Password?</a>
            </div>
          </div>
          <button type="submit" disabled={processing}>
            Sign in
          </button>
        </form>
      </>
    </Unauthenticated>
  )
}
