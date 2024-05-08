// pages/login.tsx
import Container from "@/app/components/Container";
import FormLogin2 from "@/app/components/FormLogin2";
import FormLogin3 from "@/app/components/FormLogin3";

const LoginPage = () => {
  return (
    <Container className=" py-2 px-2">
      <div className=" py-2">
        <FormLogin2 />
      </div>
    </Container>
  );
};

export default LoginPage;
