import { useEffect, useState } from "react";

import { getAll } from "../../api/propertiesAPI";

import PropertyCard from "./property-card/PropertyCard";


export default function PropertiesList() {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        getAll()
            .then(result => setProperties(result))
    }, [])

    return (
        <div className="Properties_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="Properties_taital_main">
                            <h1 className="Properties_taital">New Properties for You</h1>
                            <hr className="border_main" />
                        </div>
                    </div>
                </div>
                <div className="Properties_section_2">
                    <div className="row">
                        {properties.map(property => <PropertyCard key={property._id} {...property} />)}
                        {/* <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}