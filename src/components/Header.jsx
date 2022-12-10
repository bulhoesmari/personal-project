import { Navbar } from "flowbite-react";

export default function Header() {
  return (

    <header> 
    <Navbar class='font-mono'
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="https://flowbite.com/">
        
        
      </Navbar.Brand>
      <div className="flex md:order-2">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="/"
          
        >
          About
        </Navbar.Link>
        <Navbar.Link href="/curriculum">
          Curriculum
        </Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
    </header>
  );
}