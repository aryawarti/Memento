
export default Footer => {
    return (
      <footer
        style={{
          position: "fixed",
          bottom:0,
          left: 0,
          width: "100%",
          backgroundColor: "#f8f9fa", // Optional: Set background color
          textAlign: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">Copyright &copy; Memento</div>
          </div>
        </div>
      </footer>
    );
}