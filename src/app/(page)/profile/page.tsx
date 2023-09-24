import Container from "@/app/components/Container";
import ProfileDetail from "@/app/components/ProfileDetail";
import { Suspense } from "react";

const ProfilePage = () => {
  return (
    <div>
      <Container>
        <ProfileDetail />
      </Container>
    </div>
  );
};

export default ProfilePage;
