import { useGetLatestProperties } from "../../hooks/useProperties";
import PropertyCard from "../properties-list/property-card/PropertyCard";

export default function LatestProperties() {
    const [properties] = useGetLatestProperties();

    const latestProperties = properties.slice(0, 3)

    return (
        <div className="Properties_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="Properties_taital_main">
                            <h1 className="Properties_taital">Latest Properties</h1>
                            <hr className="border_main" />
                        </div>
                    </div>
                </div>
                <div className="Properties_section_2">
                    <div className="row">
                        {latestProperties.map((property) => (
                            <PropertyCard key={property._id} {...property} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
