export default function TodoItem() {
    return (
        <div className="container">
            <div className="row ItemRowMargin">
                <div className="col-md-6">
                    Event 2
                </div>
                <div className="col-md-4">
                    11/12/23
                </div>
                <div className="col-md-2  d-flex align-items-end">
                    <button className='btn btn-danger'>Delete</button>
                </div>
            </div>
        </div>
    );
}