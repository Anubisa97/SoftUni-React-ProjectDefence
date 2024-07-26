export default function SelectBox() {
    return (

        < div className="container" >
            <div className="select_box_section">
                <div className="select_box_main">
                    <h1 className="find_text">Find Property</h1>
                    <div className="row">
                        <div className="col-lg-3 select-outline">
                            <select className="mdb-select md-form md-outline colorful-select dropdown-primary">
                                <option value="">City</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                        <div className="col-lg-3 select-outline">
                            <select className="mdb-select md-form md-outline colorful-select dropdown-primary">
                                <option value="">Austin</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                        <div className="col-lg-3 select-outline">
                            <select className="mdb-select md-form md-outline colorful-select dropdown-primary">
                                <option value="">Street</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                        <div className="col-lg-3 select-outline">
                            <div className="find_btn"><a href="#">Find Now</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}