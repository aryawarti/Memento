import { Alert } from "react-bootstrap";

const ErrorMessage = ({ variant = "info", children }) => {
  return (
    <Alert variant={variant} style={{ fontSize: "15px", marginTop:"10px", padding:"8px"
   ,display:"flex", alignItems:"center",justifyContent:"center" }}>
      <strong>{children}</strong>
    </Alert>
  );
};

export default ErrorMessage;
