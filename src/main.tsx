import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider, } from 'antd';
import "./styles/global.css";
import App from './App.tsx'
const theme = {
  token: {
  },
  components: {
    Button: {
      //colorPrimaryHover: "#fff",
    },
    Input: {
      activeBorderColor: '#d9d9d9',
      hoverBorderColor: '#d9d9d9',
    },

  }
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>

  </StrictMode>,
)




