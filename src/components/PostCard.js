import Button from "./Button";

function Card(props) {
  const {
    title,
    desc,
    buttonLabel = "Read more",
    buttonColor = "blue",
  } = props;
  return (
    // <div className="card">
    //   <div className="card-body">
    //     <h5 className="card-title">{title}</h5>
    //     <p className="card-text">{desc}</p>
    //     <Button label={buttonLabel} color={buttonColor} />
    //   </div>
    // </div>

    <div class="container mx-auto my-3">
      <div class="card mb-2">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{desc}</p>
          <div class="text-end">
            <Button
              color={buttonColor}
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
