export default function TodoForm() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder='Enter your to do' />
                </div>
                <div className="col-md-4">
                    <input type="date" className="form-control" />
                </div>
                <div className="col-md-2 d-flex align-items-end">
                    <button className='btn btn-success'>Add</button>
                </div>
            </div>
        </div>
    );
}
