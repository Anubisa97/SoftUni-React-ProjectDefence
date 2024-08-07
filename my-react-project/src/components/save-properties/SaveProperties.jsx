import { Navigate } from "react-router-dom";

export default function SaveProperties(userId, propertyId) {
    console.log(userId);
    console.log(propertyId);

    const savedProperty = {
        "propertyId": propertyId,
        "saved_by": [],
    }

    savedProperty.saved_by.pop(userId)


    return <Navigate to="/" />;
}
