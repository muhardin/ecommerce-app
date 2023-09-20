// pages/login.tsx
import Container from "@/app/components/Container";
import FormLogin from "@/app/components/FormLogin";

const LoginPage = () => {
  return (
    <Container className=" py-2 px-2">
      <div className=" py-2">
        <FormLogin />
      </div>
    </Container>
  );
};

export default LoginPage;
