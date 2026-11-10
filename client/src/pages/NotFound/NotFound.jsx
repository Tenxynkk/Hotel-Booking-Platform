import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="page">
      <PageTitle
        title="404 - Page Not Found"
        subtitle="Sorry, the page you are looking for does not exist."
      />

      <Button
        text="Return Home"
        onClick={() => navigate("/")}
      />
    </section>
  );
}

export default NotFound;