import './App.css';
import ContactInfo from './components/ContactInfo';
import Section from './components/Section';
import ServiceList from './components/ServiceList';

function App() {
  return (
    <>
      <header className="flex h-[45vh] items-center justify-center bg-primary">
        <h1>Rita's Service</h1>
      </header>
      <main className="flex flex-col">
        <Section
          title="Über mich"
          className="bg-gradient-primary-secondary"
        >
          <div className="mx-auto mt-4 md:w-3/4 xl:w-1/2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              nesciunt commodi distinctio deleniti expedita? Deserunt a nobis
              labore maxime consequatur, explicabo nesciunt voluptas ipsam
              dolorum itaque, perspiciatis, voluptatibus nemo optio. Enim dicta
              debitis non modi architecto temporibus blanditiis, amet in fuga
              sapiente ipsa aut nihil beatae, delectus, reprehenderit minima
              labore repellat quis ut! Consectetur vel eaque expedita optio
              quis? Omnis.
            </p>
          </div>
        </Section>

        <Section
          title="Leistungen"
          className="bg-gradient-secondary-accent"
        >
          <div className="mx-auto mt-4 w-full md:w-3/4 xl:w-1/2">
            <ServiceList
              services={[
                { name: 'Option 1', price: '50 CHF' },
                { name: 'Option 2', price: '75 CHF' },
                { name: 'Option 3', price: '100 CHF' },
              ]}
            />
          </div>
        </Section>

        <Section
          title="Kontakt"
          className="bg-accent"
        >
          <div className="mx-auto mt-4 w-full md:w-3/4 xl:w-1/2">
            <ContactInfo
              email="rita@example.com"
              phone="+49 123 456789"
              address="Musterstraße 1, 12345 Musterstadt"
            />
          </div>
        </Section>
      </main>
    </>
  );
}

export default App;
