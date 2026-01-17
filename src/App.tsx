import ContactInfo from './components/ContactInfo';
import LanguageDropdown from './components/LanguageDropdown';
import Section from './components/Section';
import ServiceList from './components/ServiceList';

import ribbonImage from './assets/ribbon-removebg-preview.png';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n} = useTranslation();

  return (
    <>
      <header className="flex flex-col pt-24 items-center justify-center bg-primary frontis-font">
        <LanguageDropdown onChange={(lang) => {
          localStorage.setItem('lang', lang)
          i18n.changeLanguage(lang)
        }}></LanguageDropdown>
        <h1>{t('headerTitle')}</h1>
        <h2 className="uppercase text-center">{t('headerSubtitle')}</h2>
        <div className='flex flex-row mt-8'>
          <img src={ribbonImage} />
          <img src={ribbonImage} className='hidden lg:block'/>
          <img src={ribbonImage} className='hidden xl:block'/>
        </div>
      </header>
      <main className="flex flex-col">

        <Section
          title={t('servicesTitle')}
          className="bg-primary frontis-font"
        >
          <div className="mx-auto mt-4 w-full md:w-3/4 xl:w-1/2">
            <ServiceList
              services={[
                { name: t('skinCleansingLabel'), price: '90 CHF' },
                { name: t('footSpaLabel'), price: '60 CHF' },
                { name: t('manicureLabel'), price: '45 CHF' },
                { name: t('gelNailsLabel'), price: '50 CHF' },
                { name: t('bambooTherapyLabel'), price: '80 CHF' },
                { name: t('eyebrowDesignLabel'), price: '60 CHF' },
                { name: t('eyebrowLiftLabel'), price: '70 CHF' },
                { name: t('eyelashLiftLabel'), price: '80 CHF' },
                { name: t('eyelashExtenstionLiftLabel'), price: '90 CHF' },
              ]}
            />
          </div>
        </Section>

        <Section
          title={t('epilationTitle')}
          className="bg-primary frontis-font"
        >
          <div className="mx-auto mt-4 w-full md:w-3/4 xl:w-1/2">
            <ServiceList
              services={[
                { name: t('bikiniLineLabel'), price: '45 CHF' },
                { name: t('underarmsLabel'), price: '30 CHF' },
                { name: t('legsLabel'), price: '45 CHF' },
                { name: t('faceLabel'), price: '20 CHF' },
              ]}
            />
          </div>
        </Section>

        <Section
          title={t('contactTitle')}
          className="bg-primary"
        >
          <div className="mx-auto mt-4 w-full md:w-3/4 xl:w-1/2 frontis-font-label">
            <ContactInfo
              email="meleti.rita@gmail.com"
              phone="+41 76 520 24 18"
              address="Wülflingerstrasse 246, 8408 Winterthur"
            />
          </div>
        </Section>
      </main>
    </>
  );
}

export default App;
