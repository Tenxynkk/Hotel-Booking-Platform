import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import WelcomeMessage from "../../components/ui/WelcomeMessage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [guestName, setGuestName] = useState("");

  return (
    <section className="page">
      <PageTitle
        title="Welcome to Our Hotel"
        subtitle="Find comfortable rooms and enjoy a pleasant stay."
      />

      <div className="home-cards">
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
        >
          <label className="welcome-label" htmlFor="guest-name">
            Your name
          </label>
          <input
            className="welcome-input"
            id="guest-name"
            name="guestName"
            onChange={(event) => setGuestName(event.target.value)}
            placeholder="Enter your name"
            type="text"
            value={guestName}
          />
          {guestName.trim() && (
            <WelcomeMessage
              name={guestName.trim()}
              projectName="Hotel Booking System"
            />
          )}
        </Card>
      </div>
    </section>
  );
}

export default Home;