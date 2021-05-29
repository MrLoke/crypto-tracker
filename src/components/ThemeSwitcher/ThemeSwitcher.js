import { useTheme } from 'context/ThemeContext'
import Switch from 'react-switch'
import { FiSun } from 'react-icons/fi'
import { FiMoon } from 'react-icons/fi'

const ThemeSwitcher = () => {
  const { themeMode, toggleTheme } = useTheme()

  const handleThemeChange = () => toggleTheme()

  return (
    <>
      <Switch
        checked={themeMode === 'lightTheme' ? true : false}
        className='test'
        height={30}
        width={70}
        onColor='#111'
        offColor='#111'
        checkedIcon={
          <FiSun
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: 30,
              paddingLeft: 10,
            }}
            color={themeMode === 'lightTheme' ? 'white' : 'grey'}
          />
        }
        uncheckedIcon={
          <FiMoon
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: 30,
              paddingLeft: 10,
            }}
            color={themeMode === 'darkTheme' ? '#eee' : '#eee'}
          />
        }
        onChange={handleThemeChange}
      />
    </>
  )
}

export default ThemeSwitcher
