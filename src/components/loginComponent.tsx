import * as React from 'react'
import { LOGIN } from '../constants'
import { useLoginHook } from '../hooks/loginHook'

export const LoginComponent: React.SFC = () => {
  const login = useLoginHook()

  return (
    <div>
      {login.form.map((f) => (
        <div key={f.placeholder}>
          <input
            type={f.type}
            placeholder={f.placeholder}
            value={f.value}
            onChange={(e) => f.onChange(e.target.value)}
          />
        </div>
      ))}
      <button onClick={login.submit}>{LOGIN}</button>
    </div>
  )
}