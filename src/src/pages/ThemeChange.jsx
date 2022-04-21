import React, { useContext } from "react";

const themes = {
    dark: {
      foreground: "#000000",
      background: "#C6E6C3"
    },
    light: {
      foreground: "#ffffff",
      background: "#769973"
    }
  };
  
  const ThemeContext = React.createContext(themes.dark);
  
  class ThemeChange extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        theme: themes.dark,
      };
  
      this.toggleTheme = () => {
        this.setState(state => ({
          theme:
            state.theme === themes.dark
              ? themes.light
              : themes.dark,
        }));
      };
    }
  
    render() {
      return (
        <>
          <ThemeContext.Provider value={this.state.theme}>
            <Toolbar changeTheme={this.toggleTheme} />
          </ThemeContext.Provider>
        </>
      );
    }
  }
 
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton onClick={props.changeTheme}>
            Subscribe
        </ThemedButton>
      </div>
    );
  }
  
  class ThemedButton extends React.Component {
    render() {
      let props = this.props;
      let theme = this.context;
      return (
        <button
          {...props}
          style={{backgroundColor: theme.background, color: theme.foreground}}
        />
      );
    }
  }
  ThemedButton.contextType = ThemeContext;

  export default ThemeChange