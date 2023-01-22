import { Link } from "react-router-dom"

function Box({ title, description, subItems, link }) {
    return (
        <div className="card w-72 bg-base-100 shadow-xl my-4">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <ul className="my-2">
                    {subItems.map((item, index) => {
                        return <li key={index}>{index + 1}{")"} {item}</li>
                    })}
                </ul>
                <div className="card-actions justify-end">
                    <Link to={link}><button className="btn btn-primary">Ver</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Box