import Chat from "@/components/app/sidebar/chat";

const Chats = ({ chats, searchResults, onlineUsers }) => {
  // if searchResults is not empty it means the user's searching
  if (searchResults.length > 0)
    return (
      <>
        {searchResults.map((chat, i) => {
          return <Chat key={i} chat={chat} onlineUsers={onlineUsers} />;
        })}
      </>
    );
  return (
    <>
      {chats &&
        chats.map((chat, i) => {
          return <Chat key={i} chat={chat} onlineUsers={onlineUsers} />;
        })}
    </>
  );
};

export default Chats;
