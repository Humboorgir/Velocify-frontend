const alert = ({ alert }) => {
  return (
    <>
      {alert.display && (
        <div
          className="alert"
          style={
            alert.ok
              ? { color: "#baffc3", backgroundColor: "#27a800" }
              : { color: "#f8d7da", backgroundColor: "#ab0011" }
          }
        >
          <strong>
            {alert.ok ? <FaCheckCircle /> : <FaExclamationTriangle />}{" "}
            {alert.ok ? "SUCCESS!" : "ERROR!"}:
          </strong>
          {alert.content}
        </div>
      )}
    </>
  );
};

export default alert;
