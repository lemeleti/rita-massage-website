import styled from 'styled-components';
import type { ReactNode } from 'react';

type LabelValueProps = {
  label: string;
  value: ReactNode;
  className?: string;
};

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default function LabelValue({
  label,
  value,
  className = '',
}: LabelValueProps) {
  return (
    <Row className={className}>
      <span className="font-semibold">{label}</span>
      <span>{value}</span>
    </Row>
  );
}
