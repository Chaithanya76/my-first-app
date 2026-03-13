function User(props) {
    return (
        <div className="user">
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
            <p>{props.role}</p>
        </div>
    );
}
export default User;