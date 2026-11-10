function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <h3>Hotel Booking System</h3>

      <p>
        Find comfortable rooms and enjoy a pleasant stay.
      </p>

      <p className="copyright">
        © {currentYear} Hotel Booking System. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;