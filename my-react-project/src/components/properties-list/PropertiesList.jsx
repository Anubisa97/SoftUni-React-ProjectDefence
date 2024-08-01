import { useEffect } from "react";
import PropertyCard from "./property-card/PropertyCard";
import * as request from "../../api/requester"

const BASE_URL = "http://localhost:3030/"

export default function PropertiesList() {
    useEffect(() => {
        (async () => {
            const propertiesResult = await request.get(BASE_URL)
            console.log(propertiesResult);
        })()
    })

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
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                    </div>
                </div>
            </div>
        </div>
    );
}