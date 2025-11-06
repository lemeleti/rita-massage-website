import LabelValue from './LableValue';

type ContactInfoProps = {
  email?: string;
  phone?: string;
  address?: string;
};

export default function ContactInfo({
  email,
  phone,
  address,
}: ContactInfoProps) {
  return (
    <>
      {email && (
        <LabelValue
          label="Email:"
          value={
            <a href={`mailto:${email}`} className="underline">
              {email}
            </a>
          }
          className="py-2"
        />
      )}
      {phone && (
        <LabelValue
          label="Telefon:"
          value={
            <a href={`tel:${phone}`} className="underline">
              {phone}
            </a>
          }
          className="py-2"
        />
      )}
      {address && (
        <LabelValue label="Adresse:" value={address} className="py-2" />
      )}
    </>
  );
}
