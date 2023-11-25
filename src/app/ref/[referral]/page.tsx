import SignUpComponent from "@/components/admin/sign-up/SignUpComponent";

const page = ({ params }: { params: { referral: string } }) => {
  const referral = params.referral;
  return (
    <div>
      <SignUpComponent referral={referral} />
    </div>
  );
};

export default page;
