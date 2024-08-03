/* eslint-disable react/prop-types */
import Alert from 'react-bootstrap/Alert';

export default function Error({ errorMessage }) {
    return (
        <Alert variant="danger">
            <span>{errorMessage}</span>
        </Alert>
    );
}