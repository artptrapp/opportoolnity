import { Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./login-motto.css"

export default function LoginMotto() {

  const { t } = useTranslation()

  return (
    <Box className="login-motto__container" component="div">
      <div className="login-motto__shadow">
        <Box className="login-motto__motto-text" component="div" m={1}>
          <h1>
            TOOL EASY
          </h1>
          <h5>
            {t('login_motto')}
          </h5>
          <Box component="span" m={1}>
            {t('find_transparent_info')}
          </Box>
        </Box>
      </div>
    </Box>
  )
}