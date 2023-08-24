import Chat from "@/components/app/sidebar/chat";

const Chats = ({ chats }) => {
  return (
    <>
      {chats &&
        chats.map((chat) => {
          return <Chat chat={chat} />;
        })}
    </>
  );
};

export default Chats;
