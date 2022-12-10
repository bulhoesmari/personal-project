import { AiFillInstagram} from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { Footer } from 'flowbite-react';


export default function Contacts() {
  return (
    
    <Footer container={true}  >
    <div className="w-full">
      
      <Footer.Divider />
     
        <div className="mt-4 flex space-x-6 tism:mt-0 sm:justify-center">
          <Footer.Icon
            href="https://www.linkedin.com/in/mariana-blima/"
            icon={AiFillLinkedin}
          />
          <Footer.Icon
            href="https://github.com/bulhoesmari/"
            icon={AiFillGithub}
          />
          <Footer.Icon
            href="https://www.instagram.com/amemliaa/"
            icon={AiFillInstagram}
          />
          
        </div>
      </div>
    
  </Footer>
    
   
  );
}