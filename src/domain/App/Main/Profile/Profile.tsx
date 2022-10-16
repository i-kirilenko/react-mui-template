import { ChangeEvent, FC, useCallback } from 'react'
import {
  Box,
  Card,
  CardContent,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Switch,
  Typography,
} from '@mui/material'

import Page from 'components/Page'
import { LocalSettingsState } from 'domain/AppWrapper/AppWrapper.adapter.LocalSettingsContext'
import { useLocalSettings } from 'domain/AppWrapper/LocalSettingsContext'
import { LocaleName } from 'domain/AppWrapper/ThemeContext/ThemeContext.features'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

const Profile: FC = () => {
  const [localSettingsState, setLocalSettingsState] =
    useLocalSettings<LocalSettingsState>()

  log('Profile.render')(localSettingsState.themeName)

  const handleThemeSwitchChange = useCallback(() => {
    setLocalSettingsState({
      themeName: localSettingsState.themeName === 'light' ? 'dark' : 'light',
    })
  }, [localSettingsState.themeName, setLocalSettingsState])

  const handleLocaleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setLocalSettingsState({
        localeName: (event.target as HTMLInputElement).value as LocaleName,
      })
    },
    [setLocalSettingsState],
  )

  return (
    <Page header="Profile" id="Profile" title="Profile">
      <p>Available for user- and admin-role only</p>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <Typography variant="h6">Interface settings</Typography>
            </Grid>
            <Grid item md={8} sm={12} xs={12}>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 3,
                }}
              >
                <div>
                  <Typography variant="subtitle1">Dark theme</Typography>
                  <Typography
                    color="textSecondary"
                    sx={{ mt: 1 }}
                    variant="body2"
                  >
                    Now you can choose between light and dark theme
                  </Typography>
                </div>
                <Switch
                  checked={localSettingsState.themeName === 'dark'}
                  onChange={handleThemeSwitchChange}
                  color="primary"
                />
              </Box>
              <Divider />
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-between',
                  mt: 3,
                }}
              >
                <div>
                  <Typography variant="subtitle1">Language</Typography>
                  <Typography
                    color="textSecondary"
                    sx={{ mt: 1 }}
                    variant="body2"
                  >
                    Select your preferred language
                  </Typography>
                </div>
                <RadioGroup
                  value={localSettingsState.localeName || 'enUS'}
                  onChange={handleLocaleChange}
                >
                  <FormControlLabel
                    value="ruRU"
                    control={<Radio />}
                    label="Русский"
                  />
                  <FormControlLabel
                    value="enUS"
                    control={<Radio />}
                    label="English"
                  />
                </RadioGroup>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Page>
  )
}

export const testContent = 'Profile test content'
export default withRenderingTest(Profile, testContent)
