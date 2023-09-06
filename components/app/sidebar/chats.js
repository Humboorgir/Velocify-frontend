import Chat from "@/components/app/sidebar/chat";

const Chats = ({ chats }) => {
  return (
    <>
      {chats &&
        chats.map((chat, i) => {
          return <Chat key={i} chat={chat} />;
        })}
    </>
  );
};

export default Chats;
