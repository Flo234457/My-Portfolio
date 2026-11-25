import {Index} from "@/Section/Index";
import { Achievements } from "@/Section/Achievements";
import { ISE } from "@/Section/ISE";
import { Projects } from "@/Section/Projects";
import { Experience } from "@/Section/Experience";
import { Navbar } from "@/Layout/Navbar";




function  App() {
/*sets the height to match the height of the device its on 
*/
  return <div className="min-h-screen overflow-x-hidden"> 
    <Navbar />
    <main>
      <Index/>
      <Achievements/>
      <ISE/>
      <Projects/>
      <Experience/> 
      </main>
  </div>;
}

export default App
