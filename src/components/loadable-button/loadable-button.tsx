import { Button, CircularProgress } from "@material-ui/core";
import { DefaultComponentProps, OverridableTypeMap } from "@material-ui/core/OverridableComponent";

type Props = DefaultComponentProps<OverridableTypeMap> & {
  isLoading?: boolean,
  children?: React.ReactChildren
}

export default function LoadableButton(props: Props) {
  const { isLoading, ...other } = props
  return (
    <Button {...other}>
      {
        isLoading &&
        <CircularProgress
          color="secondary"
          size="1.5rem"
        />
      }
      {
        !isLoading && props.children
      }
    </Button>
  )
}