// pages/index.tsx
import React from "react";
import ReferralTree from "./ReferralTree";

interface User {
  id: number;
  name: string;
  referrals?: User[];
}

const users: User[] = [
  {
    id: 1,
    name: "User 1",
    referrals: [
      {
        id: 2,
        name: "User 2",
        referrals: [
          {
            id: 3,
            name: "User 3",
            referrals: [],
          },
        ],
      },
      {
        id: 4,
        name: "User 4",
        referrals: [],
      },
    ],
  },
];

const Tree: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Referral Tree</h1>
      <ReferralTree referrals={users} />
    </div>
  );
};

export default Tree;
