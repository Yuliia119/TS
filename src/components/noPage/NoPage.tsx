import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div>
      <h1> 404: no such page 😵 </h1>
      <Link to={'/'}>To home page 🏠</Link>
    </div>
  )
}
