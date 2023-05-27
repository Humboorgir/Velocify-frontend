import Messages from "@/components/app/messages";

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
];
const App = () => {
  return (
    // container
    <div className="absolute grid h-full w-full place-items-center text-textColor">
      {/* chatbox */}
      <div className="relative flex h-[70vh] w-[min(90vw,700px)] flex-col gap-3 rounded-lg border border-neutral-700 px-6 py-5">
        <Messages messages={messages} />
        <div>
          <form className="absolute bottom-2 flex w-[93%] flex-row">
            <input
              placeholder="Message Person 2"
              className="w-[90%] bg-[#282b30] px-4"
            />
            <button className="w-[12%] rounded-r-md bg-yellowStrong p-3">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
