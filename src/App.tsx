import ContactInfo from './components/ContactInfo';
import Section from './components/Section';
import ServiceList from './components/ServiceList';

import ribbonImage from './assets/ribbon-removebg-preview.png';

function App() {
  return (
    <>
      <header className="flex flex-col pt-24 items-center justify-center bg-primary frontis-font">
        
        <h1>RB</h1>
        <h2 className="uppercase">Toque de Beleca</h2>
        <div className='flex flex-row mt-8'>
          <img src={ribbonImage} />
          <img src={ribbonImage} className='hidden lg:block'/>
          <img src={ribbonImage} className='hidden xl:block'/>
        </div>
      </header>
      <main className="flex flex-col">

        <Section
          title="Serviços"
          className="bg-primary frontis-font"
        >
          <div className="mx-auto mt-4 w-full md:w-3/4 xl:w-1/2">
            <ServiceList
              services={[
                { name: 'Limpeza de Pele', price: '90 CHF' },
                { name: 'Spa para os Pés', price: '60 CHF' },
                { name: 'Manicure', price: '45 CHF' },
                { name: 'Unha em Gel', price: '50 CHF' },
                { name: 'Bambu Terapia', price: '80 CHF' },
                { name: 'Design de Sobrancelha', price: '60 CHF' },
                { name: 'Lifting de Sobrancelha', price: '70 CHF' },
                { name: 'Lifting de Cilios', price: '80 CHF' },
                { name: 'Lifting de Extensão de Cilios (fio a fio)', price: '90 CHF' },
              ]}
            />
          </div>
        </Section>

        <Section
          title="Depilaçào"
          className="bg-primary frontis-font"
        >
          <div className="mx-auto mt-4 w-full md:w-3/4 xl:w-1/2">
            <ServiceList
              services={[
                { name: 'Biqini', price: '45 CHF' },
                { name: 'Axila', price: '30 CHF' },
                { name: 'Perna', price: '45 CHF' },
                { name: 'Rosto', price: '20 CHF' },
              ]}
            />
          </div>
        </Section>

        <Section
          title="Kontakt"
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
