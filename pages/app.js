import Messages from "@/components/app/messages";
import MessageInput from "@/components/app/messageinput";
const messages = [
  {
    author: "Person 1",
    content: "Hello there!",
  },
  {
    author: "Person 2",
    content: "Hi",
  },
  {
    author: "Person 1",
    content: "What's up?",
  },
  {
    author: "Person 2",
    content: "Nothing much",
  },
  {
    author: "Person 1",
    content: "You doing good?",
  },
  {
    author: "Person 2",
    content: "Yeah... atleast for now",
  },
];
const App = () => {
  return (
    // container
    <div className="absolute grid h-full w-full place-items-center text-textColor">
      {/* chatbox */}
      <div className="relative flex h-[70vh] w-[min(90vw,700px)] flex-col gap-3 rounded-lg border border-neutral-700 px-6 py-5">
        <Messages messages={messages} />
        <div>
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default App;
