import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Dashboard() {
  return (
    <section className="page">
      <PageTitle
        title="Dashboard"
        subtitle="Welcome to your Hotel Booking System dashboard."
      />

      <div className="dashboard-cards">
        <Card
          title="Total Bookings"
          description="View and manage your hotel reservations."
        >
          <h2>24</h2>
          <Button
            text="View Bookings"
            onClick={() => alert("Bookings section selected")}
          />
        </Card>

        <Card
          title="Available Rooms"
          description="Check the rooms currently available."
        >
          <h2>15</h2>
          <Button
            text="View Rooms"
            onClick={() => alert("Rooms section selected")}
          />
        </Card>

        <Card
          title="Customers"
          description="Manage hotel customer information."
        >
          <h2>32</h2>
          <Button
            text="View Customers"
            onClick={() => alert("Customers section selected")}
          />
        </Card>
      </div>
    </section>
  );
}

export default Dashboard;