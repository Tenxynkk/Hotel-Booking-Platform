import { useState } from "react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import PageTitle from "../../components/ui/PageTitle";

const initialValues = {
  guestName: "",
  email: "",
  roomType: "standard",
  checkIn: "",
  checkOut: "",
  guests: "1",
};

function getToday() {
  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  return today.toISOString().slice(0, 10);
}

function validateBooking(values) {
  const nextErrors = {};

  if (!values.guestName.trim()) {
    nextErrors.guestName = "Enter the guest's name.";
  } else if (values.guestName.trim().length < 2) {
    nextErrors.guestName = "Name must be at least 2 characters.";
  }

  if (!values.email.trim()) {
    nextErrors.email = "Enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    nextErrors.email = "Enter a valid email address, such as name@example.com.";
  }

  if (!values.checkIn) {
    nextErrors.checkIn = "Choose a check-in date.";
  }

  if (!values.checkOut) {
    nextErrors.checkOut = "Choose a check-out date.";
  } else if (values.checkIn && values.checkOut <= values.checkIn) {
    nextErrors.checkOut = "Check-out must be after check-in.";
  }

  const guestCount = Number(values.guests);
  if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 6) {
    nextErrors.guests = "Choose between 1 and 6 guests.";
  }

  return nextErrors;
}

function Booking() {
  const [values, setValues] = useState({ ...initialValues });
  const [errors, setErrors] = useState({});
  const [submittedBooking, setSubmittedBooking] = useState(null);
  const today = getToday();

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((currentValues) => ({ ...currentValues, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
    setSubmittedBooking(null);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateBooking(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmittedBooking(null);
      return;
    }

    setSubmittedBooking({
      ...values,
      guestName: values.guestName.trim(),
      email: values.email.trim(),
    });
    setValues({ ...initialValues });
  }

  function handleReset() {
    setValues({ ...initialValues });
    setErrors({});
    setSubmittedBooking(null);
  }

  return (
    <section className="page">
      <PageTitle
        title="Book a Room"
        subtitle="Enter your stay details to create a booking request."
      />

      <Card
        title="Reservation Details"
        description="Fields marked with * are required. This form is a frontend demo and does not send data to a server."
      >
        <form className="booking-form" noValidate onSubmit={handleSubmit} onReset={handleReset}>
          <div className="booking-fields">
            <div className="booking-field">
              <label htmlFor="guestName">Guest name *</label>
              <input
                autoComplete="name"
                id="guestName"
                name="guestName"
                onChange={handleChange}
                required
                value={values.guestName}
                aria-invalid={Boolean(errors.guestName)}
                aria-describedby={errors.guestName ? "guestName-error" : undefined}
              />
              {errors.guestName && <p className="field-error" id="guestName-error">{errors.guestName}</p>}
            </div>

            <div className="booking-field">
              <label htmlFor="email">Email address *</label>
              <input
                autoComplete="email"
                id="email"
                name="email"
                onChange={handleChange}
                required
                type="email"
                value={values.email}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <p className="field-error" id="email-error">{errors.email}</p>}
            </div>

            <div className="booking-field">
              <label htmlFor="roomType">Room type *</label>
              <select
                id="roomType"
                name="roomType"
                onChange={handleChange}
                required
                value={values.roomType}
              >
                <option value="standard">Standard room</option>
                <option value="deluxe">Deluxe room</option>
                <option value="suite">Suite</option>
              </select>
            </div>

            <div className="booking-field">
              <label htmlFor="guests">Guests *</label>
              <input
                id="guests"
                max="6"
                min="1"
                name="guests"
                onChange={handleChange}
                required
                type="number"
                value={values.guests}
                aria-invalid={Boolean(errors.guests)}
                aria-describedby={errors.guests ? "guests-error" : undefined}
              />
              {errors.guests && <p className="field-error" id="guests-error">{errors.guests}</p>}
            </div>

            <div className="booking-field">
              <label htmlFor="checkIn">Check-in *</label>
              <input
                id="checkIn"
                min={today}
                name="checkIn"
                onChange={handleChange}
                required
                type="date"
                value={values.checkIn}
                aria-invalid={Boolean(errors.checkIn)}
                aria-describedby={errors.checkIn ? "checkIn-error" : undefined}
              />
              {errors.checkIn && <p className="field-error" id="checkIn-error">{errors.checkIn}</p>}
            </div>

            <div className="booking-field">
              <label htmlFor="checkOut">Check-out *</label>
              <input
                id="checkOut"
                min={values.checkIn || today}
                name="checkOut"
                onChange={handleChange}
                required
                type="date"
                value={values.checkOut}
                aria-invalid={Boolean(errors.checkOut)}
                aria-describedby={errors.checkOut ? "checkOut-error" : undefined}
              />
              {errors.checkOut && <p className="field-error" id="checkOut-error">{errors.checkOut}</p>}
            </div>
          </div>

          <div className="booking-actions">
            <Button text="Submit Booking Request" type="submit" />
            <button className="booking-reset" type="reset">Reset Form</button>
          </div>
        </form>

        {submittedBooking && (
          <div className="booking-confirmation" role="status" aria-live="polite">
            <h4>Booking request submitted</h4>
            <p>
              {submittedBooking.guestName}, your {submittedBooking.roomType} room request is set
              for {submittedBooking.checkIn} to {submittedBooking.checkOut} for {submittedBooking.guests}{" "}
              {submittedBooking.guests === "1" ? "guest" : "guests"}. A confirmation would be sent to {submittedBooking.email}.
            </p>
          </div>
        )}
      </Card>
    </section>
  );
}

export default Booking;