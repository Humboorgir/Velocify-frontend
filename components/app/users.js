import User from "@/components/app/user";

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
