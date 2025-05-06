import { Banner } from '@/features/home/banner';
import { ClientRevelations } from '@/features/home/client-revelations';
import { Features } from '@/features/home/features';
import { Hero } from '@/features/home/hero';
import { Reviews } from '@/features/home/reviews';
import { Steps } from '@/features/home/steps';

export default function Home() {
  return (
    <div className='relative overflow-hidden'>
      <Hero />
      <Features />
      <ClientRevelations />
      <Banner />
      <Steps />
      <Reviews />
    </div>
  );
}
