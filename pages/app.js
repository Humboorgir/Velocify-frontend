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
        {messages.map((message) => {
          return (
            <div className="flex flex-col rounded-lg bg-[#282b30] p-3">
              <span>{message.author}</span>
              <span className="ml-[3px]">{message.content}</span>
            </div>
          );
        })}
        <form className="absolute bottom-2 flex w-full flex-row">
          <input
            placeholder="Message Person 2 p-3"
            className="w-[90%] bg-[#282b30]"
          />
          <button className="rounded-r-3xl bg-yellowStrong p-3">Send</button>
        </form>
      </div>
    </div>
  );
};

export default App;
