import * as React from "react"

import { Link, useForm } from "@inertiajs/react"
import { account_session_path, new_account_registration_path } from "@/routes"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Unauthenticated from "@/layouts/Unauthenticated"

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
        <div>
          <h2>Sign in</h2>
          <p>
            <Link href={new_account_registration_path()}>
              Create an account.
            </Link>
          </p>
        </div>
        <form onSubmit={submit}>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email Address</Label>
            <Input
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div>
            <div>
              <Checkbox
                value={data.remember_me.toString()}
                id="remember"
                onCheckedChange={(checked) =>
                  setData("remember_me", Boolean(checked))
                }
              />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <div>
              <a href="/">Forgot your Password?</a>
            </div>
          </div>
          <Button type="submit" disabled={processing}>
            Sign in
          </Button>
        </form>
      </>
    </Unauthenticated>
  )
}
