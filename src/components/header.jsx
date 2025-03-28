export default function Header () {
    function addVideo() {
        console.log("Button clicked")
    }
    return(
        <header className="col-sm-12">
            <div className="d-flex justify-content-between">
                <h1>Featured Video</h1>
                <button onClick={addVideo}>New Video</button>
            </div>
        </header>
    )
}