import DefaultPage from '@/components/DefaultPage';
import LandingPageComponent
  from '@/components/landingpage/LandingPageComponent';
import { getRealDomain } from '@/utils/domainUtils';

export default async function Home() {
  const domain = getRealDomain();

  if (process.env.LANDING_PAGE?.includes(domain)) {
    return (
      <main>
        <LandingPageComponent />
      </main>
    );
  } else {
    return (
      <main>
        <DefaultPage domain={domain} />
      </main>
    );
  }
}
