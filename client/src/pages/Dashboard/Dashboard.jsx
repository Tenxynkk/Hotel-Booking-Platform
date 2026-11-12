import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Dashboard() {
  const [bookingCount, setBookingCount] = useState(24);

  return (
    <section className="page">
      <PageTitle
        title="Dashboard"
        subtitle="Welcome to your Hotel Booking System dashboard."
      />

      <div className="dashboard-cards">
        <Card
          title="Total Bookings"
          description="Demo counter: update the total with the button."
        >
          <h2>{bookingCount}</h2>
          <p className="dashboard-feedback" aria-live="polite">
            {bookingCount === 24
              ? "No demo bookings added yet."
              : `${bookingCount - 24} demo ${bookingCount - 24 === 1 ? "booking" : "bookings"} added this visit.`}
          </p>
          <Button
            text="Add Booking"
            onClick={() => setBookingCount((count) => count + 1)}
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