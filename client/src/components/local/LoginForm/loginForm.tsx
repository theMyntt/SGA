import Input from "@/components/shared/Input/input";

export default function LoginForm(): JSX.Element {
  return (
    <form method="POST">
      <label htmlFor="email"></label>
      <Input type="email" id="email"/>
    </form>
  )
}