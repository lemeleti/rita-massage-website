import ServiceItem from './ServiceItem';

type Service = {
  name: string;
  price: string;
};

type ServiceListProps = {
  services: Service[];
};

export default function ServiceList({ services }: ServiceListProps) {
  return (
    <ul>
      {services.map((service, index) => (
        <ServiceItem key={index} name={service.name} price={service.price} />
      ))}
    </ul>
  );
}
