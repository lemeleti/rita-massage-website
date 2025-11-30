import ContactInfo from './components/ContactInfo';
import Section from './components/Section';
import ServiceList from './components/ServiceList';

function App() {
  return (
    <>
      <header className="flex flex-col h-[45vh] items-center justify-center bg-primary">
        <h1>RB</h1>
        <h2 className="uppercase">Toque de Beleca</h2>
      </header>
      <main className="flex flex-col">

        <Section
          title="Serviços"
          className="bg-gradient-primary-secondary"
        >
          <div className="mx-auto mt-4 w-full md:w-3/4 xl:w-1/2">
            <ServiceList
              services={[
                { name: 'Limpeza de Pele', price: '90 CHF' },
                { name: 'Spa para os Pés', price: '60 CHF' },
                { name: 'Manicure', price: '45 CHF' },
                { name: 'Unha em Gel', price: '50 CHF' },
                { name: 'Bambu Terapia', price: '80 CHF' },
              ]}
            />
          </div>
        </Section>

        <Section
          title="Kontakt"
          className="bg-gradient-secondary-accent"
        >
          <div className="mx-auto mt-4 w-full md:w-3/4 xl:w-1/2">
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
