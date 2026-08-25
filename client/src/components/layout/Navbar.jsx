function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          Hotel Booking System
        </div>

        <nav className="navbar-links">
          <span>Home</span>
          <span>Rooms</span>
          <span>Bookings</span>
          <span>Login</span>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
