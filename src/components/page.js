import { DefaultSeo } from 'next-seo';
import Box from '@codeday/topo/Atom/Box';
import Header, { SiteLogo, Menu } from '@codeday/topo/Organism/Header';
import Footer from '@codeday/topo/Organism/Footer';
import { CodeDay } from '@codeday/topo/Atom/Logo';
import Button from '@codeday/topo/Atom/Button';

// TODO: Set production domain
const DOMAIN = 'https://www-topo.codeday.org';

export default ({ children, title, darkHeader, slug }) => (
  <>
    <DefaultSeo
      title={title}
      description="CodeDay: 24 hours of fun"
      canonical={`${DOMAIN}${slug}`}
      openGraph={{
        type: 'website',
        locale: 'en_US',
        site_name: 'CodeDay',
        url: `${DOMAIN}${slug}`,
      }}
      twitter={{
        handle: '@codeday',
        site: '@codeday',
        cardType: 'summary_large_image',
      }}
    />
    <Box position="relative">
      <Header darkBackground={darkHeader} gradAmount={darkHeader && 'lg'} underscore position="relative" zIndex={1000}>
        <SiteLogo>
          <a href="/">
            <CodeDay withText />
          </a>
        </SiteLogo>
        <Menu>
          <Button variant="outline" variantColor="brand" as="a" href="https://srnd.org/donate">Donate</Button>
          <Button variant="outline" variantColor="brand" as="a" href="https://srnd.org/sponsor">Sponsor</Button>
          <Button variant="solid" variantColor="brand" as="a" href="https://virtual.codeday.org">Virtual CodeDay</Button>
        </Menu>
      </Header>
      {children}
      <Footer />
    </Box>
  </>
);