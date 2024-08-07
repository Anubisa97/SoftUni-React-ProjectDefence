import { useGetOwnerProperties } from "../../hooks/useProperties";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import PropertyCard from "../properties-list/property-card/PropertyCard";

export default function MyProperties() {
    const { userId } = useContext(AuthContext);
    const [properties] = useGetOwnerProperties(userId);

    return (
        <div className="Properties_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="Properties_taital_main">
                            <h1 className="Properties_taital">My Properties</h1>
                            <hr className="border_main" />
                        </div>
                    </div>
                </div>
                <div className="Properties_section_2">
                    <div className="row">
                        {properties.map((property) => (
                            <PropertyCard key={property._id} {...property} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
