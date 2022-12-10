import { FaReact} from 'react-icons/fa';
import { FaHtml5} from 'react-icons/fa';
import { DiJavascript1} from 'react-icons/di';
import { DiJava} from 'react-icons/di';
import { Avatar } from "flowbite-react";



export default function About() {
    return (
        <>
           

            <div id="content" class='font-mono' > 
                <br/>
                <br/>
                <br/>
                <br/>
                <Avatar
                img="https://media-exp1.licdn.com/dms/image/D4D03AQGZWGQ5LgRjyw/profile-displayphoto-shrink_800_800/0/1666276542824?e=1675296000&v=beta&t=g56-gf1DPHYP9bE2Q_Pux9upwnq3rHOH-CV3B-SiyYE"
                size="xl"
                 rounded={true}
                />
                <br/>
                <br/>
                 <h1>Mariana Bulhões</h1>
                <span>bulhoesmari@gmail.com </span>
                <br/>
                <br/>
                <br/>
                <div id='icons' className="mt-4 flex space-x-6 tism:mt-0 sm:jusfy-center" >
                    <FaReact color='cornflowerblue' size="30px"/>
                    <DiJavascript1 color='rgb(249, 216, 6)' size="30px"/>
                    <FaHtml5 color='orange' size="30px"/>
                    <DiJava color='cornflowerblue' size="33px"/>
                </div>
                <br/>
                <br/>
                <div id='about-me'>
                    <p> Conheci a área de TI ainda no ensino médio quando fiz
Informática pelo IFPE. Após o técnico, engatei na graduação
de pedagogia e desenvolvi bastante projetos na área de
educação e cultura (coisa que amo!). Mas senti saudade
do ambiente tecnológico e voltei a cursar TI.</p>
                </div>
                
            </div>
            
        </>
        
    );
}