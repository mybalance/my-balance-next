import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/faq">FAQs</Link>
        </li>
        <li>
          <Link href="/terms">Terms</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;