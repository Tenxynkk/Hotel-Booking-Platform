import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Login() {
  return (
    <section className="page">
      <PageTitle
        title="Login"
        subtitle="Welcome back! Access your hotel booking account."
      />

      <Card
        title="Account Login"
        description="Login functionality will be implemented in a later sprint."
      >
        <Button
          text="Login"
          onClick={() => alert("Login functionality coming soon")}
        />
      </Card>
    </section>
  );
}

export default Login;