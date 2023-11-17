// components/ReferralTree.tsx
interface Referral {
  id: number;
  name: string;
  referrals?: Referral[];
}

interface ReferralTreeProps {
  referrals: Referral[];
}

const ReferralTree: React.FC<ReferralTreeProps> = ({ referrals }) => {
  const renderTree = (referrals?: Referral[]) => {
    if (!referrals || referrals.length === 0) {
      return null;
    }

    return (
      <ul className="ml-4">
        {referrals.map((referral) => (
          <li key={referral.id}>
            {referral.name}
            {renderTree(referral.referrals)}
          </li>
        ))}
      </ul>
    );
  };

  return <div>{renderTree(referrals)}</div>;
};

export default ReferralTree;
