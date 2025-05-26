

import Contacto from './contact/page';
import Hero from './home/page';
import Skill from './projecto/page';
import SectionAbout from './../components/About';

export default function Home() {
  return (
    <div>
      <Hero />
      <Skill/>
      <SectionAbout/>
      <Contacto />
    </div>
  );
}
