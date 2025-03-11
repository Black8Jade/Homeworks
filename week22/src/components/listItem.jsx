function ListItem(props) {
    return (
    <p>
      <strong>{props.label}:</strong> {props.value}
    </p>
  );
}

export default ListItem;