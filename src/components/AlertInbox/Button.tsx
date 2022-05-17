export interface ButtonProps {
      children?: JSX.Element | string;
      color: string;
      onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function Button(props: ButtonProps): JSX.Element {
  return (
    <div onClick={props.onClick} className={`button-${props.color}`}>
        {props.children}
    </div>
  );
}

export default Button;
