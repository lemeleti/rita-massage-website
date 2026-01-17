import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation()
  return (
    <>
      {email && (
        <LabelValue
          label={t('contactEmailLabel') + ':'}
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
          label={t('contactPhoneLabel') + ':'}
          value={
            <a href={`tel:${phone}`} className="underline">
              {phone}
            </a>
          }
          className="py-2"
        />
      )}
      {address && (
        <LabelValue label={t('contactAddressLabel') + ':'} value={address} className="py-2" />
      )}
    </>
  );
}
