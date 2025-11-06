import LabelValue from './LableValue';

type ServiceItemProps = {
  name: string;
  price: string;
};

export default function ServiceItem({ name, price }: ServiceItemProps) {
  return (
    <li>
      <LabelValue label={name} value={price} className="py-2" />
    </li>
  );
}
