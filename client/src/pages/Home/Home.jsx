import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="page">
      <PageTitle
        title="Welcome to Our Hotel"
        subtitle="Find comfortable rooms and enjoy a pleasant stay."
      />

      <Card
        title="Find Your Perfect Stay"
        description="Explore our hotel rooms and discover comfortable accommodation for your next visit."
      >
        <Button
          text="Get Started"
          onClick={() => navigate("/login")}
        />
      </Card>

      <Card
        title="Easy Booking"
        description="Our hotel booking platform makes it easier to explore rooms and manage your reservations."
      />
    </section>
  );
}

export default Home;