import { useHistory } from "react-router-dom"

const BreadcrumbBar = () => {
    const history = useHistory();

    const goBack = () => {
        history.go(-1)
    }

    return (
        <div className="breadcrumb-bar">
            {history.location.pathname && <button onClick={goBack}>Back</button>}
        </div>
    );
}

export default BreadcrumbBar;