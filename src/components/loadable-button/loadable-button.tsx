import { Button, CircularProgress } from "@material-ui/core";
import { DefaultComponentProps, OverridableTypeMap } from "@material-ui/core/OverridableComponent";

type Props = DefaultComponentProps<OverridableTypeMap> & {
  loading?: boolean,
  children?: React.ReactChildren
}

export default function LoadableButton(props: Props) {
  return (
    <Button {...props}>
      {
        props.loading &&
        <CircularProgress
          color="secondary"
          size="1.5rem"
        />
      }
      {
        !props.loading && props.children
      }
    </Button>
  )
}