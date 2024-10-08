
import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <div>
        <nav>
          
          <li style={{ color: "purple",background: "pink" }}>
        
  Home
</li>

          <li><Link href="/about" target="_blank">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>

        </nav>
      </div>
      <div>
        Welcome To My HomePage;
      </div>
    </div> // Ensure this closing tag is here
  );
}
