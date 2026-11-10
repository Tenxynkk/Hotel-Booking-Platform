import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Profile() {
  return (
    <section className="page">
      <PageTitle
        title="My Profile"
        subtitle="View and manage your personal information."
      />

      <Card
        title="Personal Information"
        description="Your account details will be displayed here."
      >
        <p>Name: Hotel User</p>
        <p>Email: user@example.com</p>

        <Button
          text="Edit Profile"
          onClick={() => alert("Edit Profile selected")}
        />
      </Card>
    </section>
  );
}

export default Profile;