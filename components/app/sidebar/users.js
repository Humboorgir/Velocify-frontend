import User from "@/components/app/sidebar/user";

const Users = ({ users }) => {
  return (
    <>
      {users &&
        users.map((user) => {
          return <User user={user} />;
        })}
    </>
  );
};

export default Users;
