import { ErrorMessageProps } from './ErrorMessage.types';


const ErrorMessage: React.FC<ErrorMessageProps> = ({
  error,
}) => {
  return <div>{error}</div>;
};

export default ErrorMessage;